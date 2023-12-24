import React, { forwardRef, useImperativeHandle } from "react";

const ChildComponent = (props, ref) => {
  useImperativeHandle(ref, () => {
    return {
      sayHello,
    };
  });
  const sayHello = () => {
    console.log( "Hello, UseImprativeHandle hook ");
  };
  return <div style={{ fontSize: "20px", fontWeight: 700 }}>ChildComponent</div>;
};

export default forwardRef(ChildComponent);
