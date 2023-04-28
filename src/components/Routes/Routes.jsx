import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Home from "../Home/Home";

import { ROUTES } from "../../utils/routes";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path={ROUTES.HOME} element={<Home/>} />
    </Routes>
  )
};

export default AppRoutes;