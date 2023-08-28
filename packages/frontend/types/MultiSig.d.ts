import { Address, Transaction } from "viem"

type TMultiSig = {
    address: Address,
    owners: Address[]
    name: string,
    signaturesRequired: {type: 'BigNumber', hex: string}
}

type TData = `0x${string}`;

type TTransaction =  {
    data?: TData,
    to: Address,
    value: number,
    name: string,
    from?: Address
}