import { React, Component, useState, useEffect, useRef, createRef } from "react";
import { setGlobalState, useGlobalState } from '../../hooks/globalState';

import TextField from "@mui/material/TextField";
import { useTheme } from '@mui/material';

const CustomTextField = (props) => {
  const theme = useTheme();
  const [error, setError] = useState([false, ""])
  const [input1val] = useGlobalState("input1")
  const [input2val] = useGlobalState("input2")
  const [inpError] = useGlobalState("inpError")
  const [thisRef, setThisRef] = useState(null)

  useEffect(()=>{
    if(thisRef) {
      var thisValue = thisRef.value
      console.log(thisValue)
      function clearERR(){
        setError([false, ""]);
          setGlobalState("inpError", [false, inpError[1], false]);
      }
       var e = 0
       clearERR() 
        if (thisValue.startsWith(".") || thisValue.endsWith(".")) {
          setError([true, `Number can't start / end with "."!`]);
          setGlobalState("inpError", [inpError[0], inpError[1], true]); 
          e++
        }
        if (thisValue === "0") {
          setError([true, `Can't divide by zero!`]);
          setGlobalState("inpError", [inpError[0], inpError[1], true]); 
          e++
        }
        if (input1val.replaceAll(".", "") == "" || input2val.replaceAll(".", "") == "") {
          setGlobalState("inpError", [inpError[0], inpError[1], true]);
          e++
        } else {
          if (Number(input1val) < Number(input2val)) {
            setGlobalState("inpError", [true, "First number must be bigger", true]);
            e++
          }
        }
        if (e == 0) {
          clearERR()
        }
    }
  }, [input1val, input2val])

  return <TextField {...props} enterKeyHint={"enter"} error={error[0]} helperText={error[1]} className={"allTextFields"} onChange={(e) => {
    setThisRef(e.target);
    const firstVal = e.target.value;
    const caretStart = e.target.selectionStart;
    const caretEnd = e.target.selectionEnd;
    props.onChange && props.onChange(e)
    setTimeout(() => {
      const secondVal = e.target.value;
      const diff = firstVal.length - secondVal.length
      e.target.setSelectionRange(caretEnd - diff, caretEnd - diff)
      // setTimeout(()=>{
      //   validateText()
      // }, 1)
    }, 0);
  }
  } />;
};

export default CustomTextField;
