// import React from "react";

import EnrolFC from "../../assets/Components/Courses/FrontendCourse/EnrolFC";
import GainFC from "../../assets/Components/Courses/FrontendCourse/GainFC";
import HeroFC from "../../assets/Components/Courses/FrontendCourse/HeroFC";
import JourneyFC from "../../assets/Components/Courses/FrontendCourse/JourneyFC";
import Footer from "../../assets/Components/NewTabs/Footer";
import NavBar from "../../assets/Components/NewTabs/NavBar";
import Testimonials from "../../assets/Components/NewTabs/Testimonials";
import WhatsApp from "../../assets/Components/NewTabs/WhatsApp";

const FrontendDev = () => {
  return (
    <div>
      <NavBar />
      <HeroFC />
      <JourneyFC />
      <EnrolFC />
      <GainFC />
      <Testimonials />
      <WhatsApp />
      <Footer />
    </div>
  );
};

export default FrontendDev;
