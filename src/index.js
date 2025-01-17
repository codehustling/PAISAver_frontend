
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

import "assets/css/nucleo-icons.css";
import "assets/scss/blk-design-system-react.scss";
import "assets/demo/demo.css";

import Index from "views/Index.js";
import LandingPage from "views/examples/LandingPage.js";
import RegisterPage from "views/examples/RegisterPage.js";
import ProfilePage from "views/examples/ProfilePage.js";

/* modifications */
import Home from "custom/Home.js";
import Signup from "custom/Signup";
import Main from "custom/Main"
import Testing from "custom/Testing";
import Results from "custom/Results";
import ProfilePageNew from "custom/examples/ProfilePage"
import { CookiesProvider } from "react-cookie";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <CookiesProvider>
      <Routes>
        <Route path ="/home" element ={<Home />} />
        <Route path ="/signup" element ={<Signup />} />
        <Route path ="/main" element ={<Main />} />
        <Route path="/results" element={<Results />} />
        <Route path ="/testing" element ={<Testing />} />
        <Route path="/components" element={<Index />} />
        <Route path="/landing-page" element={<LandingPage />} />
        <Route path="/register-page" element={<RegisterPage />} />
        <Route path="/profile-page" element={<ProfilePage />} />
        <Route path="/profile_new" element={<ProfilePageNew />} />

        <Route path="*" element={<Navigate to="/components" replace />} />
      </Routes>
    </CookiesProvider>
  </BrowserRouter>
);
