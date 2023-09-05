import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { ROUTES } from "../../utils/routes";

import Home from "../Home/Home";
import Works from "../Works/Works";
import Resume from "../Resume/Resume";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path={ROUTES.HOME} element={<Home />} />
      <Route path={ROUTES.WORKS} element={<Works />} />
      <Route path={ROUTES.RESUME} element={<Resume />} />
    </Routes>
  )
};

export default AppRoutes;