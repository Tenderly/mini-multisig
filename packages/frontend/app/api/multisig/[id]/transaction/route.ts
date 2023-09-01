import {TMultiSigTransaction} from "@/types/MultiSig";
import {NextRequest, NextResponse} from "next/server";
import {Address} from "viem";

const txns: Record<Address, TMultiSigTransaction[]> = {
    "0x13dA60f271c1b413790C07404C04c14424d90330": [
        {
        to: '0x4469880099472dDDFD357ab305AD2821D6E4647f',
        data: '0x0',
        value: 111,
        name: 'testTx',
        hash: '0xf97d392c9fd45da5f1829ee7e4771c2f5a700cfa8835e2ec6b7cc64d46a0e007',
        txIndex: 0,
        approvedBy: []
      }
    ]
};

type Params = { params: { id: Address } };

export async function GET(req: NextRequest, {params}: Params) {
    const {id} = params;
    const transactions = txns[id] ? txns[id].map((tx) => ({...tx, value: `${tx.value}`})) : [];
    // console.log("Getting transactions for ", id, transactions);
    return NextResponse.json(
        transactions
    );
    // TODO: pull in approvers map
}

export async function POST(request: NextRequest, {params}: Params) {
    const tx = (await request.json()) as TMultiSigTransaction;

    if (!txns[params.id]) {
        txns[params.id] = [];
    }
    txns[params.id].push({...tx, approvedBy: []});
    console.log("Storing transaction in multiSig "+params.id , tx, );
    return NextResponse.json({message: "OK"});
}

export async function PUT(request: NextRequest, {params}: Params) {
    const txUpdate = (await request.json()) as Partial<TMultiSigTransaction>;
    if (!txUpdate.approvedBy) {
        return NextResponse.json({message: "OK"});
    }
    txns[params.id].filter(tx => tx.hash == txUpdate.hash)[0].approvedBy = txUpdate.approvedBy;
    console.log("POSTING", txUpdate, params.id);
    return NextResponse.json({message: "OK"});
}