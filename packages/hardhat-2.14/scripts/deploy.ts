import { writeFileSync, readFileSync} from "fs";
import {execSync} from "child_process"
import { ethers, tenderly } from "hardhat";

async function main() {
  
  const multisigFactory = await ethers.deployContract("MultiSigFactory");
  await multisigFactory.deployed();
  
  await tenderly.verify({
    name: "MultiSigFactory",
    address: multisigFactory.address,
  });

  
  const MultiSigFactoryAbi = JSON.parse(readFileSync("artifacts/contracts/MultiSigFactory.sol/MultiSigFactory.json").toString()).abi;
  const MultiSigAbi = JSON.parse(readFileSync("artifacts/contracts/MultiSigWallet.sol/MultiSigWallet.json").toString()).abi;
  console.log(MultiSigFactoryAbi)
  writeFileSync(
    "../frontend/app/deployment.json",
    JSON.stringify({
      multiSigFactory: {
        address: multisigFactory.address,
        network: ethers.provider.network,
        abi: MultiSigFactoryAbi
      }
    },null, 2)
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
