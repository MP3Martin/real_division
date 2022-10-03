import { React, Component, useState, useEffect } from "react";
import { useTheme } from '@mui/material';
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";

function Input(props) {
  const theme = useTheme();
  return (
    <>
      <Container className="indexInputOutputContainer" sx={{ border: 1, borderRadius: '10px', borderColor: theme.palette.grey[700] }} style={{ padding: "10px" }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField label="Number 1" fullWidth variant="outlined" />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default Input;
