import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import useToken from "./hooks/useToken";

function App() {
  const { token, setToken } = useToken();

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              !token ? <Login setToken={setToken} /> : <Navigate to="/home" />
            }
          />
          <Route
            path="/home"
            element={
              !token ? (
                <Navigate to="/" />
              ) : (
                <Home token={token} setToken={setToken} />
              )
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
