import {TMultiSig} from "@/types/MultiSig";
import {NextResponse} from "next/server";
import {exec} from 'child_process'

export async function POST(request: Request) {
    const req: TMultiSig = await request.json();
    if (t.filter((multiSig) => multiSig.address == req.address).length == 0) {
        console.log("Adding MultiSig", req)
        t.push(req);
        exec(`cd ../hardhat-2.14 && npx hardhat verifyExistingMS --network tenderly --address ${req.address}`,
            function (err, stdout, stderr) {
                console.log(stdout)
                console.log(stderr)
            });
    } else {
        console.log("Already existing Multisig!")
    }
    console.log("Verifying MultiSig at:", req.address)


    return NextResponse.json({message: "OK"});
}

const t: TMultiSig[] = [

];

export async function GET() {
    return NextResponse.json(t);
}
