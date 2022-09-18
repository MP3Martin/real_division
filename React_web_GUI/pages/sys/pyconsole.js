import Head from 'next/head';
import {useEffect} from 'react';

export default function Pyconsole() {

    useEffect(() => {
        document.body.onload = window.brython(1)
        document.body.id = "sandbox"
    }, []);

    return (
        <>
            <Head>
                <meta charset="iso-8859-1"></meta>
                <script src="/lib/brython.js"></script>
                <script src="/lib/brython_stdlib.js"></script>
                <style>
                    {`
                    html, body {
                        padding: 0px;
                        margin: 0px;
                    }
                    div,
                    textarea {
                        padding: 10px;
                    }
                    .codeArea {
                    padding: 0;
                    overflow: auto;
                    background-color: #000000;
                    color: #ffffff;
                    font-family: Consolas, Menlo, Monaco, 'Lucida Console', 'Liberation Mono', 
                        'DejaVu Sans Mono', 'Bitstream Vera Sans Mono', 
                        'Courier New', monospace, serif;
                    font-size: 14px;
                    }

                    `}
                </style>
            </Head>
            <div style={{"display": "none", "pointer-events": "none"}}>
                <textarea id="code" className="codeArea" rows="20" cols="80"></textarea>
                <script type="text/python3" src="/lib/console.py" id="__main__"></script>
                <script type="text/javascript" dangerouslySetInnerHTML={{__html: `

                    if ( window !== window.parent )
                    {
                        // The page is in an iframe
                    }
                    else
                    {
                        // The page is not in an iframe
                        document.location.replace("/")
                    }

                    let codeTextArea = document.getElementById("code");
                    new ResizeObserver(resizeTextArea).observe(codeTextArea);
                    function resizeTextArea () {  
                    if (parent.adjustIframe) {
                        parent.adjustIframe(codeTextArea.offsetWidth, codeTextArea.offsetHeight); 
                    } 
                    }
                    resizeTextArea();
                    `}}>
                </script>
            </div>
        </>
    )
}