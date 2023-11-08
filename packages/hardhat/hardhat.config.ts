import { HardhatUserConfig, task } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import * as tenderly from "@tenderly/hardhat-tenderly";

tenderly.setup({ automaticVerifications: false });

const config: HardhatUserConfig = {
  solidity: "0.8.19",
  defaultNetwork: "tenderly",
  networks: {
    tenderly: {
      url: "https://rpc.vnet.tenderly.co/devnet/mini-multisig-tests/a9412d56-7d8c-4839-ba3a-163e96c0fd69",
      chainId: 736031,
    },
  },
  tenderly: {
    username: "YOUR USERNAME (not email!)",
    project: "YOUR PROJECT SLUG",
  },
};

task("verifyExistingMS", "Verifies deployed MultiSigWallet instance")
  .addParam("address")
  .setAction(async (args, hre) => {
    await hre.run("compile");
    console.log("Verifying MS", args.address);
    await hre.tenderly.verify({
      name: "MultiSigWallet",
      address: args.address,
    });
  });

export default config;
