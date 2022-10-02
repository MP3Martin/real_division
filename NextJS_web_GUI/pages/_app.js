import { React, Component, useState, useEffect } from "react";
import Head from "next/head";
import "../styles/css.scss";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import NavBar from "../components/NavBar";
import LoadingOverlay from "react-loading-overlay";
import { WhisperSpinner } from "react-spinners-kit";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

function MyApp({ Component, pageProps }) {
  const [isLoading, setLoading] = useState(true);
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

  return (
    <>
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

      {isLoading ? (
        <>
          <style>{`
            body {
              overflow: hidden;
            }
          `}</style>
        </>
      ) : (
        <>
          <style>{`
            body {
              overflow: revert !important;
            }
          `}</style>
        </>
      )}
      <ThemeProvider theme={darkTheme}>
        <LoadingOverlay
          active={isLoading}
          spinner={<WhisperSpinner size={70} color="#686769" loading={true} />}
          text="Loading the page..."
          fadeSpeed={400}
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
          <CssBaseline />
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
            <link
              rel="preconnect"
              href="https://fonts.gstatic.com"
              crossorigin
            />
            <link
              href="https://fonts.googleapis.com/css2?family=Audiowide&display=swap"
              rel="stylesheet"
            />
          </Head>
        </LoadingOverlay>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
