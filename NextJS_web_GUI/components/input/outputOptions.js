import { React, Component, useState, useEffect, useRef, createRef } from "react";
import { setGlobalState, useGlobalState } from '../../hooks/globalState';

import TextIncreaseIcon from '@mui/icons-material/TextIncrease';
import TextDecreaseIcon from '@mui/icons-material/TextDecrease';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import Slider from '@mui/material/Slider';
import IconButton from '@mui/material/IconButton';

const OutputOptions = (props) => {
    const FONT_SIZE_SLIDER = {
        min: 500,
        max: 2000,
    }
    const [answer] = useGlobalState("answer")
    const [copiedOpen, setCopiedOpen] = useState(false)
    const [outputTextSize] = useGlobalState("outputTextSize")

    function handleMakefntsizeBiggerSmaller(offset) {
        const newVal = outputTextSize + offset
        if (newVal > FONT_SIZE_SLIDER.max) {
            //
        } else if (newVal < FONT_SIZE_SLIDER.min) {
            //
        } else {
            setGlobalState("outputTextSize", newVal)
        }
    }

    return (<>
        <Box
            sx={{
                display: 'flex',
                alignItems: 'center',
                width: 'fit-content',
                border: (theme) => `1px solid ${theme.palette.divider}`,
                borderRadius: 1,
                paddingInline: "0.4rem",
                bgcolor: 'background.paper',
                color: 'text.secondary',
                '& svg': {
                    m: 1.5,
                },
                '& hr': {
                    mx: 0.5,
                },
                // height: '2.4rem',
            }}
        >
            <IconButton size="small" onClick={()=>{handleMakefntsizeBiggerSmaller(-100)}}>
              <TextDecreaseIcon fontSize="small" />
            </IconButton>
            <Slider
                // defaultValue={875}
                value={outputTextSize}
                onChange={(event, newValue)=>{setGlobalState("outputTextSize", newValue)}}
                step={30}
                min={FONT_SIZE_SLIDER.min}
                max={FONT_SIZE_SLIDER.max}
                sx={{minWidth: "4rem", maxWidth: "7rem"}}
            />
            <IconButton size="small" onClick={()=>{handleMakefntsizeBiggerSmaller(+100)}}>
              <TextIncreaseIcon fontSize="small" />
            </IconButton>
            <Divider orientation="vertical" variant="middle" flexItem sx={{marginLeft: "2px !important", marginRight: "0.5rem !important"}}/>
            <Button variant="contained" size="small" color="secondary" onClick={() => {
                navigator.clipboard.writeText(answer[0]);
                setCopiedOpen(true);
            }}>COPY</Button>
        </Box>

        <Snackbar open={copiedOpen} autoHideDuration={1500} onClose={() => { setCopiedOpen(false) }}>
            <MuiAlert elevation={10} variant="filled" severity="success" onClose={() => { setCopiedOpen(false) }}>
                Successfully copied the result!
            </MuiAlert>
        </Snackbar>
    </>)
};

export default OutputOptions;