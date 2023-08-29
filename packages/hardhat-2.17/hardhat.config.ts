import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import * as tenderly from "@tenderly/hardhat-tenderly";

tenderly.setup({ automaticVerifications: false });

const config: HardhatUserConfig = {
  solidity: "0.8.19",
  networks: {
    tenderly: {
      url: "https://rpc.vnet.tenderly.co/devnet/mini-safe/43515e87-b996-4c56-8069-b63b520a8922"
    },
  },
  tenderly: {
    username: "nenad",
    project: "mini-safe",
  },
};

export default config;
