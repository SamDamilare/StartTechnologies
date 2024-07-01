import React from "react";
import NavBar from "../../assets/Components/NewTabs/NavBar";
import UIUXDCourseHeroes from "../../assets/Components/Courses/UIUXDCourse/UIUXDCourseHeroes";
import UIUXCourseJourney from "../../assets/Components/Courses/UIUXDCourse/UIUXCourseJourney";
import UIUXDCourseEnroll from "../../assets/Components/Courses/UIUXDCourse/UIUXDCourseEnroll";
import UIUXDCourseGain from "../../assets/Components/Courses/UIUXDCourse/UIUXDCourseGain";
import Footer from "../../assets/Components/NewTabs/Footer";

const UIUXDesignCourse = () => {
  return (
    <div>
      <NavBar />
      <UIUXDCourseHeroes />
      <UIUXCourseJourney />
      <UIUXDCourseEnroll />
      <UIUXDCourseGain />
      <Footer />
    </div>
  );
};

export default UIUXDesignCourse;
