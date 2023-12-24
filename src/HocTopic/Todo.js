import React from "react";
import HocComponent from "./HocComponent";

const Todo = ({ filterData }) => {
  const TodoList = filterData.map((item) => {
    return <p key={item.id} style={{fontSize:"22px"}}>{item.title}</p>;
  });
  return <div style={{display:"flex",justifyContent:"center",flexDirection:"column",alignItems:"center"}}>{TodoList}</div>;
};

// Use an object with 'entity' and 'Cmp' properties when using HocComponent
const SearchTodo = HocComponent({ entity: "todos", Cmp: Todo });
export default SearchTodo;
