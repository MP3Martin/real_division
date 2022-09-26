import Head from 'next/head';
import '../styles/application.scss'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/css.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />

        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />

      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp