import {HardhatUserConfig, task} from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import * as tenderly from "@tenderly/hardhat-tenderly";

tenderly.setup({automaticVerifications: false});

const config: HardhatUserConfig = {
    solidity: "0.8.19",
    networks: {
        tenderly: {
      url: "https://rpc.vnet.tenderly.co/devnet/mini-safe/f4e2d270-e9ad-4244-93a9-f88492762349",
        },
    },
    tenderly: {
        username: "nenad",
        project: "mini-safe",
    },
};

task("verifyExistingMS", "Verifies deployed MultiSigWallet instance")
    .addParam("address")
    .setAction(async (args) => {
        await hre.run("compile");
        await hre.tenderly.verify({
            name: "MultiSigWallet",
            address: args.address
        })

    })
export default config;
