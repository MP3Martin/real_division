import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import NavBarRightIcons from './NavBarRightIcons';


import TitleText from './TitleText';

export default function NavBar() {
  return (
    // <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{"max-height": "64px"}}>
        <Toolbar style={{"display": "grid"}}>
          {/* <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton> */}
            <Typography variant="h4" component="div" style={{"justify-self": "center"}} className="titleTextTypography">
                <TitleText />
            </Typography>
            <NavBarRightIcons />
          {/* <Box display="flex" flexDirection="column" > */}
          {/* </Box> */}
        </Toolbar>
      </AppBar>
    // </Box>
  );
}