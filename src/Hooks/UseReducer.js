import { Button, Grid, Typography } from "@mui/material";
import React, { useReducer } from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";

const UseReducer = () => {
  const initialstate = {
    like: false,
    count: 0,
  };
  const reducer = (state, action) => {
    switch (action.type) {
      case "INCREAMENT":
        return { ...state, count: state.count + 1 };
      case "DECREAMENT":
        return { ...state, count: state.count - 1 };
      case "LIKE":
        return { ...state, like: true };
      case "UNLIKE":
        return { ...state, like: false };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialstate);
  return (
    <Grid
      style={{
        display: "flex",
        marginTop: "30px",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Typography style={{ fontSize: "20px", fontWeight: 700 }}>
        UseReducer
      </Typography>
      <Typography style={{ fontSize: "20px", marginTop: "30px" }}>
        LIKE
      </Typography>
      <Button
        onClick={() => {
          state.like == false
            ? dispatch({ type: "LIKE" })
            : dispatch({ type: "UNLIKE" });
        }}
      >
        {state.like == false ? <FavoriteBorderIcon style={{height:"2rem !important"}}/> : <FavoriteIcon />}
      </Button>
      <Typography style={{ fontSize: "20px", marginTop: "30px" }}>
        Count : {state.count}
      </Typography>
      <Button
        style={{ marginTop: "30px" }}
        variant="contained"
        onClick={() => {
          dispatch({ type: "INCREAMENT" });
        }}
      >
        +
      </Button>
      <Button
        style={{ marginTop: "30px" }}
        variant="contained"
        onClick={() => {
          dispatch({ type: "DECREAMENT" });
        }}
      >
        -
      </Button>
    </Grid>
  );
};

export default UseReducer;
