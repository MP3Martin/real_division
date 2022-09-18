import Head from 'next/head';
import {Accordion} from 'react-bootstrap';

export default function Home() {

  return (
    <div>
      <Head>
        <title>NextJS app with react-bootstrap</title>
        {/* <script src="/lib/brython-runner.bundle.js"></script> */}
        <script src="/lib/brython.js"></script>
        <script src="/lib/brython_stdlib.js"></script>
        <script src="/lib/run_python.js"></script>
        <script type="text/javascript" dangerouslySetInnerHTML={{__html: `
          void(0)
          brython({pythonpath: ["/lib/"], indexedDB: false});
          `}}>
        </script>
      </Head>

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