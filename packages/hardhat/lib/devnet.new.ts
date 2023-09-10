import { execSync } from "child_process";
import { readFileSync, writeFileSync } from "fs";

const {
  TENDERLY_PROJECT_SLUG,
  TENDERLY_DEVNET_TEMPLATE,
  TENDERLY_ACCOUNT_ID,
  TENDERLY_ACCESS_KEY,
} = process.env;

const [tenderlyProject, devnetTemplate, chainIdStr] = process.argv.slice(2);

if (
  !tenderlyProject &&
  !devnetTemplate &&
  !TENDERLY_PROJECT_SLUG &&
  !TENDERLY_DEVNET_TEMPLATE
) {
  console.error("Must specify tenderly-project-slug and devnet-template-slug");
  process.exit(1);
}

if (!!TENDERLY_ACCESS_KEY) {
  execSync(
    `tenderly devnet spawn-rpc --project ${TENDERLY_PROJECT_SLUG} --template ${TENDERLY_DEVNET_TEMPLATE} --account ${TENDERLY_ACCOUNT_ID}  --access_key ${TENDERLY_ACCESS_KEY} 2>.devnet`
  );
} else {
  execSync(
    `tenderly devnet spawn-rpc --project ${tenderlyProject} --template ${devnetTemplate} 2>.devnet`
  );
}

const chainId = Number.parseInt(chainIdStr);
const devnet = readFileSync(".devnet").toString().trim();
writeFileSync(
  "../frontend/tenderly.json",
  JSON.stringify({
    devnet: { rpc: devnet, chainId },
    project: tenderlyProject,
  })
);

const hardhatConfig = readFileSync("hardhat.config.ts").toString();

const devnetized = hardhatConfig
  .replace(/^(\s+url:\s+)"(.*?)",?/gm, `      url: "${devnet}",`)
  .replace(/^(\s+chainId:\s+.\d+),?/gm, `      chainId: ${chainId},`);

console.log("Updating hardhat.config.ts with the new devnet rpc", devnet);

writeFileSync("hardhat.config.ts", devnetized);
