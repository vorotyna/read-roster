import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./home/Home";
import Navbar from "./navbar/Navbar";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
