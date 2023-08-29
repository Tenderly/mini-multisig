"use client";
import {ChangeEvent, useEffect, useState} from "react";
import {BigNumber, BytesLike, ethers} from "ethers";
import {Button, Form, TextArea, TextInput} from "@carbon/react";
import {
    useContractWrite,
    useNetwork,
    usePrepareContractWrite,
    usePrepareSendTransaction,
    useSendTransaction,
    useWaitForTransaction,
} from "wagmi";
import {Abi, Address, parseEther} from "viem";
import {TData, TMultiSig, TMultiSigTransaction, TTransaction} from "@/types/MultiSig";

const BigIntReplacer = (k: any, v: any) => typeof v === 'bigint' ? v.toString() : v;

function MultiSigListItem(
    multiSig: TMultiSig,
    select: () => void,
    selected: boolean,
) {
    return (
        <a
            href="#"
            onClick={select}
            className={`hover:bg-blue-50 ${selected ? "bg-blue-50" : ""}`}
            key={multiSig.address}
        >
            {multiSig.address}
        </a>
    );
}

async function loadMultiSigs() {
    console.log("Loading multisigs")
    return (await (
        await fetch("api/multisig", {method: "GET"})
    ).json()) as TMultiSig[];
}

type MultiSigParams = {
    multiSig: TMultiSig;
    transactions?: TMultiSigTransaction[];
    multiSigAbi: Abi
};

function MultiSig({multiSig, multiSigAbi}: MultiSigParams) {
    const [transactions, setTransactions] = useState([] as TMultiSigTransaction[])
    const loadTranasctions = () => {
        console.log("Loading TXs")
        fetch(`api/multisig/${multiSig.address}/transaction`, {
            method: "GET"
        }).then(r => r.json()).then(setTransactions);
    }
    useEffect(loadTranasctions, [])
    return (
        <>
            <h5>
                <code>@{multiSig.address}</code>
            </h5>
            Owners:{" "}
            <ul>
                {multiSig.owners.map((ownerAddress) => {
                    return <li key={ownerAddress}>{ownerAddress}</li>;
                })}
            </ul>
            <br/>
            Number of signers:{" "}
            {BigNumber.from(multiSig.signaturesRequired.hex).toNumber()}
            <br/>
            <Transactions multiSig={multiSig} transactions={transactions} multiSigAbi={multiSigAbi}/>
            <SubmitTransaction multiSig={multiSig} multiSigAbi={multiSigAbi} onSubmitted={loadTranasctions}/>
        </>
    );
}

