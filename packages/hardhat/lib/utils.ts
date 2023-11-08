import { readFileSync, writeFileSync } from "fs";

export type VNetConfig = {
  rpc: string;
  chainId: number;
};

export function updateFrontEndNetworkInfo(
  devnetConfig: VNetConfig,
  tenderlyProject: string,
) {
  writeFileSync(
    "../frontend/tenderly.json",
    JSON.stringify({
      network: devnetConfig,
      project: tenderlyProject,
    }),
  );
}

export function updateHardhatConfig({ rpc, chainId }: VNetConfig) {
  const hardhatConfig = readFileSync("hardhat.config.ts").toString();

  const devnetized = hardhatConfig
    .replace(/^(\s+url:\s+)"(.*?)",?/gm, `      url: "${rpc}",`)
    .replace(/^(\s+chainId:\s+.\d+),?/gm, `      chainId: ${chainId},`);

  console.log("Updating hardhat.config.ts with the new devnet rpc", {
    rpc,
    chainId,
  });

  writeFileSync("hardhat.config.ts", devnetized);
}
