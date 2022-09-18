import Head from 'next/head';
import Script from 'next/script';
import {Accordion} from 'react-bootstrap';

export default function Home() {

  return (
    <div>
      <Head>
        <title>NextJS app with react-bootstrap</title>
        {/* <script src="/lib/brython-runner.bundle.js"></script> */}
      </Head>

      <Script type="text/javascript" dangerouslySetInnerHTML={{__html: `
        window.brythonLoadedNumber = 0;
        window.brythonReallyLoaded = function(){}
        window.brythonLoaded = function() {
          window.brythonLoadedNumber =  window.brythonLoadedNumber + 1
          if (window.brythonLoadedNumber > 2) {
            window.brythonReallyLoaded()
          }
        }
        `}} strategy="beforeInteractive"/>
      <Script src="/lib/brython.js" strategy="beforeInteractive" onLoad={() => {window.brythonLoaded()}}/>
      <Script src="/lib/brython_stdlib.js" strategy="beforeInteractive" onLoad={() => {window.brythonLoaded()}}/>
      <Script src="/lib/run_python.js" strategy="beforeInteractive" onLoad={() => {window.brythonLoaded()}}/>
      <Script type="text/javascript" dangerouslySetInnerHTML={{__html: `
        window.brythonReallyLoaded = function() {
          void(0)
          brython({pythonpath: ["/lib/"], indexedDB: false});
        }
        `}} strategy="beforeInteractive"/>

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