import { TMultiSigTransaction } from "@/types/MultiSig";
import { NextRequest, NextResponse } from "next/server";
import { Address } from "viem";

const txns: Record<Address, TMultiSigTransaction[]> = {
  "0x7851131AA8F8d305dcc668462c88e33D0161c5ae": [
    {
      to: '0x4469880099472dDDFD357ab305AD2821D6E4647f',
      data: '0x0',
      value: 111,
      name: 'testTx',
      hash: '0x06d361788874f5071bcbf6e312a736c7d117eb9c595c35ea4c1dde80715c2c9b',
      txIndex: 0,
      approvedBy: []
    }
  ],
};

type Params = { params: { id: Address } };

export async function GET(req: NextRequest, { params }: Params) {
  const { id } = params;
  console.log("Getting transactions for ", id);
  return NextResponse.json(
    txns[id] ? txns[id].map((tx) => ({ ...tx, value: `${tx.value}` })) : [],
  );
  // TODO: pull in approvers map
}

export async function POST(request: NextRequest, { params }: Params) {
  const tx = (await request.json()) as TMultiSigTransaction;

  if (!txns[params.id]) {
    txns[params.id] = [];
  }
  txns[params.id].push({ ...tx, approvedBy: [] });
  console.log("POSTING", tx, params.id);
  return NextResponse.json({ message: "OK" });
}

export async function PUT(request: NextRequest, { params }: Params) {
  const txUpdate = (await request.json()) as Partial<TMultiSigTransaction>;
  if(!txUpdate.approvedBy){
    return NextResponse.json({ message: "OK" });
  }
  txns[params.id].filter(tx=>tx.hash == txUpdate.hash)[0].approvedBy = txUpdate.approvedBy;
  console.log("POSTING", txUpdate, params.id);
  return NextResponse.json({ message: "OK" });
}