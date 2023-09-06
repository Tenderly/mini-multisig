"use client";

import {
  RainbowKitProvider,
  connectorsForWallets,
  darkTheme,
  getDefaultWallets,
} from "@rainbow-me/rainbowkit";
import {
  argentWallet,
  ledgerWallet,
  trustWallet,
} from "@rainbow-me/rainbowkit/wallets";
import * as React from "react";
import { Chain, WagmiConfig, configureChains, createConfig } from "wagmi";
import {
  arbitrum,
  goerli,
  mainnet,
  optimism,
  polygon,
  zora,
} from "wagmi/chains";
import { publicProvider } from "wagmi/providers/public";
import tenderlyConfig from "../tenderly.json";

const { chains, publicClient, webSocketPublicClient } = configureChains(
  [
    mainnet,
    polygon,
    optimism,
    arbitrum,
    zora,
    devnet(),
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

console.log("Connecting to ", tenderlyConfig.devnet.rpc);

function devnet() {
  const devnetChain: Chain = {
    id: tenderlyConfig.devnet.chainId,
    name: "Test Tenderly",
    network: "test tenderly",
    nativeCurrency: {
      decimals: 18,
      name: "Test Tenderly",
      symbol: "TTETH",
    },
    rpcUrls: {
      public: {
        http: [tenderlyConfig.devnet.rpc],
      },
      default: {
        http: [tenderlyConfig.devnet.rpc],
      },
    },
    blockExplorers: {
      default: { name: "SnowTrace", url: "https://snowtrace.io" },
      etherscan: { name: "SnowTrace", url: "https://snowtrace.io" },
    },
    testnet: true,
  };
  return devnetChain;
}
