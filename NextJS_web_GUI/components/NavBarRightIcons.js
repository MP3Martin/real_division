import {React, Component} from 'react';
import styled from 'styled-components';
import IconButton from '@mui/material/IconButton';
import Constants from '../constants.json'
import { useWindowSize } from '@react-hook/window-size'

import GitHubIcon from '@mui/icons-material/GitHub';

const StyledWrapper = styled.div`
    
`;

function NavBarRightIcons(props){

    const [width, height] = useWindowSize()

    var iconButtonSize = "large"
    if (width < 360) { iconButtonSize = "small" }

    return(
        <StyledWrapper style={props.style}>
            {/* <div style={{"height": "52px", "width": "52px"}} /> */}
            <IconButton size={iconButtonSize} href={Constants.adress.github} target="_blank">
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