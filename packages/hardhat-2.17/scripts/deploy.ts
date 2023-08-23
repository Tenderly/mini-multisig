import { writeFileSync } from "fs";
import { ethers, tenderly } from "hardhat";

async function main() {
  const multisigFactory = await ethers.deployContract("MultiSigFactory");
  writeFileSync("MSF-with.json", JSON.stringify(multisigFactory));
  await multisigFactory.waitForDeployment();

  // await tenderly.verify({
  //   name: "MultiSigFactory",
  //   address: await multisigFactory.getAddress()
  // });

  writeFileSync(
    "../frontend/deployment.json",
    JSON.stringify({
      multiSigFactory: {
        address: await multisigFactory.getAddress(),
        network: await ethers.provider.getNetwork(),
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