function CreateMultiSig({
                            multiSigFactoryAddress,
                            multiSigFactoryAbi,
                            onCreated,
                        }: {
    multiSigFactoryAddress: Address;
    multiSigFactoryAbi: Abi;
    onCreated: () => void;
}) {
    const DEFAULT_OWNERS = [
        "0x4469880099472dDDFD357ab305AD2821D6E4647f",
        "0x4d97fa219bD42f42740659CA77d14e67d9eEd7E4",
        "0xE58b9ee93700A616b50509C8292977FA7a0f8ce1",
    ].join("\n");
    const [multiSig, setMultiSig] = useState({
        owners: DEFAULT_OWNERS.split("\n"),
        name: "first multisig",
    } as {
        owners: Address[];
        name: string;
    });

    const {config} = usePrepareContractWrite({
        address: multiSigFactoryAddress,
        abi: multiSigFactoryAbi,
        functionName: "create",
        args: [1, multiSig.owners, 2],
    });

    const {write, data} = useContractWrite(config);
    const tx = useWaitForTransaction({hash: data?.hash});
    const {isLoading, isSuccess, isError} = tx;

    useEffect(() => {
        console.log("TX DATA", isLoading, isSuccess);
        const ifc = new ethers.utils.Interface(JSON.stringify(multiSigFactoryAbi));
        const createdTopic = ifc.getEventTopic("Create");

        const logs = tx.data?.logs
            .filter((log) => log.topics.indexOf(createdTopic) >= 0)
            .map((log) => ifc.parseLog(log));

        if (!logs) {
            return;
        }

        const contractAddress = logs[0].args.contractAddress;
        const owners = logs[0].args.owners;
        const signaturesRequired = logs[0].args.signaturesRequired;

        fetch("api/multisig", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                name: multiSig.name,
                address: contractAddress,
                owners,
                signaturesRequired,
            }),
        }).then(() => {
            onCreated();
        });

        console.log(logs, {contractAddress, owners, signaturesRequired});
    }, [isLoading, tx, isSuccess]);

    return (
        <div>
            <Form>
                <TextInput
                    name="name"
                    id="name"
                    labelText="MultiSig Name"
                    onChange={(e) =>
                        setMultiSig({...multiSig, name: e.target.value.trim()})
                    }
                />
                <TextArea
                    name="owners"
                    id="owners"
                    labelText="Owners"
                    value={DEFAULT_OWNERS}
                    onChange={(e) =>
                        setMultiSig({
                            ...multiSig,
                            owners: e.target.value.split("\n") as Address[],
                        })
                    }
                />
            </Form>
            <Button
                disabled={!write || isLoading}
                onClick={() => {
                    console.log("writing...", write);
                    write?.();
                }}
            >
                {isLoading ? "Creating" : "Create Multisig"}
            </Button>
            {isSuccess && <strong>Created ${data?.hash}</strong>}
            {isError && <strong> Errored out</strong>}
        </div>
    );
}

function TxOverview({
                        transaction,
                        multiSig,
                        onProposed,
                        multiSigAbi
                    }: {
    transaction: TTransaction;
    multiSig: TMultiSig;
    onProposed: () => void;
    multiSigAbi: Abi
}) {

    const txsend = {...transaction, value: BigInt(transaction.value), data: transaction.data};
    const {config: writeConfig} = usePrepareContractWrite({
        address: multiSig.address,
        abi: multiSigAbi,
        functionName: 'submitTransaction',
        args: [
            txsend.to,
            txsend.value,
            txsend.data
        ]
    })

    const {write, data} = useContractWrite(writeConfig)
    const {isLoading, isSuccess, isError, data: transactionData} = useWaitForTransaction({hash: data?.hash});

    useEffect(() => {
        if (!isSuccess) {
            return;
        }
        const ifc = new ethers.utils.Interface(JSON.stringify(multiSigAbi));
        const createdTopic = ifc.getEventTopic("SubmitTransaction");
        console.log("Logs", transactionData.logs[0].topics)
        const createdEventRaw = transactionData.logs.filter(log => log.topics.indexOf(createdTopic) >= 0)[0];
        console.log("Topic", createdEventRaw, createdTopic)
        const createdEvent = ifc.parseLog(createdEventRaw);
        console.log(createdEvent.args.txIndex)

        fetch(`api/multisig/${multiSig.address}/transaction`, {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({...transaction, txIndex: createdEvent.args.txIndex.toNumber()} as TMultiSigTransaction, BigIntReplacer),
        }).then(onProposed);
    }, [isSuccess]);
    return (
        <div>
            <ul>
                <li>name: {transaction.name}</li>
                <li>to: {transaction.to}</li>
                <li>from: {transaction.from}</li>
                <li>value: {transaction.value.toString()}</li>
            </ul>
            <Button
                disabled={!write || isLoading}
                onClick={() => write?.()}
            >
                Submit
            </Button>
            {isSuccess && "Success!"}
            {isError && "Error!"}
        </div>
    );
}

