import React from "react";
import HocComponent from "./HocComponent";

const Users = ({ filterData }) => {
  const UsersList = filterData.map((item) => {
    return <p style={{fontSize:"22px"}}>{item.name}</p>;
  });
  return <div style={{display:"flex",justifyContent:"center",flexDirection:"column",alignItems:"center"}}>{UsersList}</div>;
};

const SearchUser=HocComponent({ entity: "users", Cmp: Users })
export default SearchUser;
