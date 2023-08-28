import { TTransaction } from "@/types/MultiSig";
import { TransactionDescription } from "ethers/lib/utils";
import { NextRequest, NextResponse } from "next/server";

const txns: TTransaction[] = [
    {   data: "0x0",
        // chainId: 1,
        to: '0x4d97fa219bD42f42740659CA77d14e67d9eEd7E4',
        value: 11,
        name: "test",
        from: "0x0x4469880099472dDDFD357ab305AD2821D6E4647f"},
        { 
        // chainId: 1,
        to: '0x4d97fa219bD42f42740659CA77d14e67d9eEd7E4',
        value: 11,
        name: "test",
        from: "0x0x4469880099472dDDFD357ab305AD2821D6E4647f"}
];
export async function GET() {
    
    return NextResponse.json(txns.map(tx => ({...tx, value: `${tx.value}`})));
  }
  

  export async function POST(request: NextRequest){
    txns.push((await request.json()) as TTransaction);
    return NextResponse.json({ message: "OK" });
  }