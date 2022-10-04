import { React, Component, useState, useEffect, useRef } from "react";
import { useTheme } from '@mui/material';
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";

import { setGlobalState, useGlobalState } from '../../hooks/globalState';

function isCustomDigit(value) {
  value = value.replaceAll(".", "").replaceAll(",", "")
  return (/^\d+$/.test(value))
}

function Input(props) {
  const theme = useTheme();

  const [input1val] = useGlobalState("input1")
  const [input2val] = useGlobalState("input2")

  function substringFrequency(e,n,t){let r,l=0;for(let u=0;u<e.length&&(r=e.indexOf(n,u),-1!=r);u++)u=1==n.length||1==t?r:r+1,l++;return l}

  const handleInputChange = (id) => (e) => {
    var passed = 0
    var value = e.target.value
    var beforeValue = eval("input" + id + "val")

    //replacing
    value = value.replaceAll(",", ".")
    beforeValue = beforeValue.replaceAll(",", ".")

    //checking
    if (!isCustomDigit(value)) { passed++ }
    if (value === "") { passed-- }

    // allow only one floating point
    if (substringFrequency(value, ".") > 1) {
      passed++
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
            <TextField label="Number 1" fullWidth variant="outlined" value={input1val} onChange={handleInputChange(1)} />
          </Grid>
          <Grid item xs={12}>
            <div>{input1val} and {input2val}</div>
          </Grid>
          <Grid item xs={12}>
            <TextField label="Number 2" fullWidth variant="outlined" value={input2val} onChange={handleInputChange(2)} />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default Input;
