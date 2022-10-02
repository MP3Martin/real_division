import { React, Component, useState, useEffect } from "react";
import Head from "next/head";
import "../styles/css.scss";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import NavBar from "../components/NavBar";
import LoadingOverlay from "react-loading-overlay";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

function MyApp({ Component, pageProps }) {
  const [isLoading, setLoading] = useState(true);
  const [isMainVisible, setMainVisible] = useState("none");

  useEffect(() => {
    // setTimeout(() => {
    setLoading(false);
    // }, 10);
    setMainVisible("revert");
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <LoadingOverlay
        active={isLoading}
        spinner
        text="Loading the page..."
        fadeSpeed={400}
      >
        <div style={{ height: "100vh" }}>
          <main style={{ display: isMainVisible, height: "100%" }}>
            {/* {isMainVisible && ( */}
            <>
              <NavBar />
              <Component {...pageProps} />
            </>
            {/* )} */}
          </main>
        </div>
      </LoadingOverlay>
      <Head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />

        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Audiowide&display=swap"
          rel="stylesheet"
        />
      </Head>
    </ThemeProvider>
  );
}

export default MyApp;
