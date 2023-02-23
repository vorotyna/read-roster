import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
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
