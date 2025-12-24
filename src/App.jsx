import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/Layout.jsx";
import Landing from "./screens/Landing.jsx";
import Signup from "./screens/Signup.jsx";
import Login from "./screens/Login.jsx";
import Profile from "./screens/Profile.jsx";

const App = () => {
  return (
    <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Navigate to="/landing" replace />} />
            <Route path="/landing" element={<Landing />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </Layout>
    </BrowserRouter>
  );
};

export default App;
