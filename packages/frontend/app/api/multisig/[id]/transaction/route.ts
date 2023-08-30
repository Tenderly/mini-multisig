import {TMultiSigTransaction} from "@/types/MultiSig";
import {NextRequest, NextResponse} from "next/server";
import {Address} from "viem";

const txns: TMultiSigTransaction[] = {
    '0xB9D1435a385460753F880D8b46F37F86ef37e8fd': [
        {
            to: '0x4469880099472dDDFD357ab305AD2821D6E4647f',
            data: '0x0',
            value: 111,
            name: 'testTx',
            txIndex: 5
        }
    ]
}

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