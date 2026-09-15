import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Nathan Bommezijn</title>
        <meta
          key='description'
          name='description'
          content='Portfolio of Nathan Bommezijn, T-shaped front-end developer based in Amsterdam.'
        />
      </Head>
      <NavBar />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}

export default MyApp
