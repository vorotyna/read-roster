import React, { useContext } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import { UserContext } from "./contexts/userContext";

function App() {
  const { token } = useContext(UserContext);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              !token || token === null || token === "null" ? (
                <Login />
              ) : (
                <Navigate to="/home" />
              )
            }
          />
          <Route
            path="/home"
            element={
              !token || token === "null" ? <Navigate to="/" /> : <Home />
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
