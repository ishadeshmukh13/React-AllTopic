import { Typography, Grid } from "@mui/material";
import React, { useLayoutEffect } from "react";

const UseLayoutEffect = () => {
  useLayoutEffect(() => {
    console.log("Hello, UseLayoutEffect");
  });
  return (
    <Grid
      style={{
        display: "flex",
        justifycontent: "center",
        flexDirection: "column",
        marginTop: "20px",
        alignItems: "center",
      }}
    >
      <Typography style={{ fontSize: "20px", fontWeight: 700 }}>
        UseLayoutEffect
      </Typography>
    </Grid>
  );
};

export default UseLayoutEffect;