function SubmitTransaction({multiSig, multiSigAbi, onSubmitted}: MultiSigParams & { onSubmitted: () => void }) {
    const network = useNetwork();
    const TXZERO = {
        to: "0x0" as TData,
        data: "0x0" as TData,
        value: 111,
        name: "testTx",
    };
    const [proposing, setProposing] = useState(false);
    const [review, setReview] = useState(false);

    const [tx, setTx] = useState<TTransaction>(TXZERO);

    const updateTx = (field: keyof TTransaction, value: string | BigNumber) =>
        setTx({...tx, [field]: value});
    const getEventVal = (e: ChangeEvent<HTMLInputElement>) => e.target.value;

    const reset = () => {
        setReview(false);
        setProposing(false);
        setTx(TXZERO);
    };
    return (
        <div>
            {!proposing && !review && (
                <Button onClick={() => setProposing(true)}>Propose TX</Button>
            )}
            {proposing && (
                <div>
                    <TextInput
                        labelText="name"
                        id="name"
                        onChange={(e) => updateTx("name", getEventVal(e))}
                        value={tx.name}
                    />
                    <TextInput
                        labelText="to"
                        id="to"
                        onChange={(e) => updateTx("to", getEventVal(e))}
                        value={tx.to}
                    />
                    <TextInput
                        labelText="data"
                        id="data"
                        onChange={(e) => updateTx("data", getEventVal(e))}
                        value={tx.data}
                        // TODO: add odd lenght validation
                    />

                    <TextInput
                        labelText="value"
                        id="value"
                        onChange={(e) => updateTx("value", BigNumber.from(getEventVal(e)))}
                        value={tx.value.toString()}
                    />

                    <Button onClick={() => setProposing(false)}>Cancel</Button>
                    {!review && (
                        <Button
                            onClick={() => {
                                setReview(true);
                                setProposing(false);
                            }}
                        >
                            Review
                        </Button>
                    )}
                </div>
            )}
            {review && (
                <div>
                    <h5>Review</h5>
                    <TxOverview transaction={tx} multiSig={multiSig} onProposed={() => {
                        reset();
                        onSubmitted();
                    }} multiSigAbi={multiSigAbi}/>

                    <Button
                        onClick={() => {
                            setProposing(false);
                            setReview(false);
                        }}
                    >
                        Clear
                    </Button>
                    <Button
                        onClick={() => {
                            setProposing(true);
                            setReview(false);
                        }}
                    >
                        Modify
                    </Button>
                </div>
            )}
        </div>
    );
}

function Transactions({transactions}: MultiSigParams) {
    return (
        <div>
            <h3>Transactions</h3>
            <ul>
                {transactions?.map((tx, idx) => (
                    <li key={idx}>
                        📬 {tx.to} | 💲{tx.value.toString()} | 🏷️ {tx.name}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default function MultiSigs({
                                      multiSigFactoryAddress,
                                      abi,
                                      multiSigAbi
                                  }: {
    multiSigFactoryAddress: Address;
    abi: Abi;
    multiSigAbi: Abi
}) {
    const [selected, setSelected] = useState<null | TMultiSig>(null);
    const [multiSigs, setMultiSigs] = useState([] as TMultiSig[]);
    const [creating, setCreating] = useState(false);
    const reloadMultiSigs = () => {
        loadMultiSigs().then(setMultiSigs);
    };

    useEffect(reloadMultiSigs, []);

    return (
        <div className="flex min-h-screen flex-col items-center justify-normal p-24">
            <div className="grid lg:max-w-5xl lg:w-full lg:grid-cols-2 lg:text-left">
                <div className="">
                    <h2 className="">MultiSigs</h2>
                    <div className="flex flex-col items-left">
                        {multiSigs.map((it) =>
                            MultiSigListItem(it, () => setSelected(it), it == selected),
                        )}
                        {!creating && (
                            <Button onClick={() => setCreating(true)}>Create MultiSig</Button>
                        )}
                        {creating && (
                            <CreateMultiSig
                                multiSigFactoryAddress={multiSigFactoryAddress}
                                multiSigFactoryAbi={abi}
                                onCreated={() => {
                                    console.log("Created!");
                                    setCreating(false);
                                    reloadMultiSigs();
                                }}
                            />
                        )}
                    </div>
                </div>
                <div>{!!selected && <MultiSig multiSig={selected} multiSigAbi={multiSigAbi}/>}</div>
            </div>
        </div>
    );
}
