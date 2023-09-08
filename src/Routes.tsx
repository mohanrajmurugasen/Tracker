import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Comments from "./pages/comments";

const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Comments" element={<Comments />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Routing;
