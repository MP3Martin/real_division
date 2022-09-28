import {React, Component} from 'react';
import { FadeIn } from 'react-slide-fade-in'
import styled from 'styled-components';
import IconButton from '@mui/material/IconButton';
import Constants from '../constants.json'

import GitHubIcon from '@mui/icons-material/GitHub';

const StyledWrapper = styled.div`
    right: 0.5rem;
    position: absolute;
`;

class NavBarRightIcons extends Component{
    render(){return(
        <StyledWrapper>
            <IconButton size="large" href={Constants.adress.github} target="_blank">
                <GitHubIcon fontSize="inherit" />
            </IconButton>
        </StyledWrapper>
    )}
}

export default NavBarRightIcons;