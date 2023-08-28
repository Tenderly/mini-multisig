import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import * as tenderly from "@tenderly/hardhat-tenderly";

tenderly.setup({ automaticVerifications: false });

const config: HardhatUserConfig = {
  solidity: "0.8.19",
  networks: {
    tenderly: {
      url: "https://rpc.vnet.tenderly.co/devnet/mini-safe/4d47d553-7d93-4e3d-ab05-e956d3bdfae9",
    },
  },
  tenderly: {
    username: "nenad",
    project: "mini-safe",
  },
};

export default config;
