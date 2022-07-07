import type { NextPage } from 'next'
import Head from 'next/head'
import { Box, Container, Heading } from '@chakra-ui/react'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <Box>
      <Head>
        <title>Studio Kura Digital Art Village</title>
        <meta name="description" content="Studio Kura Digital Art Village" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container maxW='container.sm' mt="4em">
        <Heading as='h1' size='4xl'>
          Welcome to Studio Kura Digital Art Village!
        </Heading>
      </Container>
    </Box>
  )
}

export default Home
