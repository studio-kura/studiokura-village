import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { chain, WagmiConfig, createClient, configureChains } from 'wagmi'
import { alchemyProvider } from 'wagmi/providers/alchemy'

const alchemyId = process.env.NEXT_PUBLIC_ALCHEMY_ID
const { provider, webSocketProvider } = configureChains(
  [chain.mainnet, chain.polygon],
  [alchemyProvider({ alchemyId })]
)
const client = createClient({
  autoConnect: true,
  provider,
  webSocketProvider
})

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <WagmiConfig client={client}>
      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
    </WagmiConfig>
  )
}

export default MyApp
