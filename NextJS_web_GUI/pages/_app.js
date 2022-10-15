import { React, useState, useEffect, Suspense } from "react";
import dynamic from "next/dynamic";
import "../styles/css.scss";
import LoadingOverlay from "react-loading-overlay";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { JellyfishSpinner } from "react-spinners-kit";
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
  const [dotsLoading] = useGlobalState("dotsLoading");

  useEffect(() => {
    // setTimeout(() => {
    setLoading(false);
    // }, 10);
    setMainVisible("revert");
    // setTimeout(() => {
    setLoadingWait(false);
    // }, 0);
  });

  // useEffect(()=>{
  //   var empty = " "
  //   setTimeout(()=>{
  //     if (dotsLoading == empty + empty + empty || dotsLoading == "") {
  //       setGlobalState("dotsLoading", "." + empty + empty)
  //     } else if (dotsLoading == "." + empty + empty) {
  //       setGlobalState("dotsLoading", ".." + empty)
  //     } else if (dotsLoading == ".." + empty) {
  //       setGlobalState("dotsLoading", "...")
  //     } else if (dotsLoading == "...") {
  //       setGlobalState("dotsLoading", "" + empty + empty + empty)
  //     } else {
  //       setGlobalState("dotsLoading", empty + empty + empty)
  //     }
  //   }, 100)
  // }, [dotsLoading])

  useEffect(() => {
    fetch("https://mp3martin.github.io/real-division-assets/__init__.py")
      .then((response) => response.text())
      .then((textContent) => {
        setGlobalState("rdc", textContent);
      });
  }, [])

  return (
    <>
      <Head>
        {/* START OF tab setup */}
          <title>Real Division</title>
          <link rel="apple-touch-icon" sizes="180x180" href="/favicons/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicons/favicon-16x16.png" />
          <link rel="manifest" href="/favicons/site.webmanifest" />
          <link rel="icon" type="image/png" sizes="192x192" href="/favicons/android-chrome-192x192.png" />
          <link rel="icon" type="image/png" sizes="512x512" href="/favicons/android-chrome-512x512.png" />
          <link rel="shortcut icon" href="/favicons/favicon.ico" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta name="mobile-web-app-capable" content="yes" />
        {/* END OF tab setup */}


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
          spinner={<JellyfishSpinner size={70} color="#06E27E" loading={true} />}
          text="Loading the page..."
          fadeSpeed={500}
          styles={{
            overlay: (base) => ({
              ...base,
              background: "rgba(0, 0, 0, 0.8)",
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
