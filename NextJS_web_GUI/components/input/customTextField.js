import { React, Component, useState, useEffect, useRef } from "react";
import TextField from "@mui/material/TextField";

const CustomTextField = (props) => {
  return <TextField {...props} onChange={(e) => {
    const firstVal = e.target.value;
    const caretStart = e.target.selectionStart;
    const caretEnd = e.target.selectionEnd;
    props.onChange && props.onChange(e)
    setTimeout(() => {
      const secondVal = e.target.value;
      const diff = firstVal.length - secondVal.length
      e.target.setSelectionRange(caretEnd - diff, caretEnd - diff)
    }, 0);
  }
  } />;
};

export default CustomTextField;