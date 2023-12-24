import React,{useState} from "react";
import { Button, Grid, Typography,Box} from "@mui/material";

export const UseState = () => {
  const [count, setcount] = useState(0);
  return <Grid>
    <Typography style={{textAlign:"center",fontSize:"20px",fontWeight:"700",marginTop:"20px"}}>
        UseState Hook
    </Typography>
    <Typography style={{textAlign:"center"}}>
        {count}
    </Typography>
    <Box style={{display:"flex",flexDirection:"row",justifyContent:"center"}}>
        <Button onClick={()=>{setcount(count+1)} } variant="contained" style={{marginRight:"10px"}}>
            +
        </Button>
        <Button onClick={()=>{setcount(count-1)}} variant="contained">
            -
        </Button>
    </Box>
  </Grid>
};
export default UseState;
