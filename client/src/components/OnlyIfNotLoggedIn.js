import React from 'react'
import { getItem, KEY_ACCESS_TOKEN } from '../utils/localStrogageManager'
import { Navigate, Outlet } from 'react-router';

function OnlyIfNotLoggedIn() {
    const user = getItem(KEY_ACCESS_TOKEN);
  return (
    user ? <Navigate to="/" /> : <Outlet/>
  )
}

export default OnlyIfNotLoggedIn