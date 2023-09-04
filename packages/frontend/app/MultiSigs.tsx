"use client";
import {
    TData,
    TMultiSig,
    TMultiSigTransaction,
    TTransaction,
} from "@/types/MultiSig";
import {BigNumber, ethers} from "ethers";
import {ChangeEvent, forwardRef, useEffect, useImperativeHandle, useState} from "react";
import {Abi, Address, parseEther} from "viem";
import {
    useAccount, useBalance,
    useContractWrite,
    usePrepareContractWrite, usePrepareSendTransaction, useSendTransaction,
    useWaitForTransaction,
} from "wagmi";

import {Button} from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import {Input} from "@/components/ui/input";
import {Label} from "@radix-ui/react-label";

import {Textarea} from "@/components/ui/textarea";
import {Accordion, AccordionContent, AccordionItem, AccordionTrigger} from "@/components/ui/accordion";
import {Check, Send} from "lucide-react";

const BigIntReplacer = (k: any, v: any) =>
    typeof v === "bigint" ? v.toString() : v;

function MultiSigListItem(
    multiSig: TMultiSig,
    select: () => void,
    selected: boolean,
) {
    return (
        <Button
            onClick={select}
            // className={`hover:bg-blue-50 ${selected ? "bg-blue-50" : ""}`}
            key={multiSig.address}
            data-testid={`ms-multisig-btn-${multiSig.name}`}
            variant="ghost"
        >
            {multiSig.name} {multiSig.address}
        </Button>
    );
}

async function loadMultiSigs() {
    console.log("Loading multisigs");
    return (await (
        await fetch("api/multisig", {method: "GET"})
    ).json()) as TMultiSig[];
}

type MultiSigParams = {
    multiSig: TMultiSig;
    transactions?: TMultiSigTransaction[];
    multiSigAbi: Abi;
};

function MultiSig({multiSig, multiSigAbi}: MultiSigParams) {
    const [transactions, setTransactions] = useState(
        [] as TMultiSigTransaction[],
    );
    const {data, isSuccess, isError} = useBalance({address: multiSig.address})
    const [funding, setFunding] = useState(false)
    const loadTranasctions = () => {
        console.log("Loading TXs");
        fetch(`api/multisig/${multiSig.address}/transaction`, {
            method: "GET",
        })
            .then((r) => r.json())
            .then(setTransactions);
    };
    useEffect(loadTranasctions, [multiSig.address]);
    return (
        <div className="space-y-2">
            <h4 className="text-xl">
                {multiSig.name} ({data?.formatted} {data?.symbol})
            </h4>
            <code><small>{multiSig.address}</small></code>
            <div>
                <Button onClick={() => setFunding(true)} variant="outline" data-testid="ms-fund-btn">Fund</Button>
            </div>
            <SubmitTransaction
                multiSig={multiSig}
                multiSigAbi={multiSigAbi}
                onSubmitted={loadTranasctions}
            />
            {funding && <FundMultiSig multiSig={multiSig} onCancel={() => setFunding(false)}/>}
            <h4 className="text-xl">Owners:{" "}</h4>
            <ul>
                {multiSig.owners.map((ownerAddress) => {
                    return <li key={ownerAddress}><small>{ownerAddress}</small></li>;
                })}x
            </ul>
            <br/>
            Number of signers:{" "}
            {multiSig.signaturesRequired}

            <Transactions
                multiSig={multiSig}
                transactions={transactions}
                multiSigAbi={multiSigAbi}
                onRefresh={loadTranasctions}
            />
        </div>
    );
}

function FundMultiSig({multiSig, onCancel}: { multiSig: TMultiSig, onCancel: () => void }) {
    const [amount, setAmount] = useState(0.1);
    const {config, error} = usePrepareSendTransaction(
        {
            to: multiSig.address,
            value: parseEther(amount.toString())
        }
    )
    const {sendTransaction} = useSendTransaction(config)
    return <Dialog open onOpenChange={open => {
        if (!open) {
            onCancel()
        }
    }}>
        <DialogContent>
            <DialogHeader><h2>Funding multisig</h2> <small>{multiSig.address}</small></DialogHeader>
            <Input type="number" value={amount} onChange={e => setAmount(Number.parseFloat(e.target.value))}/>
            <DialogFooter>
                <Button disabled={!sendTransaction} onClick={() => sendTransaction?.()} data-testid="ms-fund-confirm-btn">Fund</Button>
                <Button onClick={onCancel}>Cancel</Button>
            </DialogFooter>
        </DialogContent>
    </Dialog>
}

