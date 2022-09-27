import Head from 'next/head';
import '../styles/application.scss'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/css.css'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';


const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={darkTheme}>
    <>
      <CssBaseline />
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
    </ThemeProvider>
  );
}

export default MyApp