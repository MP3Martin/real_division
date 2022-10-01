import {React, Component, useState, useEffect} from 'react';
import styled from 'styled-components';
import IconButton from '@mui/material/IconButton';
import Constants from '../constants.json'

import GitHubIcon from '@mui/icons-material/GitHub';

const StyledWrapper = styled.div`
    
`;

function NavBarRightIcons(props){
    function iconButtonSize(width) {
        if (width < 360) { return "small" }
        return "large"
    }

    // the following line exists thanks to https://remotestack.io/react-js-detect-window-width-and-height-tutorial/
    const[windowDimenion,detectHW]=useState({winWidth:window.innerWidth,winHeight:window.innerHeight}),detectSize=()=>{detectHW({winWidth:window.innerWidth,winHeight:window.innerHeight})};useEffect((()=>(window.addEventListener("resize",detectSize),()=>{window.removeEventListener("resize",detectSize)})),[windowDimenion]);

    return(
        <StyledWrapper style={props.style}>
            {/* <div style={{"height": "52px", "width": "52px"}} /> */}
            <IconButton size={iconButtonSize(windowDimenion.winWidth)} href={Constants.adress.github} target="_blank">
                <GitHubIcon fontSize="inherit" />
            </IconButton>

            {/* <IconButton size={iconButtonSize} href={Constants.adress.github} target="_blank">
                <GitHubIcon fontSize="inherit" />
            </IconButton>

            <IconButton size={iconButtonSize} href={Constants.adress.github} target="_blank">
                <GitHubIcon fontSize="inherit" />
            </IconButton> */}
        </StyledWrapper>
    )
}

export default NavBarRightIcons;