import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/Home";
import Search from "./pages/Search";
import Records from "./pages/Records";
import Navbar from "./layout/Navbar";

const AllRoutes = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/search" element={<Search />} />
        <Route path="/records" element={<Records />} />
      </Routes>
    </>
  );
};

export default AllRoutes;
