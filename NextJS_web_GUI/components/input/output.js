import { React, Component, useState, useEffect, useRef } from "react";
import highlight from 'custom-syntax-highlighter';
import { setGlobalState, useGlobalState } from '../../hooks/globalState';
import AutoHeight from 'react-auto-height'

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

function substringFrequency(e, n, t) { let r, l = 0; for (let u = 0; u < e.length && (r = e.indexOf(n, u), -1 != r); u++)u = 1 == n.length || 1 == t ? r : r + 1, l++; return l }

//thanks to https://stackoverflow.com/a/7958627/10518428
var replaceNthMatch = function (r, e, t, n) { var o, a; if (e.constructor === RegExp) { if (-1 === r.search(e)) return r; if (0 !== (o = r.split(e))[1].search(e)) throw { name: "ArgumentError", message: "RegExp must have a capture group" } } else { if (e.constructor !== String) throw { name: "ArgumentError", message: "Must provide either a RegExp or String" }; o = r.split(e), a = []; for (var s = 0; s < o.length; s++)a.push(o[s]), s < o.length - 1 && a.push(e); o = a } var i = 2 * t - 1; return void 0 === o[i] ? r : ("function" == typeof n && (n = n(o[i])), o[i] = n, o.join("")) };

function combinePatterns() {
  return new RegExp('(' + [].slice.call(arguments).map(function (e) {
    var e = e.toString()
    return '(?:' + e.substring(1, e.length - 1) + ')'
  }).join('|') + ')', "gi")
}

const Output = (props) => {
  const outputRef = useRef(null)
  const [answer] = useGlobalState("answer")
  const [outputHeight] = useGlobalState("outputHeight")
  const [answerFirstTime] = useGlobalState("answerFirstTime")
  const [isCalculating] = useGlobalState("isCalculating")

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
      //alternating lines
      for (var i = 1; i < substringFrequency(string, "\n"); i++) {
        string = string.replace(new RegExp(`((?:^[^\n]*\n?){${i}})(.*)`, "m"), "$1<span class='oh1-alternating'>$2</span>")
      }

      //remainder
      string = string.replaceAll(/\((\d+)\)/g, "(<span class='oh1-remainder'>$1</span>)")

      //first nums
      string = replaceNthMatch(string, /(\d+)/, 1, function (val) { return `<span class='oh1-firstnums'>${val}</span>` });
      string = replaceNthMatch(string, /(\d+)/, 3, function (val) { return `<span class='oh1-firstnums'>${val}</span>` });
      string = replaceNthMatch(string, /(\d+)/, 5, function (val) { return `<span class='oh1-answer'>${val}</span>` });

      //first line
      string = string.replace(/^.*/, function (m) {
        return "<span class='oh1-firstline'>" + m + "</span>"
      });

      //add working line breaks
      string = string.replaceAll("\n", "<br>")

      //special chars
      for (var i of [":", "(", ")", "="]) {
        string = string.replaceAll(/([^>]+(?![^<]*\>))/g, (val) => { return val.replaceAll(i, "<span class='oh1-miscchar'>" + i + "</span>") })
      }

      // console.log(outputRef)
      return string
    },
  })

  return (
    <AutoHeight
      // // height={outputHeight}
      // // duration={200}
      // initial={0}
      style={{ transition: "height 0.4s cubic-bezier(.17,.84,.44,1) 0s" }}
    >
      <Box className={"f24sd4268fds246fs4d65"} ref={outputRef} component="div" sx={{ /*overflow: "auto"*//*(!isAnimating ? "auto" : "hidden !important"),*/ whiteSpace: 'nowrap', bgcolor: '#101010', color: 'grey.300', border: '1px solid', borderColor: 'grey.800', borderRadius: 2, fontSize: '0.875rem', fontWeight: '400', padding: '0.4rem', display: 'block', fontFamily: "'JetBrains Mono', monospace" }}>
        <></>
      </Box>
    </AutoHeight>
  );
};

export default Output;