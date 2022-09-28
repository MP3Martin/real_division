import Head from 'next/head';
import Script from 'next/script';
import { useState, useEffect } from 'react';
import {inDevEnvironment} from '../public/lib/DevEnv';

export default function Home() {

  const [brLibsLoaded, setBrLibsLoaded] = useState([]);
  useEffect(() => {
    if (brLibsLoaded.join("").length == 1) {
      // All Brython scripts have loaded
      setBrLibsLoaded([])
      void(0)
    }
  })

  return (
    <div>
      <Head>
        <title>NextJS app with react-bootstrap</title>
      </Head>

      {inDevEnvironment || <Script src="https://cdn.jsdelivr.net/gh/MP3Martin/jsRUNpy.js@1/jsRUNpy.min.js" strategy="afterInteractive" onLoad={()=> {setBrLibsLoaded(old => [...old, ..."c"])}}/>} {/* prod */}
      {inDevEnvironment && <Script src="/lib/jsRUNpy.js" strategy="afterInteractive" onLoad={()=> {setBrLibsLoaded(old => [...old, ..."c"])}}/>} {/* dev */}
      
      
    </div>
  )
}
