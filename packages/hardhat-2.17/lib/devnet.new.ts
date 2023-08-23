import { execSync } from "child_process";
import { readFileSync, writeFileSync } from "fs";

const [tenderlyProject, devnetTemplate] = process.argv.slice(2);
if (!tenderlyProject && !devnetTemplate) {
  console.error("Must specify tenderly-project-slug and devnet-template-slug");
  process.exit(1);
}

execSync(
  `tenderly devnet spawn-rpc --project ${tenderlyProject} --template ${devnetTemplate} 2>.devnet`
);

const devnet = readFileSync(".devnet").toString().trim();
writeFileSync(
  "../frontend/tenderly.json",
  JSON.stringify({
    devnet: { rpc: devnet, chainId: 736031 },
    project: tenderlyProject,
  })
);

const hardhatConfig = readFileSync("hardhat.config.ts").toString();
const devnetized = hardhatConfig.replace(
  /^(\s+url:\s+)"(.*?)",/gm,
  `      url: "${devnet}",`
);
console.log("Updating hardhat.config.ts with the new devnet rpc", devnet);

writeFileSync("hardhat.config.ts", devnetized);
