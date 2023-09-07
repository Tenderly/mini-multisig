import { HardhatUserConfig, task } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import * as tenderly from "@tenderly/hardhat-tenderly";

tenderly.setup({ automaticVerifications: false });

const config: HardhatUserConfig = {
  solidity: "0.8.19",
  defaultNetwork: "tenderly",
  networks: {
    tenderly: {
      url: "???",
      chainId: -1,
    },
  },
  tenderly: {
    username: "PASTE YOUR USERNAME",
    project: "mini-safe",
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
