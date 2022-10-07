import { React, Component, useState, useEffect, useRef } from "react";

import TextField from "@mui/material/TextField";
import { useTheme } from '@mui/material';

const CustomTextField = (props) => {
  const theme = useTheme();
  return <TextField {...props} enterKeyHint={"enter"} className={"allTextFields"} onChange={(e) => {
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
