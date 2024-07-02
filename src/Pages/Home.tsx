import React from "react";
import NavBar from "../assets/Components/NewTabs/NavBar";
import HeroSection from "../assets/Components/Home/HeroSection";
import CoursesCards from "../assets/Components/Home/CoursesCards";
import VirtualClasses from "../assets/Components/Home/VirtualClasses";
import Events from "../assets/Components/Home/Events";
import Footer from "../assets/Components/NewTabs/Footer";
import Testimonials from "../assets/Components/NewTabs/Testimonials";

const Home = () => {
  return (
    <div>
      <NavBar />
      <HeroSection />
      <CoursesCards />
      <VirtualClasses />
      <Events />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Home;
