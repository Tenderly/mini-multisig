import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import * as tenderly from "@tenderly/hardhat-tenderly";

tenderly.setup({ automaticVerifications: false });

const config: HardhatUserConfig = {
  solidity: "0.8.19",
  networks: {
    tenderly: {
      url: "https://rpc.vnet.tenderly.co/devnet/test-t/7e4cd76d-1714-4805-822a-504acdabea27",
    },
  },
  tenderly: {
    username: "nenad",
    project: "mini-safe",
  },
};

export default config;
