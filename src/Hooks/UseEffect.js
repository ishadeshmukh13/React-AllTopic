import React, { useState, useEffect } from "react";
import { Typography, Grid, Box, Button } from "@mui/material";
export const UseEffect = () => {
  const [BackGround, setBackGround] = useState("#a3a3d0");
  const [color, setColor] = useState("white");
  useEffect(() => {
    document.body.style.backgroundColor = BackGround;
    document.body.style.color = color;
  });

  return (
    <Grid container style={{justifyContent:"center",flexDirection:"column"}}>
      <Typography
        style={{ textAlign: "center", fontSize: "20px", fontWeight: "700" ,marginTop:"50px"}}
      >
        UseEffect Hook
      </Typography>
      <Box style={{display:"flex",justifyContent:"center",flexDirection:"row"}}>
        <Button variant="contained" style={{marginRight:"10px"}}
          onClick={() => {
            setBackGround(BackGround==="#bba2a6"?"#a3a3d0":"#bba2a6");
          }}
        >
          {" "}
          Change Bckground color
        </Button>
        <Button variant="contained"
          onClick={() => {
            setColor(color==="white"?"black":"white");
          }}
        >
          Change text color
        </Button>
      </Box>
    </Grid>
  );
};
export default UseEffect;
