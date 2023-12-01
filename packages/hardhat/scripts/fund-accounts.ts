import { ethers } from "hardhat";

const amt = ethers.utils.hexValue(
  ethers.utils.parseUnits(process.argv[2] || "100", "ether").toHexString(),
);
const accountsArg = process.argv.slice(3);
const accounts =
  accountsArg.length > 0
    ? accountsArg
    : [
        "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266",
        "0xC305f4b9925b9eC6b3D0FCC42B7b22F1245A5011",
        "0xdb623c0f74d4ed5af4b254327147c4ac7e5d3fac",
        "0x3C44CdDdB6a900fa2b585dd299e03d12FA4293BC",
        "0x08B108B490389F158b3040faA1705339633b2455",
      ];

console.log(
  `FUNDING 
value: \t${amt}
accounts:
\t${accounts.join("\n\t")}`,
);

async function main() {
  await ethers.provider.send("tenderly_setBalance", [accounts, amt]);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
