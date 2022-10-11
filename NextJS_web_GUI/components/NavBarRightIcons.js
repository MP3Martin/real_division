import { React, Component, useState, useEffect } from "react";
import { useTheme } from '@mui/material';
import styled from "styled-components";
import IconButton from "@mui/material/IconButton";
import Constants from "../constants.json";

import GitHubIcon from "@mui/icons-material/GitHub";
import InfoIcon from '@mui/icons-material/Info';
import useDeviceSize from "../hooks/useDeviceSize";

import Dialog from '@mui/material/Dialog';
import Button from '@mui/material/Button';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

const StyledWrapper = styled.div``;

function NavBarRightIcons(props) {
  const [infoDialogOpen, setInfoDialogOpen] = useState(false);
  const handleInfoDialogOpen = () => {
    setInfoDialogOpen(true);
  };

  const handleInfoDialogClose = () => {
    setInfoDialogOpen(false);
  };

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

  const theme = useTheme();

  return (
    <>
    <StyledWrapper style={props.style}>
      {/* <div style={{"height": "52px", "width": "52px"}} /> */}
      <IconButton
        size={iconButtonSize(width)}
        onClick={handleInfoDialogOpen}
      >
        <InfoIcon fontSize="inherit" />
      </IconButton>

      <IconButton
        size={iconButtonSize(width)}
        href={Constants.adress.github}
        target="_blank"
      >
        <GitHubIcon fontSize="inherit" />
      </IconButton>
    </StyledWrapper>

    <Dialog
        open={infoDialogOpen}
        onClose={handleInfoDialogClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title" style={{fontSize: "2.4rem", marginInline: "auto"}}>
          Info
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <div style={{lineHeight: 0}} className="infoDialogInnerDiv">
              <h3>
                Basic info
              </h3>
              <p>
                <ul>
                  <li>
                    Made by <a href="//mp3martin.xyz" target="_blank" style={{color: theme.palette.primary.dark}}>MP3Martin</a>. <br />
                  </li>
                  <li>
                    Using at school: At your own risk.
                  </li>
                </ul>
              </p>
              <h3>
                Tips
              </h3>
              <p>
                <ul>
              <li>
                Use arrow keys to switch between number inputs (pc only).
                </li>
                <li>
                Use enter key to calculate without needing to use your mouse (pc only).
                </li>
                </ul>
              </p>
              <h3>
                Info for advanced users
              </h3>
              <p>
                <ul>
              <li>
                Framework: Next.js - React
                </li>
                <li>
                UI Library: MUI
                </li>
                <li>
                Styling: scss
                </li>
                </ul>
              </p>
            </div>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleInfoDialogClose} autoFocus>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default NavBarRightIcons;
