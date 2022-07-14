import { chainId } from 'wagmi'

interface ContractAddress {
  [name: string]: {
    [chainId: number]: string
  }
}

interface getContractAddressArg {
  name: keyof ContractAddress
  chainId: number | undefined
}

const contractAddress: ContractAddress = {
  kuraErc20: {
    [chainId.polygon]: '0x6F4b6d0e53F8C859B82283DDb9e888d7FfccFa39'
  },
  villageNft: {
    [chainId.polygon]: '0x2953399124f0cbb46d2cbacd8a89cf0599974963'
  }
}

const defaultChainID = process.env.production
  ? chainId.polygon
  : chainId.polygon

const getContractAddress = ({ name, chainId }: getContractAddressArg) => {
  return contractAddress[name][chainId || defaultChainID]
}

export { contractAddress, defaultChainID, getContractAddress }
