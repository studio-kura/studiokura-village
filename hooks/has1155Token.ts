import { useContractRead } from 'wagmi'
import villageNftContract from '../utils/abis/villageNft.json'

export const useHas1155Token = (
  contract: string,
  owner: string | undefined,
  tokenId: string
) => {
  const { data: balanceOf, isError } = useContractRead({
    addressOrName: contract,
    contractInterface: villageNftContract,
    functionName: 'balanceOf',
    args: [owner, tokenId],
    watch: true
  })

  return {
    balanceOf,
    hasNft: balanceOf?.gt(0),
    isError
  }
}
