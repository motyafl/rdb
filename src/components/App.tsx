import React from "react";
import { Route, Routes } from "react-router";

import Layout from '../Layout.tsx';
import "../styles/preface.min.css";

import HomePage from "../pages/HomePage"
import AboutPage from "../pages/AboutPage"
import DashLayout from "../pages/DashLayout"

function App() {
    return (
      <Routes>
      <Route element={<Layout/>}>
            <Route index element={ <HomePage/> } />
            <Route path='/about' element={ <AboutPage/> } />
            <Route path='*' element={<h2>404</h2>} />
      </Route>

      <Route path='/dash' element={ <DashLayout/> } >
            <Route index element={ <HomePage/> } />
      </Route>
      </Routes>
    )
};

export default App;
