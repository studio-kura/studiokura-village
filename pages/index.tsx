import type { NextPage } from 'next'
import Head from 'next/head'
import { useAccount, useConnect, useEnsName } from 'wagmi'
import { InjectedConnector } from 'wagmi/connectors/injected'
import { Box, Container, Heading, Link, Button, Text } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'

const Home: NextPage = () => {
  const { address, isConnected } = useAccount()
  const { connect } = useConnect({
    connector: new InjectedConnector()
  })
  const osApiAssetsEndpoint = 'https://api.opensea.io/api/v1/assets'
  const osRequsestSettings = {
    headers: {
      'Content-Type': 'application/json'
    }
  }
  interface OsQueryParams {
    [key: string]: any
  }
  const fetchOpenseaNfts = async () => {
    const queryAddress: string = address ? address : ''
    const queryParams: OsQueryParams = {
      owner: queryAddress,
      collection: 'studio-kura-digital-art-village',
      order_direction: 'desc',
      limit: 20,
      include_orders: false
    }
    let url = new URL(osApiAssetsEndpoint)
    for (let qp in queryParams) {
      url.searchParams.append(qp, queryParams[qp])
    }
    const osRequest = await fetch(url, osRequsestSettings)
    console.log(await osRequest.json())
  }

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
            <Text>Connected to {address}</Text>
          ) : (
            <Button onClick={() => connect()}>Connect Wallet</Button>
          )}
        </Box>
        <Box mb="1em">
          <Button colorScheme="blue" onClick={fetchOpenseaNfts}>
            Load your NFTs
          </Button>
        </Box>
        <Box mb="1em">
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
