import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { chain, WagmiConfig, createClient, configureChains } from 'wagmi'
import { publicProvider } from 'wagmi/providers/public'

const { provider, webSocketProvider } = configureChains(
  [chain.mainnet, chain.polygon],
  [publicProvider()]
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
