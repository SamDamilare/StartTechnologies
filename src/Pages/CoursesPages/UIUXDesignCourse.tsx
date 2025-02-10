// import React from "react";
import NavBar from "../../assets/Components/NewTabs/NavBar";
import UIUXDCourseHeroes from "../../assets/Components/Courses/UIUXDCourse/UIUXDCourseHeroes";
import UIUXCourseJourney from "../../assets/Components/Courses/UIUXDCourse/UIUXCourseJourney";
import UIUXDCourseEnroll from "../../assets/Components/Courses/UIUXDCourse/UIUXDCourseEnroll";
import UIUXDCourseGain from "../../assets/Components/Courses/UIUXDCourse/UIUXDCourseGain";
import Footer from "../../assets/Components/NewTabs/Footer";
import Testimonials from "../../assets/Components/NewTabs/Testimonials";
import Syllabus from "../../assets/Components/NewTabs/Syllabus";

const UIUXDesignCourse = () => {
  return (
    <div>
      <NavBar />
      <UIUXDCourseHeroes />
      <UIUXCourseJourney />
      <UIUXDCourseEnroll />
      <UIUXDCourseGain />
      <Syllabus imgUrl="https://res.cloudinary.com/dktrwqio1/image/upload/v1730470982/SSD/UI_UX_Design_Course_1_z1ygmy.png" />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default UIUXDesignCourse;
