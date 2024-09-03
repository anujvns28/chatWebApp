import React from "react";
import Header from "../../common/Header";

const Applayout = () => (WrappedComponent) => {
  return (props) => {
    return (
      <div>
        <Header />
        <div className="w-full h-[calc(100vh-4rem)] ">
          <div></div>
          <div></div>
          <div></div>
        </div>
        <WrappedComponent {...props} />
      </div>
    );
  };
};

export default Applayout;
