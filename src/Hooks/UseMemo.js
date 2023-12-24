import { Grid, Typography ,Button} from "@mui/material";
import React, { useMemo, useState } from "react";

const UseMemo = () => {
  const [item, setitem] = useState(10);
  const [count, setcount] = useState(1);
  const mulitple = () => {
    console.log("checckkkk");
    return count * 10;
  };
  const multipleMemo=useMemo(()=>mulitple(),[count])
  return (
    <Grid style={{justifyContent:"center",flexDirection:"column",display:"flex",alignItems:"center"}} >
      <Typography 

        style={{ marginBottom:"20px",textAlign: "center", fontSize: "20px", fontWeight: "700" ,marginTop:"50px"}}
        >UseMemo</Typography>
      {multipleMemo}
      <Typography style={{marginBottom:"20px"}}>count:{count}</Typography>
      <Typography style={{marginBottom:"20px"}}>data:{item}</Typography>
      <Button variant="contained"  style={{marginBottom:"20px"}}
        onClick={() => {
          setcount(count + 1);
        }}
      >
        update count
      </Button>
      <Button variant="contained" 
        onClick={() => {
          setitem(item * 10);
        }}
      >
        update item
      </Button>
    </Grid>
  );
};

export default UseMemo;
