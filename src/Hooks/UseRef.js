import { Button, Grid, TextField, Typography } from "@mui/material";
import React, { useRef } from "react";

export const UseRef = () => {
  const inputRef = useRef(null);
  function handleRefHOok() {
    inputRef.current.value = "";
    inputRef.current.focus();
  }
  return (
    <Grid textAlign={"center"}>
      <Typography
        style={{ marginTop: "50px", fontSize: "20px", fontWeight: 700 }}
      >
        UsRef Hook
      </Typography>
      <input ref={inputRef} style={{ height: "30px", marginRight: "10px" }} />
      <Button onClick={() => handleRefHOok()} variant="contained">
        Clear Input
      </Button>
    </Grid>
  );
};
export default UseRef;
