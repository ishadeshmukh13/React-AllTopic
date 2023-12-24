import { Button, Grid, Typography } from "@mui/material";
import React, { useDebugValue, useState } from "react";

const UseDebugValue = () => {
  const [state, setState] = useState(0);
  useDebugValue(state);

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
      <Typography
        style={{ fontSize: "20px", fontWeight: 700, textAlign: "center" }}
      >
        UseDebugValue
      </Typography>
      <Button
        variant="contained"
        onClick={() => {
          setState(state+1)
        }}
      >+</Button>
    </Grid>
  );
};

export default UseDebugValue;
