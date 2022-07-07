import type { NextPage } from 'next'
import Head from 'next/head'
import { useAccount, useConnect, useEnsName } from 'wagmi'
import { InjectedConnector } from 'wagmi/connectors/injected'
import { Box, Container, Heading, Link, Button, Text } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'

const Home: NextPage = () => {
  const { address, isConnected } = useAccount()
  const { data: ensName } = useEnsName({ address })
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
          {isConnected ? (
            <Text>Connected to {ensName ?? address}</Text>
          ) : (
            <Button onClick={() => connect()}>Connect Wallet</Button>
          )}
        </Box>
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
