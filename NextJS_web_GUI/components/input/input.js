import { React, Component, useState, useEffect, useRef } from "react";
import { useTheme } from '@mui/material';
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";

import { setGlobalState, useGlobalState } from '../../hooks/globalState';
import CustomTextField from './customTextField';
import LoadingButton from '@mui/lab/LoadingButton';
import CalculateRoundedIcon from '@mui/icons-material/CalculateRounded';

function isCustomDigit(value) {
  value = value.replaceAll(".", "").replaceAll(",", "")
  return (/^\d+$/.test(value))
}

function Input(props) {
  const theme = useTheme();

  const [input1val] = useGlobalState("input1")
  const [input2val] = useGlobalState("input2")
  const [isJsrunpyLoading] = useGlobalState("isJsrunpyLoading")

  function substringFrequency(e, n, t) { let r, l = 0; for (let u = 0; u < e.length && (r = e.indexOf(n, u), -1 != r); u++)u = 1 == n.length || 1 == t ? r : r + 1, l++; return l }

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

  return (
    <>
      <Container className="indexInputOutputContainer" sx={{ border: 1, borderRadius: '10px', borderColor: theme.palette.grey[700] }} style={{ padding: "10px" }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <CustomTextField inputProps={{ inputMode: 'numeric' }} label="Number 1" fullWidth variant="outlined" value={input1val} onChange={(e) => { handleInputChange(1, e) }} />
          </Grid>
          <Grid item xs={12} style={{ display: "grid" }}>
            <div style={{ justifySelf: "center", backgroundColor: theme.palette.grey[900], padding: "4px", paddingInline: "7px", borderRadius: "10px", color: "#7f9fa8" }}>Divided by</div>
          </Grid>
          <Grid item xs={12}>
            <CustomTextField inputProps={{ inputMode: 'numeric' }} label="Number 2" fullWidth variant="outlined" value={input2val} onChange={(e) => { handleInputChange(2, e) }} />
          </Grid>
          <Grid item xs={12} style={{ display: "grid" }}>
            <div style={{ justifySelf: "center" }}>
              <LoadingButton size="normal" onClick={()=>{alert("This website is not finished, sorry.")}} startIcon={<CalculateRoundedIcon />} loading={isJsrunpyLoading || false} loadingPosition="start" variant="contained">
                Calculate
              </LoadingButton>
            </div>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default Input;
