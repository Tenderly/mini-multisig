import {Address, Transaction} from "viem"

type TMultiSig = {
    address: Address,
    owners: Address[]
    name: string,
    signaturesRequired: Number
}

type TData = `0x${string}`;

type TTransaction = {
    data?: TData,
    to: Address,
    value: number,
    name: string,
    from?: Address,
    hash: string
}

type TMultiSigTransaction = TTransaction & { txIndex: numbers, approvedBy: Address[] }