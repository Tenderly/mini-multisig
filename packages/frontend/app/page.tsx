import "@rainbow-me/rainbowkit/styles.css";
import Sender from "./Sender";
import MultiSigs from "@/app/MultiSigs";



export default function Home() {
  return (
    <main className="">
      <Sender />
      <MultiSigs />
    </main>
  );
}
