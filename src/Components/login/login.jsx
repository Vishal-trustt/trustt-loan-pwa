import { Container, Grid } from "@mui/material";
import React from "react";

function login() {
  return (
    <>
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <div></div>
          </Grid>
          <Grid item xs={6}></Grid>
          <div></div>
        </Grid>
      </Container>
    </>
  );
}

export default login;
