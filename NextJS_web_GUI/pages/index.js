import Head from 'next/head';
import Script from 'next/script';
import {Accordion} from 'react-bootstrap';
import { useState, useEffect } from 'react';

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
        {/* <script src="/lib/brython-runner.bundle.js"></script> */}
      </Head>

      {/* <Script type="text/javascript" dangerouslySetInnerHTML={{__html: `
        window.brythonLoadedString = "";
        window.brythonReallyLoaded = function(){}
        window.brythonLoaded = function(ss) {
          console.log("s")
          window.brythonLoadedString = window.brythonLoadedString + ss
          if ((Array.from(new Set(window.brythonLoadedString)).join("")).length > 2) {
            window.brythonReallyLoaded()
          }
        }
        `}} strategy="beforeInteractive"/> */}
      {/* <Script src="/lib/brython.js" strategy="beforeInteractive" onReady={()=> {setBrLibsLoaded(old => [...old, ..."a"])}}/> */}
      {/* <Script src="/lib/brython_stdlib.js" strategy="beforeInteractive" onReady={()=> {setBrLibsLoaded(old => [...old, ..."b"])}}/> */}
      <Script src="https://cdn.jsdelivr.net/gh/MP3Martin/jsRUNpy.js@latest/jsRUNpy.min.js" strategy="afterInteractive" onLoad={()=> {setBrLibsLoaded(old => [...old, ..."c"])}}/>

      <main>
        <h1>
          Welcome
        </h1>

        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>Test 1</Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor sit amet...
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Test 2</Accordion.Header>
            <Accordion.Body>
              Duis aute irure dolor in reprehenderit in voluptate...
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>

      </main>
    </div>
  )
}