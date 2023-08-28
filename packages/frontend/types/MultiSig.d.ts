import { BigNumber } from "ethers"
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
    chainId: number,
    to: Address,
    value: bigint,
    name: string,
    from?: Address
}