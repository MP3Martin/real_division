import { React, Component, useState, useEffect } from "react";
import Head from "next/head";
import { ThemeProvider, createTheme } from "@mui/material/styles";
// import CssBaseline from "@mui/material/CssBaseline";
import NavBar from "../components/NavBar";
import LoadingOverlay from "react-loading-overlay";
import { WhisperSpinner } from "react-spinners-kit";

function MyAppTwo({ prp, prp2, setRootLoading }) {
  const [isLoading, setLoading] = useState(true);
  const [isMainVisible, setMainVisible] = useState("none");
  const [isLoadingWait, setLoadingWait] = useState(true);

  useEffect(() => {
    // setTimeout(() => {
    setLoading(false);
    setRootLoading(false);
    // }, 10);
    setMainVisible("revert");
    // setTimeout(() => {
    setLoadingWait(false);
    // }, 0);
  });

  return (
    <>
      <Head>
        <meta name="color-scheme" content="only dark" /> {/*😎*/}
      </Head>
      <>
        <style>{`
            body {
              overflow: revert !important;
            }
          `}</style>
      </>

      {/* <CssBaseline /> */}
      <div style={{ height: "100vh" }}>
        <main style={{ display: isMainVisible, height: "100%" }}>
          {/* {isMainVisible && ( */}
          <>
            <NavBar />
            {prp}
          </>
          {/* )} */}
        </main>
      </div>
    </>
  );
}

export default MyAppTwo;
