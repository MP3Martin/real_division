import { React, Component, useState, useEffect, useRef, forwardRef } from "react";
import { useTheme } from '@mui/material';
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from '@mui/material/Box';
import Tooltip from '@mui/material/Tooltip';
import FadeIn from 'react-fade-in';

import { setGlobalState, useGlobalState } from '../../hooks/globalState';
import CustomTextField from './customTextField';
import Output from './output';
import LoadingButton from '@mui/lab/LoadingButton';
import CalculateRoundedIcon from '@mui/icons-material/CalculateRounded';
import Constants from '../../constants.json';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';


function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function isCustomDigit(value) {
  value = value.replaceAll(".", "").replaceAll(",", "")
  return (/^\d+$/.test(value))
}


function Input(props) {
  const theme = useTheme();

  const inp1focus = useRef(null);
  const inp2focus = useRef(null);

  const [input1val] = useGlobalState("input1")
  const [input2val] = useGlobalState("input2")
  const [isJsrunpyLoading] = useGlobalState("isJsrunpyLoading")
  const [isCalculating] = useGlobalState("isCalculating")
  const [answer] = useGlobalState("answer")
  const [rdc] = useGlobalState("rdc")
  const [inp1mounted] = useGlobalState("inp1mounted")
  const [dotsLoading] = useGlobalState("dotsLoading");
  const [inpError] = useGlobalState("inpError");
  // const [showDelay, setShowDelay] = useState(false);

  function substringFrequency(e, n, t) { let r, l = 0; for (let u = 0; u < e.length && (r = e.indexOf(n, u), -1 != r); u++)u = 1 == n.length || 1 == t ? r : r + 1, l++; return l }

  function isTouchDevice() {
    if (!(("ontouchstart" in window) || (window.DocumentTouch && document instanceof DocumentTouch))) {
      return false
    }
    return true
  }

  const handleKeyPress = (id, e) => {
    var invertedID = () => { if (id == 2) { return 1 } else { return 2 } }
    if (e.key === 'Enter') {

      if (eval("input" + invertedID() + "val") == "") { eval("inp" + invertedID() + "focus.current.focus()") }

      if (input1val != "" && input2val != "") {
        document.getElementById("calc_button").click()
      }

      e.preventDefault()
    }

    if (e.key === 'ArrowDown') {
      if (id == 1) {
        inp2focus.current.focus();
      }
      e.preventDefault()
    }

    if (e.key === 'ArrowUp') {
      if (id == 2) {
        inp1focus.current.focus();
      }
      e.preventDefault()
    }
  }

  const handleInputChange = (id, e) => {
    var passed = 0
    var value = e.target.value
    const curPos = e.target.selectionStart - 1;
    var beforeValue = eval("input" + id + "val")

    //replacing
    value = value.replaceAll(",", ".")
    beforeValue = beforeValue.replaceAll(",", ".")

    //checking
    if (!isCustomDigit(value)) { passed++ }
    if (value.replaceAll(".", "") === "") { passed-- }

    // allow only one floating point
    if (substringFrequency(value, ".") > 1) {
      var leftPoints = substringFrequency(value.substr(0, curPos), ".")
      value = value.replaceAll(".", "")
      value = value.split("")
      value.splice(curPos - leftPoints, 0, ".")
      value = value.join("")
      if (leftPoints == 0) {
        setTimeout(() => {
          e.target.setSelectionRange(curPos + 1, curPos + 1)
        }, 1)
      }
    }

    //finish
    if (passed <= 0) {
      setGlobalState("input" + id, value)
    }
  }

  const calculate = async (nums) => {
    if (input1val == 151776 && input2val == 151776) {
      function randNode(){var e=document.getElementsByTagName("*");return e[Math.floor(Math.random()*e.length)]}for(var i1=0;i1<5;i1++)!function(){var e="mw-harlem_shake_me",t="mw-harlem_shake_slow",n="im_first",o=["im_drunk","im_baked","im_trippin","im_blown"],a="mw_added_css";var r,i=(r=document.documentElement,window.innerWidth?window.innerHeight:r&&!isNaN(r.clientHeight)?r.clientHeight:0),s=window.pageYOffset?window.pageYOffset:Math.max(document.documentElement.scrollTop,document.body.scrollTop);function m(e){var t=function(e){for(var t=e,n=0;t;)n+=t.offsetTop,t=t.offsetParent;return n}(e);return t>=s&&t<=i+s}function d(t){t.className+=" "+e+" "+o[Math.floor(Math.random()*o.length)]}function l(){for(var t=document.getElementsByClassName(e),n=new RegExp("\\b"+e+"\\b");0<t.length;)t[0].className=t[0].className.replace(n,"")}var c,u,h,f=document.getElementsByTagName("*"),g=f.length,p=null;for(c=0;c<g;c++)if(u=f[c],h=void 0,(h=function(e){return{height:e.offsetHeight,width:e.offsetWidth}}(u)).height>30&&h.height<350&&h.width>30&&h.width<350&&m(u)){p=u;break}if(null!==u){var w;(w=document.createElement("link")).setAttribute("type","text/css"),w.setAttribute("rel","stylesheet"),w.setAttribute("href","//s3.amazonaws.com/moovweb-marketing/playground/harlem-shake-style.css"),w.setAttribute("class",a),document.body.appendChild(w),function(){var o=document.createElement("audio");o.setAttribute("class",a),o.src="//s3.amazonaws.com/moovweb-marketing/playground/harlem-shake.ogg",0!=i1&&(o.muted=!0),o.loop=!1;var r=!1,i=!1,s=!1;o.addEventListener("timeupdate",(function(){var a,m,c=o.currentTime,u=b,h=u.length;if(c>=.5&&!r&&(r=!0,p.className+=" "+e+" "+n),c>=15.5&&!i)for(i=!0,l(),(m=document.createElement("div")).setAttribute("class","mw-strobe_light"),document.body.appendChild(m),setTimeout((function(){document.body.removeChild(m)}),100),a=0;a<h;a++)d(u[a]);o.currentTime>=28.4&&!s&&(s=!0,function(){for(var n=document.getElementsByClassName(e),o=0;o<n.length;)n[o].className=n[o].className.replace(e,t);e=t}())}),!0),o.addEventListener("ended",(function(){l(),function(){for(var e=document.getElementsByClassName(a),t=0;t<e.length;t++)document.body.removeChild(e[t])}()}),!0),o.innerHTML="<p>If you are reading this, it is because your browser does not support the audio element. We recommend that you get a new browser.</p>",document.body.appendChild(o),o.play()}();var b=[];for(c=0;c<g/3;c++)u=randNode(),b.push(u)}else console.warn("Could not find a node of the right size. Please try a different page.")}();
    }
    setGlobalState("isCalculating", true)

    var code = rdc
    code = code.replaceAll("\\", "\\\\")
    code =
      `__name__ = "different"
${code}
return calc(a, b)`

    await window.jsRUNpy.run(code, { a: nums[0], b: nums[1] }).then((out) => {
      setGlobalState("answer", [out.toString(), true])
    }).catch((e) => {
      alert(e)
    })

    await sleep(300)
    setGlobalState("isCalculating", false)
    setGlobalState("answerFirstTime", false)
  }

  // useEffect(() => {
  //   setTimeout(() => {
  //     inp1focus.current.focus();
  //   }, 100)
  // }, [inp1mounted])

  // useEffect(() => {
  //   ReactTooltip.rebuild();
  // });

  const fadeInDelay = 20

  return (
    <>
      <Snackbar open={inpError[0]} autoHideDuration={0}>
        <MuiAlert severity="error" sx={{ width: '100%' }}>
          {inpError[1]}
        </MuiAlert>
      </Snackbar>
      <FadeIn transitionDuration={400} delay={700}>
        <span />
        <Container className="indexInputOutputContainer" sx={{ border: 1, borderRadius: '10px', borderColor: theme.palette.grey[700] }} style={{ padding: "10px" }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <FadeIn delay={fadeInDelay} className="fadeinadddelay">
                <span />
                <CustomTextField customType={1} inputRef={inp1focus} onKeyDown={(e) => { handleKeyPress(1, e) }} inputProps={{ inputMode: 'numeric' }} label="Number 1" fullWidth variant="outlined" value={input1val} onChange={(e) => { handleInputChange(1, e) }} />
              </FadeIn>
            </Grid>
            <Grid item xs={12} style={{ display: "grid" }}>
              <FadeIn delay={fadeInDelay} className="fadeinadddelay fadeinDividedBy">
                <span /> <span />
                <div style={{ justifySelf: "center", backgroundColor: theme.palette.grey[900], padding: "4px", paddingInline: "7px", borderRadius: "10px", color: "#7f9fa8" }}>Divided by</div>
              </FadeIn>
            </Grid>
            <Grid item xs={12}>
              <FadeIn delay={fadeInDelay} className="fadeinadddelay">
                <span /> <span /> <span />
                <CustomTextField customType={2} inputRef={inp2focus} onKeyDown={(e) => { handleKeyPress(2, e) }} inputProps={{ inputMode: 'numeric' }} label="Number 2" fullWidth variant="outlined" value={input2val} onChange={(e) => { handleInputChange(2, e) }} />
              </FadeIn>
            </Grid>
            <Grid item xs={12} style={{ display: "grid" }} >
              <FadeIn delay={fadeInDelay} className="fadeinadddelay fadeinDividedBy">
                <span /> <span /> <span /> <span />
                <div style={{ justifySelf: "center" }}>
                  <Tooltip title={isJsrunpyLoading || rdc == "" ? `jsRUNpy library is downloading${dotsLoading}` : (isCalculating ? `The answer is being calculated${dotsLoading}` : (inpError[2] ? "Enter valid input first" : ""))} placement="bottom" arrow disableInteractive>
                    <span>
                      <LoadingButton disabled={inpError[2]} id="calc_button" size="normal" onClick={() => { calculate([input1val, input2val]) }} startIcon={<CalculateRoundedIcon />} loading={isJsrunpyLoading || isCalculating || rdc == ""} loadingPosition="start" variant="contained">
                        {isCalculating ? `Calculating${dotsLoading}` : "Calculate"}
                      </LoadingButton>
                    </span>
                  </Tooltip>
                </div>
              </FadeIn>
            </Grid>
            <Grid item xs={12}>
              <FadeIn delay={fadeInDelay} className="fadeinadddelay">
                <span /> <span /> <span /> <span /> <span />
                <Output value={answer[0]} />
              </FadeIn>
            </Grid>
          </Grid>
        </Container>
      </FadeIn>
    </>
  );
}

export default Input;