function MultiSigCreateReview({
                                  multiSigFactoryAddress,
                                  multiSigFactoryAbi,
                                  onCreated,
                                  multiSig,
                                  onCanCreate,
                                  triggerCreate
                              }
                                  :
                                  {
                                      multiSigFactoryAddress: Address;
                                      multiSigFactoryAbi: Abi;
                                      onCreated: () => void;
                                      multiSig: TMultiSig;
                                      triggerCreate: boolean;
                                      onCanCreate: (can: boolean) => void;
                                  }
) {
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
        if (!triggerCreate) {
            return;
        }
        write?.()
    }, [triggerCreate])

    useEffect(() => {
        onCanCreate(!!write);
    }, [write])

    useEffect(() => {
        if (!isSuccess && isError) {
            console.error("MultiSig creation failed");
            return;
        }

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

        // TODO: contract verification doesn't really work :(
        setTimeout(() => {
            console.log("Posting MultiSig to API")
            fetch("api/multisig", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({
                    name: multiSig.name,
                    address: contractAddress,
                    owners,
                    signaturesRequired: (signaturesRequired as BigNumber).toNumber(),
                }),
            }).then(onCreated);
        }, 1000);

        console.log(logs, {contractAddress, owners, signaturesRequired});
    }, [isSuccess]);
    return (
        <div>
            Owners:
            {multiSig.owners.map((o) => (
                <li key={o}>{o}</li>
            ))}
            <br/>
            Name: {multiSig.name}
            <br/>
            Signatures required:
            {multiSig.signaturesRequired + ""}/{multiSig.owners.length}
        </div>
    );
}

function TxOverview({
                        transaction,
                        multiSig,
                        onSubmitted,
                        multiSigAbi,
                        triggerSend,
                        onCanSend
                    }: {
    transaction: TTransaction;
    multiSig: TMultiSig;
    onSubmitted: () => void;
    multiSigAbi: Abi;
    triggerSend: boolean;
    onCanSend: (can: boolean) => void;
}) {
    const txsend = {
        ...transaction,
        value: BigInt(transaction.value),
        data: transaction.data,
    };
    const {config: writeConfig} = usePrepareContractWrite({
        address: multiSig.address,
        abi: multiSigAbi,
        functionName: "submitTransaction",
        args: [txsend.to, txsend.value, txsend.data],
    });

    const {write, data} = useContractWrite(writeConfig);
    const {
        isLoading,
        isSuccess,
        isError,
        data: transactionData,
    } = useWaitForTransaction({hash: data?.hash});

    useEffect(() => {
        if (triggerSend) {
            write?.()
        }
    }, [triggerSend])

    useEffect(() => {
        onCanSend(!!write)
    }, [write])

    useEffect(() => {
        if (!isSuccess) {
            return;
        }
        const ifc = new ethers.utils.Interface(JSON.stringify(multiSigAbi));
        const createdTopic = ifc.getEventTopic("SubmitTransaction");
        if (!transactionData) {
            return;
        }

        console.log("Logs", transactionData.logs[0].topics);
        const createdEventRaw = transactionData.logs.filter(
            (log) => log.topics.indexOf(createdTopic) >= 0,
        )[0];
        console.log("Topic", createdEventRaw, createdTopic);
        const createdEvent = ifc.parseLog(createdEventRaw);
        console.log(createdEvent.args.txIndex);

        fetch(`api/multisig/${multiSig.address}/transaction`, {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(
                {
                    ...transaction,
                    hash: data?.hash,
                    txIndex: createdEvent.args.txIndex.toNumber(),
                    approvedBy: [],
                } as TMultiSigTransaction,
                BigIntReplacer,
            ),
        }).then(onSubmitted);
    }, [isSuccess]);

    return (
        <div>
            <ul>
                <li>name: {transaction.name}</li>
                <li>to: {transaction.to}</li>
                <li>from: {transaction.from}</li>
                <li>value: {transaction.value.toString()}</li>
            </ul>

            {isSuccess && "Success!"}
            {isError && "Error!"}
        </div>
    );
}

