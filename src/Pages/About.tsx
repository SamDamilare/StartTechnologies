// import React from "react";
import NavBar from "../assets/Components/NewTabs/NavBar";
import AboutHeroes from "../assets/Components/About/AboutHeroes";
import AboutWhoWeAre from "../assets/Components/About/AboutWhoWeAre";
import AboutMission from "../assets/Components/About/AboutMission";
import Footer from "../assets/Components/NewTabs/Footer";
import Testimonials from "../assets/Components/NewTabs/Testimonials";
import WhatsApp from "../assets/Components/NewTabs/WhatsApp";

const About = () => {
  return (
    <div>
      <NavBar />
      <AboutHeroes />
      <AboutWhoWeAre />
      <AboutMission />
      <Testimonials />
      <WhatsApp />
      <Footer />
    </div>
  );
};

export default About;
