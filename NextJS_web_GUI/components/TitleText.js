import {React, Component} from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.div`

`;

class TitleText extends Component{
    render(){return(
        <StyledWrapper>
            <span style={{"font-family": "'Audiowide', cursive"}} className="titleTextSpan">
                Real Division
            </span>
        </StyledWrapper>
    )}
}

export default TitleText;