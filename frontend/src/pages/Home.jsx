import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
// import { NavLink, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Part from "../components/Part";

const Home = () => {
  
  return (
    <div>
      <Navbar />
      <Header />
      {/* <Banner /> */}
      <Part />
      <Footer />
    </div>
  );
};

export default Home;