import { React, Component, useState, useEffect, useRef } from "react";
import highlight from 'custom-syntax-highlighter';

import Box from '@mui/material/Box';


const Output = (props) => { 
    useEffect(()=>{
        highlight({
            patterns: [
                {
                    name: 'string',
                    match: /^(\'[^\'\n]*\')/
                },
                {
                    name: 'fn-call',
                    match: [/^([A-z_]+)\(/, '', '(']
                }
            ],
            selector: ".f24sd4268fds246fs4d65",
            preProcess: string => {
                return props.value
            },
            postProcess: string => {
                return string.replaceAll("\n", "<br>")
            }
        })
    })
    
    return (
        <Box className={"f24sd4268fds246fs4d65"} component="div" sx={{ overflow: 'auto', whiteSpace: 'nowrap', bgcolor: '#101010', color: 'grey.300', border: '1px solid', borderColor: 'grey.800', borderRadius: 2, fontSize: '0.875rem', fontWeight: '700', padding: '0.4rem', display: 'block' }}>
            <></>
        </Box>
    );
};

export default Output;