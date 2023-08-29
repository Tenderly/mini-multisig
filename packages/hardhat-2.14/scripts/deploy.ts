import { writeFileSync, readFileSync, copyFileSync} from "fs";
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
  const multiSigWalletBuildInfo = JSON.parse(readFileSync("artifacts/contracts/MultiSigWallet.sol/MultiSigWallet.dbg.json").toString()).buildInfo
  // ../../build-info/10733e5741f0e4122f76e576f7180e1c.json
  const multiSigWalletBuildInfoRel = multiSigWalletBuildInfo.slice(multiSigWalletBuildInfo.indexOf("build-info"))
  console.log("Build Info", multiSigWalletBuildInfoRel);

  copyFileSync(`artifacts/${multiSigWalletBuildInfoRel}`, "../frontend/multisigWalletBuildInfo.json")
  writeFileSync(
    "../frontend/app/deployment.json",
    JSON.stringify({
      multiSigFactory: {
        address: multisigFactory.address,
        network: ethers.provider.network,
        abi: MultiSigFactoryAbi
      },
      multiSig:{
        abi: MultiSigAbi
      }
    },null, 2)
  );
  // HOW TO VERIFY MULTISIG?
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
