import type { NextPage } from 'next'
import Head from 'next/head'
import { useAccount, useConnect, useNetwork } from 'wagmi'
import { InjectedConnector } from 'wagmi/connectors/injected'
import { Box, Container, Heading, Link, Button, Text } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { useMounted } from '../hooks/useMounted'
import { getContractAddress } from '../utils/contractAddress'
import { KuraBalance } from '../components/kuraBalance'

const Home: NextPage = () => {
  const mounted = useMounted()
  const { chain } = useNetwork()
  const { address, isConnected } = useAccount()
  const { connect } = useConnect({
    connector: new InjectedConnector()
  })

  return (
    <Box>
      <Head>
        <title>Studio Kura Digital Art Village</title>
        <meta name="description" content="Studio Kura Digital Art Village" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container maxW="container.sm">
        <Heading as="h1" size="4xl" mt="1em" mb="1em">
          Welcome to Studio Kura Digital Art Village!
        </Heading>
        <Box mb="1em">
          {mounted && isConnected ? (
            <Text>Connected to {address}</Text>
          ) : (
            <Button onClick={() => connect()}>Connect Wallet</Button>
          )}
        </Box>
        <Box mb="1em">{mounted && <KuraBalance></KuraBalance>}</Box>
        <Box>
          <Link
            href="https://opensea.io/collection/studio-kura-digital-art-village"
            isExternal
          >
            <Button colorScheme="teal">
              See our NFTs on OpenSea <ExternalLinkIcon mx="2px" />
            </Button>
          </Link>
        </Box>
      </Container>
    </Box>
  )
}

export default Home
