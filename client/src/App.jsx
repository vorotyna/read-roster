import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Login from "./pages/Login";
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
              !token ? <Login setToken={setToken} /> : <Navigate to="/" />
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
