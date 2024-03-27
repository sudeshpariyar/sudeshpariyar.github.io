import React from "react";
import Header from "./header/Header";
import { Outlet } from "react-router-dom";
import Footer from "./footer/Footer";
import "./Layout.css";

const Layout = () => {
  return (
    <main className="layout__wrapper">
      <div className="layout__outlet">
        <Header />
        <Outlet />
      </div>
      <Footer />
    </main>
  );
};

export default Layout;
