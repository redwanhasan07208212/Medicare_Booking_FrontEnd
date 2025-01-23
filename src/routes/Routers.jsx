import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import { Doctors } from "../pages/Doctor/Doctors";
import { DoctorDetails } from "../pages/Doctor/DoctorDetails";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import Contact from "../pages/Contact";
import Service from "../pages/Service";
function Routers() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/doctors" element={<Doctors />} />
      <Route path="/doctors/:id" element={<DoctorDetails />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<SignUp />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/services" element={<Service />} />
    </Routes>
  );
}

export default Routers;