function SubmitTransaction({
                               multiSig,
                               multiSigAbi,
                               onSubmitted,
                           }: MultiSigParams & {
    onSubmitted: () => void;
}) {
    const TXZERO: TTransaction = {
        to: "0x0" as Address,
        data: "0x0" as TData,
        value: 111,
        name: "testTx",
        hash: "",
    };
    const [proposing, setProposing] = useState(false);
    const [review, setReview] = useState(false);

    const [tx, setTx] = useState<TTransaction>(TXZERO);

    const updateTx = (field: keyof TTransaction, value: string | number) =>
        setTx({...tx, [field]: value});
    const getEventVal = (e: ChangeEvent<HTMLInputElement>) => e.target.value;

    const reset = () => {
        setReview(false);
        setProposing(false);
        setTx(TXZERO);
        setTriggerSend(false);
    };
    // const [open, setOpen] = useState(false);
    const [triggerSend, setTriggerSend] = useState(false);
    const [sendable, setSendable] = useState(false)
    return (
        <div>
            <Dialog open={proposing} onOpenChange={(open) => {
                if (!open) {
                    reset();
                }
            }}>
                <DialogTrigger asChild>
                    <Button onClick={() => setProposing(true)} data-testid={"ms-propose-tx-btn"}>Propose TX</Button>
                </DialogTrigger>

                <DialogContent>
                    <DialogHeader>Propose TX</DialogHeader>
                    {!review && (
                        <div>
                            <Label htmlFor="name">Name</Label>
                            <Input
                                placeholder="name"
                                id="name"
                                onChange={(e) => updateTx("name", getEventVal(e))}
                                value={tx.name}
                            />
                            <Label htmlFor="data">Data</Label>

                            <Input
                                placeholder="data"
                                id="data"
                                onChange={(e) => updateTx("data", getEventVal(e))}
                                value={tx.data}
                                // TODO: add odd lenght validation
                            />

                            <Label htmlFor="to">To</Label>

                            <Input
                                placeholder="to"
                                id="to"
                                onChange={(e) => updateTx("to", getEventVal(e))}
                                value={tx.to}
                                // TODO: add odd lenght validation
                            />

                            <Label htmlFor="value">Value</Label>
                            <Input
                                placeholder="value"
                                id="value"
                                name="value"
                                type="text"
                                onChange={(e) =>
                                    updateTx("value", Number.parseInt(getEventVal(e)))
                                }
                                value={tx.value.toString()}
                            />
                        </div>
                    )}
                    {review && (
                        <TxOverview
                            transaction={tx}
                            multiSig={multiSig}
                            onSubmitted={() => {
                                reset();
                                onSubmitted();
                            }}
                            multiSigAbi={multiSigAbi}
                            triggerSend={triggerSend}
                            onCanSend={(can) => setSendable(can)}
                        />
                    )}
                    <DialogFooter>
                        {!review && <Button onClick={() => setReview(true)} type="button">Review</Button>}
                        {review && <Button onClick={() => setTriggerSend((true))} disabled={!sendable}
                                           type="submit">Send</Button>}
                        <Button onClick={() => (review ? setReview(false) : reset())} type="reset"
                                variant={review ? 'outline' : 'destructive'}>
                            {review ? "Modify" : "Cancel"}
                        </Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </div>
    );
}

