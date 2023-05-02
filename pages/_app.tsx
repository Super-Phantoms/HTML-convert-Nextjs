import '../styles/globals.css'
import Layout from '../components/layouts/Layout'
import Head from 'next/head'


const MyApp = ({ Component, pageProps }:any) => {
  return (
    <>
    <Head>
     <title>Phoenix Online Insurance </title>
     <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </>
  )  
}
export default MyApp

