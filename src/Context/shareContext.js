import { useState } from "react";
import AppContext from "./createcontext";
const ShareContext = (props) => {
  const [state, setData] = useState({
    name: "isha",
    branch: "cs1",
  });
  const updateData = (data) => {
    setData(data);
  };
  return (
    <AppContext.Provider value={{ state, updateData }}>
      {props.children}
    </AppContext.Provider>
  );
};
export default ShareContext;
