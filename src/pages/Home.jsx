import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import Header from "../components/common/Header";
import Applayout from "../components/core/layout/Applayout";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const { user } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  // chek user persent or not
  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user]);

  return <div className="w-full h-full bg-slate-300"></div>;
};

export default Applayout()(Home);
