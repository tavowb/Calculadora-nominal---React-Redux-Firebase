import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import AppScreen from "../pages/AppScreen";

const AppRouter = ({ name }) => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route end path="/app" element={<AppScreen data={name} />} />
        <Route path="*" element={<Navigate to="/app" />} />
      </Routes>
    </>
  );
};

export default AppRouter;
