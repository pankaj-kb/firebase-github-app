/* eslint-disable no-unused-vars */
import "./App.css";
import React from "react";
import { useState } from "react";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import PageNotFound from "./pages/PageNotFound";

import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";

import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.min.css";

import firebase from "firebase/compat/app";

import "firebase/auth";

import { UserContext } from "./context/UserContext";
import Header from "./layout/Header";
import Footer from "./layout/Footer";

const App = () => {
  const [user, setUser] = useState(null);

  return (
    <Router>
      <ToastContainer />
      <UserContext.Provider value={{ user, setUser }}>
      <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <Footer />
      </UserContext.Provider>
    </Router>
  );
};

export default App;
