import { ethers } from "ethers";

(async function () {
  const provider = new ethers.providers.JsonRpcProvider("Virtual TestNet RPC");
  const signer = provider.getSigner(); // the unlocked signer

  const tx = await signer.sendTransaction({
    to: "0x92d3267215Ec56542b985473E73C8417403B15ac",
    value: ethers.utils.parseUnits("0.001", "ether"),
  });
  console.log(tx);
})();
