import {HardhatUserConfig, task} from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import * as tenderly from "@tenderly/hardhat-tenderly";

tenderly.setup({automaticVerifications: false});

const config: HardhatUserConfig = {
    solidity: "0.8.19",
    defaultNetwork: "tenderly",
    networks: {
        tenderly: {
            url: "https://rpc.vnet.tenderly.co/devnet/mini-safe/46524e3a-0054-4221-bdff-a520dd7725fa",
        },
    },
    tenderly: {
        username: "nenad",
        project: "mini-safe",
    },
};

task("verifyExistingMS", "Verifies deployed MultiSigWallet instance")
    .addParam("address")
    .setAction(async (args, hre) => {
        await hre.run("compile");
        console.log("Verifying MS", args.address)
        // TODO: something wrong with verification:(
        await hre.tenderly.verify({
            name: "MultiSigWallet",
            address: args.address
        })
    })
export default config;
