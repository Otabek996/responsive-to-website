import React from "react";

import AppRoutes from "../Routes/Routes";
import Header from "../Header/Header"
import Footer from "../Footer/Footer"
import Sidebar from "../Sidebar/Sidebar"

const App = () => {
  return (
    <div className="app">
      <div className="app__container">
        <sidebar className="sidebar">
          <Sidebar />
        </sidebar>

        <main className="main">
          <Header />
          <AppRoutes />
          <Footer />
        </main>  
      </div>
    </div>
  )
};

export default App;