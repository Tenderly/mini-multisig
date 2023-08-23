import { writeFileSync } from "fs";
import { ethers, tenderly } from "hardhat";

async function main() {
  const multisigFactory = await ethers.deployContract("MultiSigFactory");
  await multisigFactory.deployed();

  await tenderly.verify({
    name: "MultiSigFactory",
    address: multisigFactory.address,
  });

  writeFileSync(
    "../frontend/deployment.json",
    JSON.stringify({
      multiSigFactory: {
        address: multisigFactory.address,
        network: ethers.provider.network,
      },
    })
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
