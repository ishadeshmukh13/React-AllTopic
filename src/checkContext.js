import React, { useContext, useEffect } from "react";
import AppContext from "./Context/createcontext";
import { Button, Typography } from "@mui/material";
const CheckContext = () => {
  const data = useContext(AppContext);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Typography
        style={{
          textAlign: "center",
          fontSize: "20px",
          fontWeight: "700",
          marginTop: "50px",
        }}
      >
        Context hook
      </Typography>
      <Typography textAlign={"center"}>{data.state.name}</Typography>
      <Button
        variant="contained"
        onClick={() => {
          data.updateData({ name: "ishhh" });
        }}
      >
        update data
      </Button>
    </div>
  );
};

export default CheckContext;
