import React from "react";
import { Route, Routes } from "react-router";

import Layout from '../Layout.tsx';
import "../styles/preface.min.css";

function App() {
    return (
      <Routes>
      <Route element={<Layout/>}>
            <Route index element={
                <>
                <h2>HOME</h2>
                </>
            } />
            <Route path='/about' element={<h2>ABOUT</h2>} />
            <Route path='*' element={<h2>404</h2>} />
      </Route>

      <Route path='/dash' element={<h2>DASHBOARD</h2>} />
      </Routes>
    )
};

export default App;
