import React from "react";
import Header from "../../common/Header";

const Applayout = () => (WrappedComponent) => {
  return (props) => {
    return (
      <div>
        <Header />
        <div
          className="w-full h-[calc(100vh-4rem)] bg-slate-300 grid gap-4 
                grid-cols-1 md:grid-cols-2 lg:grid-cols-12"
        >
          {/* <!-- First div: Visible on all screen sizes --> */}
          <div className="col-span-3 border ">1</div>

          {/* <!-- Second div: Visible on tablet screens and larger --> */}
          <div className=" col-span-7 hidden md:block border">2</div>

          {/* <!-- Third div: Visible on large screens and above --> */}
          <div className=" col-span-2 hidden lg:block xl:block border">3</div>
        </div>

        <WrappedComponent {...props} />
      </div>
    );
  };
};

export default Applayout;
