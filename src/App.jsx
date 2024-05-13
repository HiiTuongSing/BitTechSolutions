import React from "react";
import { Routes, Route } from "react-router-dom";

import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import About from "./pages/About";
import Pricing from "./pages/Pricing";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/BitTechSolutions/" element={<Home />}></Route>
        <Route path="/BitTechSolutions/about" element={<About />}></Route>
        <Route path="/BitTechSolutions/pricing" element={<Pricing />}></Route>
      </Routes>
      <Footer />
    </>
  );
}