function Transaction({
                         transaction,
                         multiSigParams,
                         onRefresh,
                     }: {
    transaction: TMultiSigTransaction;
    multiSigParams: MultiSigParams;
    onRefresh: () => void;
}) {
    const me = useAccount();
    const [approval, setApproval] = useState(false);
    const [execution, setExecution] = useState(false);

    return (
        <Accordion type="single" collapsible>
            <AccordionItem value="item-1" data-testid={`ms-transaction-${transaction.txIndex}`}>
                <AccordionTrigger>
                    {transaction.txIndex}. {transaction.name} {transaction.approvedBy.length} / {multiSigParams.multiSig.signaturesRequired}
                </AccordionTrigger>
                <AccordionContent>
                    <div className="mb-3">
                        To: <code>{transaction.to}</code>
                    </div>

                    <div className="mb-3">Value: {transaction.value.toString()}</div>

                    <div>
                        {multiSigParams.multiSig.owners.map((owner) => {
                            return (
                                <div className="mb-3" key={owner}>
                                    {transaction.approvedBy.map(approver => approver.toLowerCase()).indexOf(owner.toLowerCase()) >= 0 ? "✅" : "⬛️"}{" "}
                                    <code>
                                        {owner.toLowerCase() == me.address?.toLowerCase() ?
                                            <strong>{owner}</strong> : owner}
                                    </code>
                                </div>
                            );
                        })}
                    </div>

                    <div>
                        <Button onClick={() => setApproval(true)} variant="outline" data-testid="ms-tx-approve">
                            <Check className='mr-1 h-3 w-4'/>
                            Approve
                        </Button>
                        {transaction.approvedBy.length >= 0 &&
                            <Button onClick={() => setExecution(true)} variant="outline" data-testid="ms-tx-approve"
                                    className="mr-10">
                                <Send className='mr-1 h-3 w-4'/>
                                Execute
                            </Button>
                        }
                    </div>

                    {approval && <TransactionApproval
                        transaction={transaction}
                        onCancelApproval={() => setApproval(false)}
                        multiSigParams={multiSigParams}
                        onProposed={() => {
                            onRefresh();
                            setApproval(false);
                        }}
                    />}

                    {execution && <TransactionExecution
                        transaction={transaction}
                        onCancel={() => setExecution(false)}
                        multiSigParams={multiSigParams}
                        onExecuted={() => {
                            onRefresh();
                            setExecution(false);
                        }}
                    />}

                </AccordionContent>
            </AccordionItem>
        </Accordion>
    )
}

