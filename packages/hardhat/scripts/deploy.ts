import { writeFileSync, readFileSync, copyFileSync } from "fs";
import { ethers, tenderly } from "hardhat";

async function main() {
  const multisigFactory = await ethers.deployContract("MultiSigFactory");
  await multisigFactory.deployed();

  await tenderly.verify({
    name: "MultiSigFactory",
    address: multisigFactory.address,
  });

  // primitive config management
  const MultiSigFactoryAbi = JSON.parse(
    readFileSync(
      "artifacts/contracts/MultiSigFactory.sol/MultiSigFactory.json",
    ).toString(),
  ).abi;
  const MultiSigAbi = JSON.parse(
    readFileSync(
      "artifacts/contracts/MultiSigWallet.sol/MultiSigWallet.json",
    ).toString(),
  ).abi;
  const multiSigWalletBuildInfo = JSON.parse(
    readFileSync(
      "artifacts/contracts/MultiSigWallet.sol/MultiSigWallet.dbg.json",
    ).toString(),
  ).buildInfo;

  const multiSigWalletBuildInfoRel = multiSigWalletBuildInfo.slice(
    multiSigWalletBuildInfo.indexOf("build-info"),
  );
  console.log("Build Info", multiSigWalletBuildInfoRel);

  writeFileSync(
    "../frontend/app/deployment.json",
    JSON.stringify(
      {
        multiSigFactory: {
          address: multisigFactory.address,
          network: ethers.provider.network,
          abi: MultiSigFactoryAbi,
        },
        multiSig: {
          abi: MultiSigAbi,
        },
      },
      null,
      2,
    ),
  );
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
