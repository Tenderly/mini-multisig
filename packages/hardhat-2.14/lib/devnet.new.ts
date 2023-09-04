import {execSync} from "child_process";
import {readFileSync, writeFileSync} from "fs";

const [tenderlyProject, devnetTemplate, chainIdStr] = process.argv.slice(2);
if (!tenderlyProject && !devnetTemplate) {
    console.error("Must specify tenderly-project-slug and devnet-template-slug");
    process.exit(1);
}
const chainId = Number.parseInt((chainIdStr))
execSync(
    `tenderly devnet spawn-rpc --project ${tenderlyProject} --template ${devnetTemplate} 2>.devnet`
);

const devnet = readFileSync(".devnet").toString().trim();
writeFileSync(
    "../frontend/tenderly.json",
    JSON.stringify({
        devnet: {rpc: devnet, chainId},
        project: tenderlyProject,
    })
);

const hardhatConfig = readFileSync("hardhat.config.ts").toString();

const devnetized = hardhatConfig.replace(
    /^(\s+url:\s+)"(.*?)",?/gm,
    `      url: "${devnet}",`
).replace(
    /^(\s+chainId:\s+.\d+),?/gm,
    `      chainId: ${chainId},`
)

console.log("Updating hardhat.config.ts with the new devnet rpc", devnet);

writeFileSync("hardhat.config.ts", devnetized);
