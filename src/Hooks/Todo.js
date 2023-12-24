import { Button, Typography, Grid } from "@mui/material";
import React, { memo } from "react";

const Todo = ({ data, updateData }) => {
  console.log("helllo");
  return (
    <Grid>
      <Typography
        style={{ textAlign: "center", fontSize: "20px", fontWeight: "700" ,marginTop:"50px"}}
      >Todo</Typography>
      {data &&
        data.map((item, index) => (
          <Typography key={index} style={{fontSize: "15px", fontWeight: "700",marginTop:"10px"}}>
            {item}
            {index}
          </Typography>
        ))}

      <Button variant="contained" onClick={()=>updateData()} style={{marginTop:"10px"}}>add +</Button>
    </Grid>
  );
};

export default memo(Todo);
