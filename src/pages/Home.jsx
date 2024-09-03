import React from 'react'
import { useSelector } from "react-redux";
import Header from "../components/common/Header";
import Applayout from "../components/core/layout/Applayout";

const Home = () => {
  const { user } = useSelector((state) => state.auth);

  return <div className="w-full h-full"></div>;
};

export default Applayout()(Home);
