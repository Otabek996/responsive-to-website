import React from "react";

import AppRoutes from "../Routes/Routes";
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";

const App = () => {
  return (
    <div className="app">
      <div className="app__container">
        <Sidebar />

        <main className="main">
          <Header />
          <AppRoutes />
        </main>  
      </div>
    </div>
  )
};

export default App;