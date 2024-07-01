import React from "react";
import NavBar from "../../assets/Components/NewTabs/NavBar";
import UIDCourseHeroes from "../../assets/Components/Courses/UIDCourse/UIDCourseHeroes";
import UIDCourseJourney from "../../assets/Components/Courses/UIDCourse/UIDCourseJourney";
import UIDCourseEnroll from "../../assets/Components/Courses/UIDCourse/UIDCourseEnroll";
import UIDCourseGain from "../../assets/Components/Courses/UIDCourse/UIDCourseGain";
import Footer from "../../assets/Components/NewTabs/Footer";

const UIDesignCourse = () => {
  return (
    <div>
      <NavBar />
      <UIDCourseHeroes />
      <UIDCourseJourney />
      <UIDCourseEnroll />
      <UIDCourseGain />
      <Footer />
    </div>
  );
};

export default UIDesignCourse;
