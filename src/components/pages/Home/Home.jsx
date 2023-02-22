import React from "react";
import { Outlet } from "react-router-dom";
import AllProduct from "./AllProduct/AllProduct";
import Header from "./Header/Header";
import "./Home.css";

const Home = () => {
  return (
    <>
      <div className="masterkey_home">
        <Header />
        <Outlet />
        <AllProduct />
      </div>
    </>
  );
};

export default Home;
