import React from "react";
import { getItem, KEY_ACCESS_TOKEN } from "../utils/localStrogageManager";
import { Navigate, Outlet } from "react-router-dom";
import Login from "../pages/login/Login";

function RequireUser() {
  const user = getItem(KEY_ACCESS_TOKEN);
  return user ? <Outlet /> : <Navigate to="/login" />;
}

export default RequireUser;
