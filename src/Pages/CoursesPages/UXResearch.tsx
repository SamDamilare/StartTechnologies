// import React from "react";
import NavBar from "../../assets/Components/NewTabs/NavBar";
import UXResearchHeroes from "../../assets/Components/Courses/UXResearch/UXResearchHeroes";
import UXResearchJourney from "../../assets/Components/Courses/UXResearch/UXResearchJourney";
import UXResearchEnroll from "../../assets/Components/Courses/UXResearch/UXResearchEnroll";
import UXResearchGain from "../../assets/Components/Courses/UXResearch/UXResearchGain";
import Footer from "../../assets/Components/NewTabs/Footer";
import Syllabus from "../../assets/Components/NewTabs/Syllabus";
import Testimonials from "../../assets/Components/NewTabs/Testimonials";
import WhatsApp from "../../assets/Components/NewTabs/WhatsApp";

const UXResearch = () => {
  return (
    <div>
      <NavBar />
      <UXResearchHeroes />
      <UXResearchJourney />
      <UXResearchEnroll />
      <UXResearchGain />
      <Syllabus imgUrl="https://res.cloudinary.com/dktrwqio1/image/upload/v1730470986/SSD/UX_Research_1_ndorb5.png" />
      <Testimonials />
      <WhatsApp />
      <Footer />
    </div>
  );
};

export default UXResearch;
