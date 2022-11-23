import React, { useState } from 'react';
import { Navigate, useRoutes } from "react-router-dom";
import Home from '../pages/home';
import Login from '../pages/Login';
import { useAppSelector } from '../store';


export const ROUTERS = {
  Home: '/',
  Login: '/login',
}

function Router() {
  const isLogin = useAppSelector((state: any) => state.authentication.isLogin);
  return useRoutes([
    { path: ROUTERS.Home, element: isLogin ? < Home /> : <Navigate to='/login' /> },
    { path: ROUTERS.Login, element: isLogin ? <Navigate to='/' /> : < Login /> },
  ])
}

export default Router;