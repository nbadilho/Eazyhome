import React from "react";
import { Routes, Route } from "react-router-dom";
import { HomePage } from "../pages/Homepage/homepage";
import { Login } from "../pages/login/login";
import { NotFound } from "../pages/notFound/notFound";
import { Register } from "../pages/Register/register";
import { DashboardClient } from "../pages/Dashboard/client/dashboardclient";
import { DashboardService } from "../pages/Dashboard/service/dashboardservice";

export const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/dashboardclient" element={<DashboardClient />} />
      <Route path="/dashboardservice" element={<DashboardService />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
