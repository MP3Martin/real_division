import Head from 'next/head';
import '../styles/application.scss'

function MyApp({ Component, pageProps }) {
  return (
    <>
      {/* <Head>
        <script src="//code.jquery.com/jquery-3.6.1.min.js"></script>
      </Head> */}
      <Component {...pageProps} />
    </>
  )
}

export default MyApp