import { React, Component, useState, useEffect, useRef } from "react";
import { useTheme } from '@mui/material';
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from '@mui/material/Box';

import { setGlobalState, useGlobalState } from '../../hooks/globalState';
import CustomTextField from './customTextField';
import Output from './output';
import LoadingButton from '@mui/lab/LoadingButton';
import CalculateRoundedIcon from '@mui/icons-material/CalculateRounded';
import Constants from '../../constants.json';

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

  const setFocus = { inp1focus: inp1focus, inp2focus: inp2focus }

  const [input1val] = useGlobalState("input1")
  const [input2val] = useGlobalState("input2")
  const [isJsrunpyLoading] = useGlobalState("isJsrunpyLoading")
  const [isCalculating] = useGlobalState("isCalculating")
  const [answer] = useGlobalState("answer")
  const [rdc] = useGlobalState("rdc")

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

      if (eval("input" + invertedID() + "val") == "") { eval("setFocus.inp" + invertedID() + "focus.current.focus()") }

      if (input1val != "" && input2val != "") {
        document.getElementById("calc_button").click()
      }

      e.preventDefault()
    }

    if (e.key === 'ArrowDown') {
      if (id == 1) {
        setFocus.inp2focus.current.focus();
      }
      e.preventDefault()
    }

    if (e.key === 'ArrowUp') {
      if (id == 2) {
        setFocus.inp1focus.current.focus();
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
  }

  return (
    <>
      <Container className="indexInputOutputContainer" sx={{ border: 1, borderRadius: '10px', borderColor: theme.palette.grey[700] }} style={{ padding: "10px" }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <CustomTextField inputRef={setFocus.inp1focus} onKeyDown={(e) => { handleKeyPress(1, e) }} inputProps={{ inputMode: 'numeric' }} label="Number 1" fullWidth variant="outlined" value={input1val} onChange={(e) => { handleInputChange(1, e) }} />
          </Grid>
          <Grid item xs={12} style={{ display: "grid" }}>
            <div style={{ justifySelf: "center", backgroundColor: theme.palette.grey[900], padding: "4px", paddingInline: "7px", borderRadius: "10px", color: "#7f9fa8" }}>Divided by</div>
          </Grid>
          <Grid item xs={12}>
            <CustomTextField inputRef={setFocus.inp2focus} onKeyDown={(e) => { handleKeyPress(2, e) }} inputProps={{ inputMode: 'numeric' }} label="Number 2" fullWidth variant="outlined" value={input2val} onChange={(e) => { handleInputChange(2, e) }} />
          </Grid>
          <Grid item xs={12} style={{ display: "grid" }}>
            <div style={{ justifySelf: "center" }}>
              <LoadingButton id="calc_button" size="normal" onClick={() => { calculate([input1val, input2val]) }} startIcon={<CalculateRoundedIcon />} loading={isJsrunpyLoading || isCalculating || rdc == ""} loadingPosition="start" variant="contained">
                {isCalculating ? "Calculating..." : "Calculate"}
              </LoadingButton>
            </div>
          </Grid>
          <Grid item xs={12}>
            <Output value={answer[0]} />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default Input;
