import {TMultiSigTransaction} from "@/types/MultiSig";
import {NextRequest, NextResponse} from "next/server";
import {Address} from "viem";

const txns: TMultiSigTransaction[] = {};

type Params = { params: { id: string } };

export async function GET(req: NextRequest, {params}: Params) {
    const {id} = params;
    console.log("Getting", params, txns)

    return NextResponse.json(txns[id] ? txns[id].map(tx => ({...tx, value: `${tx.value}`})) : []);

}


export async function POST(request: NextRequest, {params}: Params) {
    const tx = (await request.json()) as TMultiSigTransaction & { multiSigAddress: Address };
    if (!txns[params.id]) {
        txns[params.id] = []
    }
    txns[params.id].push(tx)
    console.log("POSTING", tx, params.id)
    return NextResponse.json({message: "OK"});
}