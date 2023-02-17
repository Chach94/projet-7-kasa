import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./base.css";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Error from "./pages/error/Error";
import Lodging from "./pages/lodging/Lodging";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/about" element={<About />}></Route>
      <Route path="/lodging" element={<Lodging />}></Route>
      <Route path="*" element={<Error />}></Route>
    </Routes>
  </BrowserRouter>
);
