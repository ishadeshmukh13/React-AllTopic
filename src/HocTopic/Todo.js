import React from "react";
import HocComponent from "./HocComponent";

const Todo = ({ filterData }) => {
  const TodoList = filterData.map((item) => {
    return <p key={item.id}>{item.title}</p>;
  });
  return <div>{TodoList}</div>;
};

const SearchTodo = HocComponent({ entity: "todos", Cmp: Todo });
export default SearchTodo;
