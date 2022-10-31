import { React, Component, useState, useEffect, Children, cloneElement } from "react";
import { setGlobalState, useGlobalState } from '../hooks/globalState';
import { useTheme } from '@mui/material';
import styled from "styled-components";
import IconButton from "@mui/material/IconButton";
import Constants from "../constants.json";

import GitHubIcon from "@mui/icons-material/GitHub";
import InfoIcon from '@mui/icons-material/Info';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import Brightness4Icon from '@mui/icons-material/Brightness4';

import useDeviceSize from "../hooks/useDeviceSize";

import Dialog from '@mui/material/Dialog';
import Button from '@mui/material/Button';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const StyledWrapper = styled.div``;

function NavBarRightIcons(props) {
  const [infoDialogOpen, setInfoDialogOpen] = useState(false);
  const [darkMode] = useGlobalState("darkMode");
  const [notSupportedOpen] = useGlobalState("notSupportedOpen")
  const handleInfoDialogOpen = () => {
    setInfoDialogOpen(true);
  };

  const handleInfoDialogClose = () => {
    setInfoDialogOpen(false);
  };

  const handleThemeChange = () => {
    // setGlobalState("darkMode", !darkMode)
    setGlobalState("notSupportedOpen", true);
  }

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
      <StyledWrapper style={props.style} className={"navBarRightIconsParent"}>
        {/* <div style={{"height": "52px", "width": "52px"}} /> */}
        <IconButton
          className={"navBarRightIconsChild"}
          size={iconButtonSize(width)}
          onClick={handleInfoDialogOpen}
        >
          <InfoIcon fontSize="inherit" />
        </IconButton>

        <IconButton
          className={"navBarRightIconsChild"}
          size={iconButtonSize(width)}
          href={Constants.adress.github}
          target="_blank"
        >
          <GitHubIcon fontSize="inherit" />
        </IconButton>

        <IconButton
          className={"navBarRightIconsChild"}
          size={iconButtonSize(width)}
          onClick={handleThemeChange}
        >
          {darkMode ?
            <Brightness7Icon fontSize="inherit" /> : <Brightness4Icon fontSize="inherit" />
          }
        </IconButton>
      </StyledWrapper>

      <Dialog
        open={infoDialogOpen}
        onClose={handleInfoDialogClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title" style={{ fontSize: "2.4rem", marginInline: "auto" }}>
          Info
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <div style={{ lineHeight: 0 }} className="infoDialogInnerDiv">
              <h3>
                Basic info
              </h3>
              <p>
                <ul>
                  <li>
                    Made by <a href="//mp3martin.xyz" target="_blank" style={{ color: theme.palette.primary.dark }}>MP3Martin</a>. <br />
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
                    <b>Framework:</b> Next.js - React
                  </li>
                  <li>
                    <b>UI Library:</b> MUI
                  </li>
                  <li>
                    <b>Styling:</b> scss
                  </li>
                  <li>
                    <b>The cool thing:</b> There is an actual python code running in your browser<>&nbsp;</>-<>&nbsp;</>using <a href="//github.com/MP3Martin/jsRUNpy.js" target="_blank" style={{ color: theme.palette.primary.dark }}>jsRUNpy.js</a> (<a href="//github.com/brython-dev/brython" target="_blank" style={{ color: theme.palette.primary.dark }}>Brython</a> but executed by js)
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

      <Snackbar open={notSupportedOpen} autoHideDuration={1500} onClose={() => { setGlobalState("notSupportedOpen", false) }}>
        <MuiAlert elevation={10} variant="filled" severity="error" onClose={() => { setGlobalState("notSupportedOpen", false) }}>
          Not supported!
        </MuiAlert>
      </Snackbar>
    </>
  );
}

export default NavBarRightIcons;
