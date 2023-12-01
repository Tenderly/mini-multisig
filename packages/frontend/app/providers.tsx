"use client";

import {
  connectorsForWallets,
  darkTheme,
  getDefaultWallets,
  RainbowKitProvider,
} from "@rainbow-me/rainbowkit";
import {
  argentWallet,
  ledgerWallet,
  trustWallet,
} from "@rainbow-me/rainbowkit/wallets";
import * as React from "react";
import { Chain, configureChains, createConfig, WagmiConfig } from "wagmi";
import { goerli } from "wagmi/chains";
import { publicProvider } from "wagmi/providers/public";
import tenderlyConfig from "../tenderly.json";
import { defineChain } from "viem";

function tenderlyNetwork(): Chain {
  return defineChain({
    id: tenderlyConfig.network.chainId,
    name: "Tenderly Test Network",
    network: "test tenderly",
    nativeCurrency: {
      decimals: 18,
      name: "Tenderly Ether",
      symbol: "TTETH",
    },
    rpcUrls: {
      public: {
        http: [tenderlyConfig.network.rpc],
      },
      default: {
        http: [tenderlyConfig.network.rpc],
      },
    },
    blockExplorers: {
      default: { name: "Tenderly", url: tenderlyConfig.network.rpc },
    },
    testnet: true,
  });
}

const { chains, publicClient, webSocketPublicClient } = configureChains(
  [
    tenderlyNetwork(),
    ...(process.env.NEXT_PUBLIC_ENABLE_TESTNETS === "true" ? [goerli] : []),
  ],
  [publicProvider()],
);

const projectId = "d11cc37b9a0e16486a895e7b30f68607";

const { wallets } = getDefaultWallets({
  appName: "minisafe",
  projectId,
  chains,
});

const demoAppInfo = {
  appName: "minisafe",
};

const connectors = connectorsForWallets([
  ...wallets,
  {
    groupName: "Other",
    wallets: [
      argentWallet({ projectId, chains }),
      trustWallet({ projectId, chains }),
      ledgerWallet({ projectId, chains }),
    ],
  },
]);

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
  webSocketPublicClient,
});

export function Providers({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => setMounted(true), []);
  return (
    <WagmiConfig config={wagmiConfig}>
      <RainbowKitProvider
        modalSize="wide"
        chains={chains}
        appInfo={demoAppInfo}
        theme={darkTheme()}
      >
        {mounted && children}
      </RainbowKitProvider>
    </WagmiConfig>
  );
}

console.log("Connecting to ", tenderlyConfig.network.rpc);
