import React from "react";
import HocComponent from "./HocComponent";

const Users = ({ filterData }) => {
  const UsersList = filterData.map((item) => {
    return <p>{item.name}</p>;
  });
  return <div>{UsersList}</div>;
};

const SearchUser=HocComponent("users",Users)
export default SearchUser;