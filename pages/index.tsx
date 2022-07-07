import type { NextPage } from 'next'
import Head from 'next/head'
import { Box, Container, Heading, Link, Button } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'

const Home: NextPage = () => {
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
        <Link
          href="https://opensea.io/collection/studio-kura-digital-art-village"
          isExternal
        >
          <Button>
            See our NFTs on OpenSea <ExternalLinkIcon mx="2px" />
          </Button>
        </Link>
      </Container>
    </Box>
  )
}

export default Home
