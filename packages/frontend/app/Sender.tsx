"use client";

import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useCallback } from "react";
import { parseEther } from "viem";
import { useAccount, useWalletClient } from "wagmi";
import { prepareSendTransaction, sendTransaction } from "wagmi/actions";

export default function Sender() {
  const { data } = useWalletClient();
  const prep = useCallback(async () => {
    try {
      console.log(await data?.getAddresses());
      const config = await prepareSendTransaction({
        to: "0x97f1E4DfFAD5D03f9673c2bf1442B7aCF6cDA9A1",
        value: BigInt("11"),
      });
      console.log(config);
      await sendTransaction(config);
    } catch (e) {
      console.error("CANT TX");
    }
  }, [data]);
  //   const { sendTransaction } = useSendTransaction(config);
  const { address, isConnected } = useAccount();

  return (
    <>
      <ConnectButton />
      {address} {isConnected ? "connected" : "not conntected"}
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => prep?.()}
      >
        SendTx
      </button>
    </>
  );
}
