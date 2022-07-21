import { getContractAddress } from '../utils/contractAddress'
import { useNetwork, useAccount } from 'wagmi'
import { useHas1155Token } from '../hooks/has1155Token'
import { Badge } from '@chakra-ui/react'
import { CheckIcon, NotAllowedIcon } from '@chakra-ui/icons'

export const VillageNftBalance = () => {
  const { chain } = useNetwork()
  const { address, isConnected } = useAccount()
  const villageNft = getContractAddress({
    name: 'villageNft',
    chainId: chain?.id
  })
  const tokenId =
    '66944570731711987735845020825364593806926065595037873500763412721553566072833'
  const { hasNft, isError } = useHas1155Token(villageNft, address, tokenId)

  if (!isConnected) return <></>
  if (isError)
    return (
      <>
        <div>Error fetching Village NFT</div>
      </>
    )
  return (
    <>
      {hasNft ? (
        <>
          <Badge colorScheme="green">
            <CheckIcon></CheckIcon>
          </Badge>
          You are a Village NFT holder
        </>
      ) : (
        <>
          <Badge colorScheme="red">
            <NotAllowedIcon></NotAllowedIcon>
          </Badge>
          You do not own the Village NFT
        </>
      )}
    </>
  )
}
