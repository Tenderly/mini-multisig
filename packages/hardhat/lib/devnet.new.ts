import { execSync } from "child_process";
import { readFileSync } from "fs";
import {
  updateFrontEndNetworkInfo,
  updateHardhatConfig,
  VNetConfig,
} from "./utils";

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
  // used by CI
  execSync(
    `tenderly devnet spawn-rpc --project ${TENDERLY_PROJECT_SLUG} --template ${TENDERLY_DEVNET_TEMPLATE} --account ${TENDERLY_ACCOUNT_ID}  --access_key ${TENDERLY_ACCESS_KEY} 2>.devnet`,
  );
} else {
  execSync(
    `tenderly devnet spawn-rpc --project ${tenderlyProject} --template ${devnetTemplate} 2>.devnet`,
  );
}

const chainId = Number.parseInt(chainIdStr);
const devnet = readFileSync(".devnet").toString().trim();

const devnetConfig: VNetConfig = { rpc: devnet, chainId };

updateHardhatConfig(devnetConfig);
updateFrontEndNetworkInfo(devnetConfig, tenderlyProject);
