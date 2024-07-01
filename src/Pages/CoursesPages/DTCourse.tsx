import React from "react";
import NavBar from "../../assets/Components/NewTabs/NavBar";
import DTCourseHeroes from "../../assets/Components/Courses/DTCourse/DTCourseHeroes";
import DTJourney from "../../assets/Components/Courses/DTCourse/DTJourney";
import Footer from "../../assets/Components/NewTabs/Footer";
import DTEnroll from "../../assets/Components/Courses/DTCourse/DTEnroll";
import DTGain from "../../assets/Components/Courses/DTCourse/DTGain";

const DTCourse = () => {
  return (
    <div>
      <NavBar />
      <DTCourseHeroes />
      <DTJourney />
      <DTEnroll />
      <DTGain />
      <Footer />
    </div>
  );
};

export default DTCourse;
