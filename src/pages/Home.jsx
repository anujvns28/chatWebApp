import React from 'react'
import { useSelector } from "react-redux";

const Home = () => {
  const { token } = useSelector((state) => state.auth);

  console.log(token);
  return <div>home</div>;
};

export default Home
