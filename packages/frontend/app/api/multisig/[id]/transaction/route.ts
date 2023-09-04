import {TMultiSigTransaction} from "@/types/MultiSig";
import {NextRequest, NextResponse} from "next/server";
import {Address} from "viem";

const txns: Record<Address, TMultiSigTransaction[]> = {
    
};

type Params = { params: { id: Address } };

export async function GET(req: NextRequest, {params}: Params) {
    const {id} = params;
    const transactions = txns[id] ? txns[id].map((tx) => ({...tx, value: `${tx.value}`})) : [];
    // console.log("Getting transactions for ", id, transactions);
    return NextResponse.json(
        transactions
    );
    // TODO: pull in approvers map from the chain
}

export async function POST(request: NextRequest, {params}: Params) {
    const tx = (await request.json()) as TMultiSigTransaction;

    if (!txns[params.id]) {
        txns[params.id] = [];
    }
    txns[params.id].push({...tx, approvedBy: []});
    console.log("Storing transaction in multiSig " + params.id, tx,);
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