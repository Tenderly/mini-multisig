import {TMultiSig} from "@/types/MultiSig";
import {NextResponse} from "next/server";
import {exec} from 'child_process'

export async function POST(request: Request) {
    const req: TMultiSig = await request.json();
    if (t.filter((multiSig) => multiSig.address == req.address).length == 0) {
        t.push(req);
    }
    // console.log("Verifying address", req.address)
    const ret = (await exec("PWD", function (err, stdout, stderr) {
        console.log(stdout.toString());
        // console.error(stderr.toString())
    }));
    // console.log(ret.stdout.());
    await exec(`PWD && cd ../hardhat-2.14 && npx hardhat verifyExistingMS --network tenderly --address ${req.address}`,
        function (err, stdout, stderr) {
            console.log(stdout)
            console.log(stderr)
        })
    console.log("Done")
    return NextResponse.json({message: "OK"});
}

const t: TMultiSig[] = [
    {
        name: 'test',
        address: '0x5de8947f07bdf7ad7bd9b99e66c4d18e14354029',
        owners: [
            '0x4469880099472dDDFD357ab305AD2821D6E4647f',
            '0x4d97fa219bD42f42740659CA77d14e67d9eEd7E4',
            '0xE58b9ee93700A616b50509C8292977FA7a0f8ce1'
        ],
        signaturesRequired: {type: 'BigNumber', hex: '0x02'}
    }
];

export async function GET() {
    return NextResponse.json(t);
}
