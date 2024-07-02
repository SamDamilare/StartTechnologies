import React from "react";
import NavBar from "../../assets/Components/NewTabs/NavBar";
import UXResearchHeroes from "../../assets/Components/Courses/UXResearch/UXResearchHeroes";
import UXResearchJourney from "../../assets/Components/Courses/UXResearch/UXResearchJourney";
import UXResearchEnroll from "../../assets/Components/Courses/UXResearch/UXResearchEnroll";
import UXResearchGain from "../../assets/Components/Courses/UXResearch/UXResearchGain";
import Footer from "../../assets/Components/NewTabs/Footer";

const UXResearch = () => {
  return (
    <div>
      <NavBar />
      <UXResearchHeroes />
      <UXResearchJourney />
      <UXResearchEnroll />
      <UXResearchGain />
      <Footer />
    </div>
  );
};

export default UXResearch;
