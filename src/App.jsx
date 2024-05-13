import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";

export default function App() {
  return (
    <>
      <div className="p-5">
        <h1 className="text-3xl font-bold underline">Hello World</h1>
      </div>
      <Routes>
        <Route path="/BitTechSolutions/" element={<Home />}></Route>
        <Route path="/BitTechSolutions/about" element={<About />}></Route>
      </Routes>
    </>
  );
}
