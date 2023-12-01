import { updateFrontEndNetworkInfo, updateHardhatConfig } from "./utils";

const {
  TENDERLY_TESTNET_RPC,
  TENDERLY_TESTNET_CHAIN_ID,
  TENDERLY_PROJECT_SLUG,
} = process.env;

const [projectSlug, chainIdStr, testnetRpc] = process.argv.slice(2);

if (
  !(testnetRpc && projectSlug && chainIdStr) &&
  !(TENDERLY_PROJECT_SLUG && TENDERLY_TESTNET_RPC && TENDERLY_TESTNET_CHAIN_ID)
) {
  console.error(
    "Must specify TENDERLY_TESTNET_RPC, TENDERLY_TESTNET_CHAIN_ID and TENDERLY_PROJECT_SLUG",
  );
  process.exit(1);
}

const chainId = Number.parseInt(chainIdStr || TENDERLY_TESTNET_CHAIN_ID || "");

const testNetConfig = {
  rpc: testnetRpc || TENDERLY_TESTNET_RPC || "",
  chainId: chainId,
};
updateHardhatConfig(testNetConfig, projectSlug);

updateFrontEndNetworkInfo(
  testNetConfig,
  projectSlug || TENDERLY_PROJECT_SLUG || "",
);
