import { writeFileSync, readFileSync, copyFileSync} from "fs";
import { ethers, tenderly } from "hardhat";

async function main() {
  const multisigFactory = await ethers.deployContract("MultiSigWallet");
  await tenderly.verify({
    name: "MultiSigFactory",
    address: multiSigAddress,
  });
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
