import React from "react";
import { Route, Routes } from "react-router-dom";
import EditContacts from "./components/EditContacts";
import HomePage from "./pages/HomePage";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/edit/:id" element={<EditContacts />} />
    </Routes>
  );
};

export default MainRoutes;
