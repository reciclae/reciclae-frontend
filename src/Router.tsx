import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Outlet, useLocation } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import "./transition.css"; 

import {
  Signup,
  Login,
  About,
  EditPoint,
  EditUser,
  DeleteUser,
  CreatePoint,
  DeletePoint,
  SelectPoint,
  UserProfile
} from "./pages";
import { HomePage } from "./pages/HomePage";
import { Map } from "./pages/Map/index";

const AnimatedRoutes: React.FC = () => {
  const location = useLocation();

  return (
    <TransitionGroup>
      <CSSTransition key={location.key} classNames="fade" timeout={300}>
        <Routes location={location}>
          <Route path="/" element={<HomePage />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/user" element={<UserProfile />} />
          <Route path="/user/edit" element={<EditUser />} />
          <Route path="/user/delete/:id" element={<DeleteUser />} />
          <Route path="/map" element={<Map />} />
          <Route path="/point/create/:latitude/:longitude" element={<CreatePoint />} />
          <Route path="/point/select/:id" element={<SelectPoint />} />
          <Route path="/point/edit/:id" element={<EditPoint />} />
          <Route path="/point/delete/:id" element={<DeletePoint />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </CSSTransition>
    </TransitionGroup>
  );
};

export function Router() {
  return (
    <BrowserRouter>
      <AnimatedRoutes />
    </BrowserRouter>
  );
}