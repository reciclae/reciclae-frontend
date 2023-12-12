import { BrowserRouter, Routes, Route } from "react-router-dom";

import {
  Signup,
  About,
  EditPoint,
  EditUser,
  DeleteUser,
  CreatePoint,
  DeletePoint,
} from "./pages";
import { HomePage } from "./pages/HomePage";

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<h1>Login</h1>} />
        <Route path="/user" element={<h1>User</h1>} />
        <Route path="/user/edit" element={<EditUser />} />
        <Route path="/user/delete" element={<DeleteUser />} />
        <Route path="/map" element={<h1>Map</h1>} />
        <Route path="/point/create" element={<CreatePoint />} />
        <Route path="/point/edit" element={<EditPoint />} />
        <Route path="/point/delete" element={<DeletePoint />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  )
}
