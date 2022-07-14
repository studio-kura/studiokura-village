import { getContractAddress } from '../utils/contractAddress'
import { useNetwork, useBalance, useAccount } from 'wagmi'

export const KuraBalance = () => {
  const { chain } = useNetwork()
  const { address, isConnected } = useAccount()
  const kuraErc20 = getContractAddress({
    name: 'kuraErc20',
    chainId: chain?.id
  })
  const { data, isError, isLoading } = useBalance({
    token: kuraErc20,
    addressOrName: address
  })

  if (!isConnected) return <></>
  if (isLoading) return <>Fetching balance…</>
  if (isError) return <>Error fetching balance</>
  return (
    <>
      Balance: {data?.formatted} {data?.symbol}
      <div>{}</div>
    </>
  )
}
