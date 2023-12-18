import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

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

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/user" element={<UserProfile />} />
        <Route path="/user/edit" element={<EditUser/>} />
        <Route path="/user/delete/:id" element={<DeleteUser />} />
        <Route path="/map" element={<Map/>} />
        <Route path="/point/create/:latitude/:longitude" element={<CreatePoint/>} />
         <Route path="/point/select" element={<SelectPoint />} />
        <Route path="/point/edit/:id" element={<EditPoint />} />
        <Route path="/point/delete/:id" element={<DeletePoint />} />

        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  )
}
