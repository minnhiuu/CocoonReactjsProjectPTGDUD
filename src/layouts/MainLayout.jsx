import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { Outlet } from "react-router-dom";
import Banner from "../components/Banner/Banner";

export default function MainLayout() {
  return (
    <>
      <Banner />
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}
