import { React, Component, useState, useEffect, useRef } from "react";
import highlight from 'custom-syntax-highlighter';

import Box from '@mui/material/Box';

// thanks to https://stackoverflow.com/q/52616567/10518428
function replaceTokens(text, tokens, expr) {
    var patterns = [],
        out;
    tokens.forEach(tuple => {
        var regex = new RegExp("(" + [tuple].join("[.,;:']?\\s*[.!?]?\\s*") + ")");
        var matches = text.match(regex);
        if (matches) {
            patterns.push(regex);
        }
    });
    var regex = combinePatterns.apply(this, patterns);
    out = text.replace(regex, expr);
    return out;
}

function combinePatterns() {
    return new RegExp('(' + [].slice.call(arguments).map(function (e) {
        var e = e.toString()
        return '(?:' + e.substring(1, e.length - 1) + ')'
    }).join('|') + ')', "gi")
}

const Output = (props) => {
    highlight({
        patterns: [
            // {
            //     name: 'oh1-test',
            //     match: [/(E)/]
            // }
        ],
        selector: ".f24sd4268fds246fs4d65",
        preProcess: string => {
            return props.value
        },
        postProcess: string => {
            //first line
            string = string.replace(/^.*/,function(m) {
                return "<span class='oh1-firstline'>" + m + "</span>"
            });
            //add working line breaks
            var string = string.replaceAll("\n", "<br>")
            return string
        }
    })

    return (
        <Box className={"f24sd4268fds246fs4d65"} component="div" sx={{ overflow: 'auto', whiteSpace: 'nowrap', bgcolor: '#101010', color: 'grey.300', border: '1px solid', borderColor: 'grey.800', borderRadius: 2, fontSize: '0.875rem', fontWeight: '700', padding: '0.4rem', display: 'block' }}>
            <></>
        </Box>
    );
};

export default Output;