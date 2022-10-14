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
import OutputOptions from './outputOptions'
import Output from './output';
import LoadingButton from '@mui/lab/LoadingButton';
import CalculateRoundedIcon from '@mui/icons-material/CalculateRounded';
import Constants from '../../constants.json';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import RunHarlem from '../../buidAssets/harlem.js'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import useDeviceSize from '../../hooks/useDeviceSize';


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

  const [inpErrors, setInpErrors] = useState({one: false, two: false})

  const [winWidth, winHeight] = useDeviceSize();

  const [input1val] = useGlobalState("input1")
  const [input2val] = useGlobalState("input2")
  const [isJsrunpyLoading] = useGlobalState("isJsrunpyLoading")
  const [isCalculating] = useGlobalState("isCalculating")
  const [answer] = useGlobalState("answer")
  const [rdc] = useGlobalState("rdc")
  const [inp1mounted] = useGlobalState("inp1mounted")
  const [dotsLoading] = useGlobalState("dotsLoading");
  const [inpError] = useGlobalState("inpError");
  const [outputOptionsHaveAcordicon] = useGlobalState("outputOptionsHaveAcordicon");
  // const [showDelay, setShowDelay] = useState(false);

  useEffect(()=>{
    if (winWidth <= 900) {
      setGlobalState("outputOptionsHaveAcordicon", true)
    } else {
      setGlobalState("outputOptionsHaveAcordicon", false)
    }
  }, [winWidth])

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

  var randName = 1;
  useEffect(()=>{
    randName = Number((Math.random()).toString().replaceAll(".", ""));
  }, [])

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
      RunHarlem()
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

  const fadeInDelay = 25

  return (
    <>
      <Snackbar open={inpError[0]} autoHideDuration={0}>
        <MuiAlert severity="error" sx={{ width: '100%' }}>
          {inpError[1]}
        </MuiAlert>
      </Snackbar>
      <FadeIn transitionDuration={400} delay={850}>
        <span />
        <Container className="indexInputOutputContainer" sx={{ border: 1, borderRadius: '10px', borderColor: theme.palette.grey[700] }} style={{ padding: "10px" }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <FadeIn delay={fadeInDelay} className="fadeinadddelay">
                <span />
                <CustomTextField setError={(l)=>{setInpErrors({...inpErrors, one: l})}} customType={1} inputRef={inp1focus} name={Math.random()} onKeyDown={(e) => { handleKeyPress(1, e) }} inputProps={{ autoComplete: "none", inputMode: 'numeric' }} label="Number 1" fullWidth variant="outlined" value={input1val} onChange={(e) => { handleInputChange(1, e) }} />
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
                <CustomTextField setError={(l)=>{setInpErrors({...inpErrors, two: l})}} customType={2} inputRef={inp2focus} name={Math.random()} onKeyDown={(e) => { handleKeyPress(2, e) }} inputProps={{ autoComplete: "none", inputMode: 'numeric' }} label="Number 2" fullWidth variant="outlined" value={input2val} onChange={(e) => { handleInputChange(2, e) }} />
              </FadeIn>
            </Grid>
            <Grid item xs={12} style={{ display: "grid" }} >
              <FadeIn delay={fadeInDelay} className="fadeinadddelay fadeinDividedBy">
                <span /> <span /> <span /> <span />
                <div style={{ display: "flex", justifyContent: "center", gap: "1rem" }} className={"f42d4f1d14f5d1d45"}>
                  <div style={{ display: "flex" }} className={"snzjgfdnghjkfsnghjf"}>
                    <Tooltip enterTouchDelay={0} title={isJsrunpyLoading || rdc == "" ? `jsRUNpy library is downloading${dotsLoading}` : (isCalculating ? `The answer is being calculated${dotsLoading}` : ((inpError[2] || input1val == "" || input2val == "" || inpErrors.one || inpErrors.two) ? "Enter valid input first" : ""))} placement="bottom" arrow disableInteractive>
                      <span className={"outoptionschild"}>
                        <LoadingButton disabled={inpError[2] || input1val == "" || input2val == "" || inpErrors.one || inpErrors.two} id="calc_button" size="normal" onClick={() => { calculate([input1val, input2val]) }} startIcon={<CalculateRoundedIcon />} loading={isJsrunpyLoading || isCalculating || rdc == ""} loadingPosition="start" variant="contained">
                          {isCalculating ? `Calculating${dotsLoading}` : "Calculate"}
                        </LoadingButton>
                      </span>
                    </Tooltip>
                  </div>
                  <div style={{ display: "flex", gap: "inherit" }} className={"outoptionschild"}>
                    {outputOptionsHaveAcordicon ? <>
                      <Accordion>
                        <AccordionSummary
                          expandIcon={<ExpandMoreIcon />}
                        >
                          <Typography>More options</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                          <OutputOptions />
                        </AccordionDetails>
                      </Accordion>
                    </> : <><OutputOptions /></>
                    }
                  </div>
                </div>
              </FadeIn>
            </Grid>
            {/* <Grid item xs={12} style={{ display: "grid" }}>
              <FadeIn delay={fadeInDelay} className="fadeinadddelay fadeinDividedBy">
                <span /> <span /> <span /> <span /> <span />
                <div style={{ justifySelf: "center" }}>
                  <OutputOptions />
                </div>
              </FadeIn>
            </Grid> */}
            <Grid item xs={12}>
              <FadeIn delay={fadeInDelay} className="fadeinadddelay">
                <span /> <span /> <span /> <span /> <span /> <span />
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
