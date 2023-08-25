"use client";
import { useEffect, useState } from "react";
import { ethers } from "ethers";

export type TMultiSig = {
  address: string;
  owners: string[];
  signaturesRequired: number;
};

type Address = string;

function MultiSigListItem(
  multiSig: TMultiSig,
  select: () => void,
  selected: boolean,
) {
  return (
    <a
      href="#"
      onClick={select}
      className={`hover:bg-blue-50 ${selected ? "bg-blue-50" : ""}`}
    >
      {multiSig.address}
    </a>
  );
}

async function loadMultiSigs() {
  return [
    { address: "0xababab1", signaturesRequired: 3, owners: ["0xcdcd, 0xadad"] },
    {
      address: "0xababab2",
      signaturesRequired: 1,
      owners: ["0xadad", "0xbdbd"],
    },
    {
      address: "0xababab3",
      signaturesRequired: 2,
      owners: ["0xbebebe", "0xbcbcbc", "0xcecece"],
    },
  ] as TMultiSig[];
}

function MultiSig({ multiSig }: { multiSig: TMultiSig }) {
  return (
    <>
      <h2>@{multiSig.address}</h2>
      Owners: {multiSig.owners.join(", ")}
      <br />
      Number of signers: {multiSig.signaturesRequired}
      <br />
      Pending TX Executed TX Approve TX
    </>
  );
}

export default function MultiSigs() {
  const [selected, setSelected] = useState<null | TMultiSig>(null);
  const [multiSigs, setMultiSigs] = useState([] as TMultiSig[]);
  useEffect(() => {
    loadMultiSigs().then((ms) => setMultiSigs(ms));
  }, []);

  return (
    <div className="flex min-h-screen flex-col items-center justify-normal p-24">
      <div className="grid lg:max-w-5xl lg:w-full lg:grid-cols-3 lg:text-left">
        <div className="">
          <h2 className="">MultiSigs</h2>
          <div className="flex flex-col items-left">
            {multiSigs.map((it) =>
              MultiSigListItem(it, () => setSelected(it), it == selected),
            )}
          </div>
        </div>
        <div>{!!selected && <MultiSig multiSig={selected} />}</div>
      </div>
      <div>3</div>
    </div>
  );
}

function createTransaction() {
  // new ethers.Contract(Contracts.MultiSig)
  // const newHash = await readContracts[contractName].getTransactionHash(
  //     nonce.toNumber(),
  //     executeToAddress,
  //     parseEther("" + parseFloat(amount).toFixed(12)),
  //     callData,
  // );
}
