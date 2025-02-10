// import React from "react";
import NavBar from "../assets/Components/NewTabs/NavBar";
import HeroSection from "../assets/Components/Home/HeroSection";
import CoursesCards from "../assets/Components/Home/CoursesCards";
import VirtualClasses from "../assets/Components/Home/VirtualClasses";
import Events from "../assets/Components/Home/Events";
import Footer from "../assets/Components/NewTabs/Footer";
import Internships from "../assets/Components/Home/Internships";
import Testimonials from "../assets/Components/NewTabs/Testimonials";
import WhatsApp from "../assets/Components/NewTabs/WhatsApp";

const Home = () => {
  return (
    <div>
      <NavBar />
      <HeroSection />
      <CoursesCards />
      <VirtualClasses />
      <Internships />
      <Events />
      <Testimonials />
      <WhatsApp />
      <Footer />
    </div>
  );
};

export default Home;
