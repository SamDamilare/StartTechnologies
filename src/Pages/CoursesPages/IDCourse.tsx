// import React from "react";
import NavBar from "../../assets/Components/NewTabs/NavBar";
import IDCourseHeroes from "../../assets/Components/Courses/IDCourse/IDCourseHeroes";
import IDCourseJourney from "../../assets/Components/Courses/IDCourse/IDCourseJourney";
import IDCourseEnroll from "../../assets/Components/Courses/IDCourse/IDCourseEnroll";
import IDCourseGain from "../../assets/Components/Courses/IDCourse/IDCourseGain";
import Footer from "../../assets/Components/NewTabs/Footer";
import Testimonials from "../../assets/Components/NewTabs/Testimonials";
import Syllabus from "../../assets/Components/NewTabs/Syllabus";

const IDCourse = () => {
  return (
    <div>
      <NavBar />
      <IDCourseHeroes />
      <IDCourseJourney />
      <IDCourseEnroll />
      <IDCourseGain />
      <Syllabus />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default IDCourse;
