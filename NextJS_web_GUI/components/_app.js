import { useState, useEffect } from "react";
import Head from "next/head";
import { setGlobalState, useGlobalState } from '../hooks/globalState';
import { useLocalStorage } from 'usehooks-ts'
// import CssBaseline from "@mui/material/CssBaseline";
import NavBar from "../components/NavBar";

import ParticleBackground from 'react-particle-backgrounds'

function MyAppTwo({ prp, prp2, setRootLoading }) {
  const [isLoading, setLoading] = useState(true);
  const [isMainVisible, setMainVisible] = useState("none");
  const [isLoadingWait, setLoadingWait] = useState(true);
  const [alternatingSnowflakeSpeed, setAlternatingSnowflakeSpeed] = useState(0);
  const [isNotDesktop] = useGlobalState("outputOptionsHaveAcordicon");
  const [enableSnowBG, setEnableSnowBG] = useLocalStorage("enableSnowBG", true)
  const [enableAnimations, setEnableAnimations] = useLocalStorage("enableAnimations", true)
  const [darkMode] = useGlobalState("darkMode");

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

  // useEffect(() => {
  //   setAlternatingSnowflakeSpeed(50.0)
  //   setTimeout(()=>{
  //     setAlternatingSnowflakeSpeed(0.0)

  //     const interval = setInterval(() => {
  //       setAlternatingSnowflakeSpeed(0.1)
  //       setTimeout(()=>{   
  //         setAlternatingSnowflakeSpeed(0.0)
  //       }, 50)
  //     }, 1000);

  //     return () => clearInterval(interval);
  //   }, 2000)
  // }, []);

  const bgSettings = {
    particle: {
      particleCount: isNotDesktop ? 80 : 150,
      color: "#e3d5d5",
      maxSize: 2
    },
    velocity: {
      directionAngle: 180,
      directionAngleVariance: 60,
      minSpeed: isNotDesktop ? 0.001 : 0.005,
      maxSpeed: isNotDesktop ? 0.03 : 0.039
    },
    opacity: {
      minOpacity: 0.01,
      maxOpacity: 0.3,
      opacityTransitionTime: 10000
    }
  }

  return (
    <>
      <div style={{ position: "fixed", height: "150vh", width: "100vw", zIndex: -1 }} className={"bgParticlesWrapper"}>
        {enableSnowBG &&
          <ParticleBackground settings={bgSettings} />
        }
      </div>

      <Head>
        <meta name="color-scheme" content="only dark" /> {/*😎*/}
        <script src={"/index.js"} />
      </Head>
      <>
        <style>{`
            body {
              overflow: revert !important;
            }
            /*:root { 
              transition: filter 0.5s ease-out;
            }*/
          `}</style>
        {
          darkMode ? <></> : <style id={"dsdhenfjsbkguzfgu"}>{`
            :not(.MuiDialog-paper *) {
              filter: invert(100%);
            }
             
            *:not(.f42d4f1d14f5d1d45 *) { 
              
            }
            
            img:not([src*=".svg"]), video {  
              filter: invert(100%);
            }
          `}</style>
        }
        {
          enableAnimations ? <></> : <style>{`
            * {
              transition: none !important;
            }
          `}</style>
        }
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
