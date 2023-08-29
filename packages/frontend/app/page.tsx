import "@rainbow-me/rainbowkit/styles.css";
import Sender from "./Sender";
import MultiSigs from "@/app/MultiSigs";
import deployments from "./deployment.json"
import { Abi, Address } from "viem";

export default function Home() {
  return (
    <main className="">
      <Sender />
      <MultiSigs
       multiSigFactoryAddress={deployments.multiSigFactory.address as Address} 
        abi={deployments.multiSigFactory.abi as Abi}
       multiSigAbi={deployments.multiSig.abi as Abi}
      />
    </main>
  );
}
