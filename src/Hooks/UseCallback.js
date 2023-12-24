import React, { useCallback, useState } from 'react'
import Todo from "./Todo"
import { Grid, Typography ,Button} from '@mui/material';
const UseCallback = () => {
    const [data, setdata] = useState([]);
    const [count,setCount]=useState(0);
    const updateData=useCallback(
        ()=>{
            setdata([...data, "added item"]);
        },[data]
    )
  
  return (
    < Grid container style={{justifyContent:"center",flexDirection:"column",alignItems:"center"}}>
    <Typography 
        style={{ textAlign: "center", fontSize: "20px", fontWeight: "700" ,marginTop:"50px"}}
    
    >UseCallback</Typography>
    <Todo data={data} updateData={updateData}  />
    <Typography style={{marginTop:"10px"}}>
        {count}
    </Typography>
    <Button variant="contained" onClick={()=>setCount(count+1)} style={{marginTop:"10px"}}>
        increase
    </Button>
    <Button variant="contained" onClick={()=>setCount(count-1)} style={{marginTop:"10px"}}>
        decrease
    </Button>
    </Grid>
  )
}

export default UseCallback