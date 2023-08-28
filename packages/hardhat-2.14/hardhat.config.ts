import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import * as tenderly from "@tenderly/hardhat-tenderly";

tenderly.setup({ automaticVerifications: false });

const config: HardhatUserConfig = {
  solidity: "0.8.19",
  networks: {
    tenderly: {
      url: "https://rpc.vnet.tenderly.co/devnet/mini-safe/e70bbd17-d498-4eeb-ae7e-32a5941ea70b",
    },
  },
  tenderly: {
    username: "nenad",
    project: "mini-safe",
  },
};

export default config;
