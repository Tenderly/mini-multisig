import { HardhatUserConfig, task, types } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import * as tenderly from "@tenderly/hardhat-tenderly";

tenderly.setup({ automaticVerifications: false });

const config: HardhatUserConfig = {
  solidity: "0.8.19",
  defaultNetwork: "tenderly",
  networks: {
    tenderly: {
      url: "RPC LINK",
      chainId: -1,
    },
  },
  tenderly: {
    username: "YOUR USERNAME OR ORG NAME",
    project: "YOUR PROJECT",
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

task("tenderly:fund", "Funds accounts")
  .addParam("amount", "Amount in ETH", "100")
  .addParam("addresses", "Addresses array (comma separated)", "", types.string)
  .setAction(async (args, hre) => {
    const { amount, addresses: addressesStr } = args;
    const addresses = addressesStr.split(",");
    const amtWei = hre.ethers.utils.hexValue(
      hre.ethers.utils.parseUnits(amount, "ether").toHexString(),
    );
    console.log(addresses, amtWei);
    await hre.ethers.provider.send("tenderly_setBalance", [addresses, amtWei]);
  });

export default config;
