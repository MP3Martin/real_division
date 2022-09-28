import {React, Component} from 'react';
import { FadeIn } from 'react-slide-fade-in'
import styled from 'styled-components';

const StyledWrapper = styled.div`

`;

class TitleText extends Component{
    render(){return(
        <StyledWrapper>
            <FadeIn from="top" positionOffset={4} triggerOffset={900} durationInMilliseconds={600}>
            <span style={{"font-family": "'Audiowide', cursive"}} className="titleTextSpan">
                Real Division
            </span>
            </FadeIn>
        </StyledWrapper>
    )}
}

export default TitleText;