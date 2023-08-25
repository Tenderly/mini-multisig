import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import * as tenderly from "@tenderly/hardhat-tenderly";

tenderly.setup({ automaticVerifications: false });

const config: HardhatUserConfig = {
  solidity: "0.8.19",
  networks: {
    tenderly: {
      url: "https://rpc.vnet.tenderly.co/devnet/test-t/76c2fc28-2586-4e5a-a4a1-673f81f6e881",
    },
  },
  tenderly: {
    username: "nenad",
    project: "mini-safe",
  },
};

export default config;
