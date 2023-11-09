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
  TENDERLY_DEVNET_CHAIN_ID,
} = process.env;

const [tenderlyProjectArg, devnetTemplateArg, chainIdStrArg] =
  process.argv.slice(2);

const tenderlyProject = tenderlyProjectArg || TENDERLY_PROJECT_SLUG || "";
const devnetTemplate = devnetTemplateArg || TENDERLY_DEVNET_TEMPLATE || "";
const chainIdStr = chainIdStrArg || TENDERLY_DEVNET_CHAIN_ID || "";

if (!tenderlyProject && !devnetTemplate && !chainIdStr) {
  console.error(
    "Must specify TENDERLY_PROJECT_SLUG TENDERLY_DEVNET_TEMPLATE TENDERLY_DEVNET_CHAIN_ID",
  );
  process.exit(1);
}

if (!!TENDERLY_PROJECT_SLUG && !TENDERLY_ACCESS_KEY && !TENDERLY_ACCOUNT_ID) {
  console.error(
    "Running on CI? Set authentication through environment variables TENDERLY_ACCESS_KEY and TENDERLY_ACCOUNT_ID",
  );
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

updateHardhatConfig(
  devnetConfig,
  tenderlyProject || TENDERLY_PROJECT_SLUG || "",
);
updateFrontEndNetworkInfo(devnetConfig, tenderlyProject);
