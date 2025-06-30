import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Blog from "./Pages/Blog";
import Services from "./Pages/Services";
import Contect from "./Pages/Contect";
import Appointment from "./Pages/Appointment";
import Servicedetail from "./Pages/Servicedetail";
import Aboutdetail from "./Pages/Aboutdetail";
import Blogdetail from "./Pages/Blogdetail";
import Homedetail from "./Pages/Homedetail";
import AppointmentTable from "./Pages/AppointmentTable";
import "./App.css";
import CustomCursor from "./Component/CustomCursor";
import PackageDetail from "./Pages/PackageDetail"
const Loader = () => (
  <div className="loader-wrapper">
    <div className="loader"></div>
  </div>
);


const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
 <CustomCursor />

      {loading ? (
        <Loader />
      ) : (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="blog" element={<Blog />} />
          <Route path="services" element={<Services />} />
          <Route path="contect" element={<Contect />} />
          <Route path="appointment" element={<Appointment />} />
          <Route path="services/:id" element={<Servicedetail />} />
          <Route path="aboutdetail" element={<Aboutdetail />} />
          <Route path="/Blogdetail/:id" element={<Blogdetail />} />
          <Route path="Homedetail" element={<Homedetail/>}/>
          <Route path="/pricing/:slug" element={<PackageDetail/>}/>
          <Route path="/appointments" element={<AppointmentTable />} />

        </Routes>
      )}
    </>
  );
};
export default App;

