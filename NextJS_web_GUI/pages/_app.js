import { React, useState, useEffect, Suspense } from "react";
import dynamic from "next/dynamic";
import "../styles/css.scss";
import LoadingOverlay from "react-loading-overlay";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { WhisperSpinner } from "react-spinners-kit";
import Head from "next/head";
import { setGlobalState, useGlobalState } from '../hooks/globalState';

const MyAppTwo = dynamic(() => import("../components/_app"), {
  suspense: true,
});

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

function MyApp({ Component, pageProps }) {
  const [isLoading, setLoading] = useState(true);
  const [isRootLoading, setRootLoading] = useState(true);
  const [isMainVisible, setMainVisible] = useState("none");
  const [isLoadingWait, setLoadingWait] = useState(true);

  useEffect(() => {
    // setTimeout(() => {
    setLoading(false);
    // }, 10);
    setMainVisible("revert");
    // setTimeout(() => {
    setLoadingWait(false);
    // }, 0);
  });

  useEffect(()=>{
    fetch("https://mp3martin.github.io/real-division-assets/__init__.py")
      .then((response) => response.text())
      .then((textContent) => {
        setGlobalState("rdc", textContent);
      });
  }, [])

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

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Audiowide&display=swap"
          rel="stylesheet"
        />
        <link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:ital,wght@0,400;0,500;0,600;1,400;1,500&display=swap" rel="stylesheet" />
      </Head>
      {isLoadingWait ? (
        <>
          <style>{`
        ._loading_overlay_content {
          opacity: 0;
        }
      `}</style>
        </>
      ) : (
        <>
          <style>{`
            ._loading_overlay_content {
              opacity: 1 !important;
            }
          `}</style>
        </>
      )}

      <>
        <style>{`
            body {
              overflow: hidden;
            }
          `}</style>
      </>

      <ThemeProvider theme={darkTheme}>
      <CssBaseline />
        <LoadingOverlay
          active={isRootLoading}
          spinner={<WhisperSpinner size={70} color="#686769" loading={true} />}
          text="Loading the page..."
          fadeSpeed={500}
          styles={{
            overlay: (base) => ({
              ...base,
              background: "rgba(0, 0, 0, 0.2)",
              height: "100vh",
              "& > *": {
                opacity: "1",
              },
              "& > :first-child > *": {
                margin: "auto",
                "margin-bottom": "1rem",
              },
            }),
          }}
        >
          {/* <Component {...pageProps} /> */}
          {isLoading ? (
            <></>
          ) : (
            <Suspense>
              <MyAppTwo
                prp={<Component {...pageProps} />}
                prp2={pageProps}
                setRootLoading={setRootLoading}
              />
            </Suspense>
          )}
        </LoadingOverlay>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
