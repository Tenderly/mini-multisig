import { TMultiSig } from "@/types/MultiSig";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const req: TMultiSig = await request.json();
  console.log("Posting", req);
  if (t.filter((multiSig) => multiSig.address == req.address).length == 0) {
    t.push(req);
  }
  return NextResponse.json({ message: "OK" });
}
const t: TMultiSig[] = [
    {
        name: '111',
        address: '0x938e209586fB3B77c52ef8FB3CcB93E7ACD10f5c',
        owners: [
            '0x4469880099472dDDFD357ab305AD2821D6E4647f',
            '0x4d97fa219bD42f42740659CA77d14e67d9eEd7E4',
            '0xE58b9ee93700A616b50509C8292977FA7a0f8ce1'
        ],
        signaturesRequired: { type: 'BigNumber', hex: '0x02' }
    }
];
export async function GET() {
  return NextResponse.json(t);
}