function TransactionExecution({
                                  transaction,
                                  multiSigParams,
                                  onExecuted,
                                  onCancel
                              }: { multiSigParams: MultiSigParams, transaction: TMultiSigTransaction, onExecuted: () => void, onCancel: () => void }) {
    // Prepare TX
    // Write TX
    // post it's executed
    const {config, error: prepareContractWriteError} = usePrepareContractWrite({
        address: multiSigParams.multiSig.address,
        abi: multiSigParams.multiSigAbi,
        functionName: "executeTransaction",
        args: [transaction.txIndex],
    });

    const {write, data, error} = useContractWrite(config);
    const tx = useWaitForTransaction({hash: data?.hash});
    const {isLoading, isSuccess, isError} = tx;
    const me = useAccount();

    useEffect(() => {
        if (!isSuccess) {
            console.error("Execute failed");
            return;
        }
        fetch(`api/multisig/${multiSigParams.multiSig.address}/transaction`, {
            method: "PUT",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(
                {
                    hash: transaction.hash,
                    approvedBy: [...transaction.approvedBy, me.address],
                    executedBy: me.address
                } as TMultiSigTransaction,
                BigIntReplacer,
            ),
        }).then(onExecuted);

    }, [isSuccess])

    return <Dialog open={true} onOpenChange={(open) => {
        if (!open) {
            onCancel();
        }
    }}>
        <DialogContent>
            <DialogHeader>Execute TX</DialogHeader>
            {<div className="error-message">Can't execute</div>}
            <TransactionReview transaction={transaction} multiSigParams={multiSigParams}/>
            <DialogFooter>
                <Button disabled={!write} onClick={() => {
                    write?.()
                }} data-testid="ms-tx-execute-btn">Execute</Button>
                <Button variant="secondary" onClick={onCancel}>Cancel</Button>
            </DialogFooter>
        </DialogContent>
    </Dialog>
}

function TransactionApproval({
                                 transaction,
                                 multiSigParams,
                                 onCancelApproval,
                                 onProposed,
                             }: {
    transaction: TMultiSigTransaction;
    multiSigParams: MultiSigParams;
    onCancelApproval: () => void;
    onProposed: () => void;
}) {
    const {config, error: prepareContractWriteError} = usePrepareContractWrite({
        address: multiSigParams.multiSig.address,
        abi: multiSigParams.multiSigAbi,
        functionName: "confirmTransaction",
        args: [transaction.txIndex],
    });
    const {write, data} = useContractWrite(config);
    const tx = useWaitForTransaction({hash: data?.hash});
    const {isLoading, isSuccess, isError} = tx;
    const me = useAccount();

    useEffect(() => {
        if (!isSuccess) {
            return;
        }
        fetch(`api/multisig/${multiSigParams.multiSig.address}/transaction`, {
            method: "PUT",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(
                {
                    hash: transaction.hash,
                    approvedBy: [...transaction.approvedBy, me.address],
                } as TMultiSigTransaction,
                BigIntReplacer,
            ),
        }).then(onProposed);
    }, [isSuccess]);

    useEffect(() => {
        console.log(prepareContractWriteError)
    }, [prepareContractWriteError])

    return (
        <Dialog
            open={true}
            onOpenChange={open => !open && onCancelApproval()}
        >
            <DialogContent>
                <DialogHeader>Approve TX</DialogHeader>
                <TransactionReview transaction={transaction} multiSigParams={multiSigParams}/>
                {isSuccess}
                <DialogFooter>
                    <Button disabled={!write && !prepareContractWriteError} onClick={() => {
                        console.log("Approving TX...", write);
                        write?.();
                    }} data-testid='ms-tx-approve-confirm'>
                        Approve
                    </Button>
                    <Button onClick={onCancelApproval}>Cancel</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}

function TransactionReview({
                               transaction,
                               multiSigParams
                           }: { transaction: TMultiSigTransaction, multiSigParams: MultiSigParams }) {
    return (
        <div>
            <div className="mb-1">
                {transaction.txIndex}. {transaction.name}
            </div>
            <div className="mb-1">To: {transaction.to}</div>

            <div className="mb-1">Value: {transaction.value.toString()}</div>

            <div className="">
                {multiSigParams.multiSig.owners.map((owner) => {
                    return transaction.approvedBy.map(approver => approver.toLowerCase()).indexOf(owner.toLowerCase()) >= 0 ? "✅" : "⬛️";
                })}
            </div>
        </div>
    )
}

function Transactions(
    multiSigParams: MultiSigParams & {
        onRefresh: () => void;
    },
) {
    return (
        <div>
            <h4 className="text-lg">Transactions</h4>
            <ul>
                {multiSigParams.transactions?.map((tx, idx) => (
                    // <li key={idx}>
                    <Transaction key={tx.hash}
                                 transaction={tx}
                                 multiSigParams={multiSigParams}
                                 onRefresh={multiSigParams.onRefresh}
                    />
                    // </li>
                ))}
            </ul>
        </div>
    );
}

export default function MultiSigs({
                                      multiSigFactoryAddress,
                                      multiSigFactoryAbi,
                                      multiSigAbi,
                                  }: {
    multiSigFactoryAddress: Address;
    multiSigFactoryAbi: Abi;
    multiSigAbi: Abi;
}) {
    const [selected, setSelected] = useState<null | TMultiSig>(null);
    const [multiSigs, setMultiSigs] = useState([] as TMultiSig[]);

    const reloadMultiSigs = () => {
        loadMultiSigs().then(setMultiSigs);
    };

    useEffect(reloadMultiSigs, []);

    return (
        <div className="flex min-h-screen flex-col items-center justify-normal p-24">
            <div className="grid lg:max-w-5xl lg:w-full lg:grid-cols-2 lg:text-left space-x-10">
                <div className="">
                    <h2 className="text-2xl">MultiSigs</h2>
                    <div className="flex flex-col items-left space-y-2">
                        {multiSigs.map((it) =>
                            MultiSigListItem(it, () => setSelected(it), it == selected),
                        )}
                        <CreateMultiSigDialog
                            multiSigFactoryAddress={multiSigFactoryAddress}
                            multiSigFactoryAbi={multiSigFactoryAbi}
                            reloadMultiSigs={reloadMultiSigs}
                        />
                    </div>
                </div>
                <div>
                    {!!selected && (
                        <MultiSig multiSig={selected} multiSigAbi={multiSigAbi}/>
                    )}
                </div>
            </div>
        </div>
    );
}

function CreateMultiSigDialog({
                                  multiSigFactoryAddress,
                                  multiSigFactoryAbi,
                                  reloadMultiSigs,
                              }: {
    multiSigFactoryAddress: Address;
    multiSigFactoryAbi: Abi;
    reloadMultiSigs: () => void;
}) {

    const [creating, setCreating] = useState(false);
    const DEFAULT_OWNERS = [
        "0x4469880099472dDDFD357ab305AD2821D6E4647f",
        "0x4d97fa219bD42f42740659CA77d14e67d9eEd7E4",
        "0xE58b9ee93700A616b50509C8292977FA7a0f8ce1",
    ].join("\n");

    const ZERO_MULTISIG: TMultiSig = {
        owners: DEFAULT_OWNERS.split("\n"),
        name: "first multisig",
        signaturesRequired: 2,
        address: "0x00000000000000000000",
    };

    const [multiSig, setMultiSig] = useState(ZERO_MULTISIG);

    const [reviewing, setReviewing] = useState(false);
    const [triggerCreate, setTriggerCreate] = useState(false)
    const reset = () => {
        setCreating(false);
        setMultiSig(ZERO_MULTISIG);
        setReviewing(false);
        setTriggerCreate(false);
    }
    const [canCreate, setCanCreate] = useState(false);

    return (
        <Dialog onOpenChange={open => {
            if (!open) {
                reset()
            }
        }} open={creating}>
            <DialogTrigger asChild>
                <Button onClick={() => setCreating(true)} data-testid={"ms-create-multisig"}>Create MutiSig</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w[512px]">
                <DialogHeader>
                    <DialogTitle>New MultiSig</DialogTitle>
                    <DialogDescription>Add a name and owners list</DialogDescription>
                </DialogHeader>
                {!reviewing && (
                    <div className="grid gap-4 py-4">
                        <Label htmlFor="name">Name</Label>
                        <Input
                            name="name"
                            id="name"
                            placeholder="MultiSig Name"
                            onChange={(e) =>
                                setMultiSig({
                                    ...multiSig,
                                    name: e.target.value.trim(),
                                })
                            }
                            value={multiSig.name}
                        />
                        <Label htmlFor="signaturesRequired">Signatures required</Label>
                        <Input
                            name="signaturesRequired"
                            id="name"
                            type="number"
                            data-testid="ms-input-signatures-required"
                            placeholder="Signatures required"
                            onChange={(e) =>
                                setMultiSig({
                                    ...multiSig,
                                    signaturesRequired: Number.parseInt(e.target.value),
                                })
                            }
                            value={multiSig.signaturesRequired.toString()}
                        />

                        <Label htmlFor="owners">Owners</Label>
                        <Textarea
                            name="owners"
                            id="owners"
                            placeholder="Owners"
                            onChange={(e) =>
                                setMultiSig({
                                    ...multiSig,
                                    owners: e.target.value.split("\n") as Address[],
                                })
                            }
                            value={multiSig.owners.join("\n")}
                        />
                    </div>
                )}
                {reviewing && (
                    <MultiSigCreateReview
                        multiSigFactoryAddress={multiSigFactoryAddress}
                        multiSigFactoryAbi={multiSigFactoryAbi}
                        onCreated={() => {
                            setCreating(false);
                            reloadMultiSigs();
                        }}
                        multiSig={multiSig}
                        triggerCreate={triggerCreate}
                        onCanCreate={setCanCreate}
                    />
                )}
                <DialogFooter>
                    {!reviewing && (
                        <Button disabled={reviewing} onClick={() => setReviewing(true)}
                                data-testid="ms-multisig-review">
                            Review
                        </Button>
                    )}
                    {reviewing && (
                        <Button onClick={() => setTriggerCreate(true)} disabled={!canCreate}
                                data-testid="ms-multisig-create">Create</Button>
                    )}
                    {reviewing && (
                        <Button onClick={() => {
                            setReviewing(false);
                            setTriggerCreate(false)
                        }}>Modify</Button>
                    )}
                    {!reviewing && (
                        <Button onClick={reset} variant="destructive">Cancel</Button>
                    )}

                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}
