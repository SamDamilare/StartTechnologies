import React from "react";
import NavBar from "../../assets/Components/NewTabs/NavBar";
import UXDCourseHeroes from "../../assets/Components/Courses/UXDCourse/UXDCourseHeroes";
import UXDCourseJourney from "../../assets/Components/Courses/UXDCourse/UXDCourseJourney";
import UXDCourseEnroll from "../../assets/Components/Courses/UXDCourse/UXDCourseEnroll";
import UXDCourseGain from "../../assets/Components/Courses/UXDCourse/UXDCourseGain";
import Footer from "../../assets/Components/NewTabs/Footer";

const UXDesignCourse = () => {
  return (
    <div>
      <NavBar />
      <UXDCourseHeroes />
      <UXDCourseJourney />
      <UXDCourseEnroll />
      <UXDCourseGain />
      <Footer />
    </div>
  );
};

export default UXDesignCourse;
