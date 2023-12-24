import { Button, Typography, Grid } from "@mui/material";
import React, { useRef } from "react";
import ChildComponent from "./ChildComponent";

const UseImprativeHandle = () => {
  const ref = useRef("");
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
      <ChildComponent ref={ref} />
      <Typography style={{ fontSize: "20px", fontWeight: 700 }}>
        UseImprativeHandle
      </Typography>
      <Button
        style={{ marginTop: "30px" }}
        variant="contained"
        onClick={() => {
          ref.current.sayHello();
        }}
      >
        Hello
      </Button>
    </Grid>
  );
};

export default UseImprativeHandle;
