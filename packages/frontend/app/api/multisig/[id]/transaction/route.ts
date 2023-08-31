import {TMultiSigTransaction} from "@/types/MultiSig";
import {NextRequest, NextResponse} from "next/server";
import {Address} from "viem";

const txns: Record<Address, TMultiSigTransaction[]> = {
    "0x80925399c1332cAE074Ebce591C58a4cf34E3D4d": [{
        to: '0x4469880099472dDDFD357ab305AD2821D6E4647f',
        data: '0x0',
        value: 111,
        name: 'testTx',
        hash: '0x4e456ce1ebd302847c10548f8d0e8cbdee2ea5a4b60feeec409508ad7a6a8f53',
        txIndex: 1,
        approvedBy: []
    },
        {
            to: '0x80925399c1332cAE074Ebce591C58a4cf34E3D4d',
            data: '0x0',
            value: 44444,
            name: 'Another Test Tx',
            hash: '0x4e456ce1ebd302847c10548f8d0e8cbdee2ea5a4b60feeec409508ad7a6a8f51',
            txIndex: 1,
            approvedBy: ['0x4d97fa219bD42f42740659CA77d14e67d9eEd7E4']
        }
    ]
};

type Params = { params: { id: Address } };

export async function GET(req: NextRequest, {params}: Params) {
    const {id} = params;
    console.log("Getting transactions for ", id);
    return NextResponse.json(
        txns[id] ? txns[id].map((tx) => ({...tx, value: `${tx.value}`})) : [],
    );
    // TODO: pull in approvers map
}

export async function POST(request: NextRequest, {params}: Params) {
    const tx = (await request.json()) as TMultiSigTransaction;

    if (!txns[params.id]) {
        txns[params.id] = [];
    }
    txns[params.id].push({...tx, approvedBy: []});
    console.log("POSTING", tx, params.id);
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