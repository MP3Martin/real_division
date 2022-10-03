import { React, Component, useState, useEffect } from "react";
import styled from "styled-components";
import IconButton from "@mui/material/IconButton";
import Constants from "../constants.json";

import GitHubIcon from "@mui/icons-material/GitHub";
import useDeviceSize from "../hooks/useDeviceSize";

const StyledWrapper = styled.div``;

function NavBarRightIcons(props) {
  function iconButtonSize(width) {
    switch (true) {
      case width < 310:
        return "small";
      case width < 400:
        return "medium";
      default:
        return "large";
    }
  }

  const [width, height] = useDeviceSize();

  return (
    <StyledWrapper style={props.style}>
      {/* <div style={{"height": "52px", "width": "52px"}} /> */}
      <IconButton
        size={iconButtonSize(width)}
        href={Constants.adress.github}
        target="_blank"
      >
        <GitHubIcon fontSize="inherit" />
      </IconButton>

      {/* <IconButton size={iconButtonSize} href={Constants.adress.github} target="_blank">
                <GitHubIcon fontSize="inherit" />
            </IconButton>

            <IconButton size={iconButtonSize} href={Constants.adress.github} target="_blank">
                <GitHubIcon fontSize="inherit" />
            </IconButton> */}
    </StyledWrapper>
  );
}

export default NavBarRightIcons;
