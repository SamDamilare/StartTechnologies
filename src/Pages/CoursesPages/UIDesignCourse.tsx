// import React from "react";
import NavBar from "../../assets/Components/NewTabs/NavBar";
import UIDCourseHeroes from "../../assets/Components/Courses/UIDCourse/UIDCourseHeroes";
import UIDCourseJourney from "../../assets/Components/Courses/UIDCourse/UIDCourseJourney";
import UIDCourseEnroll from "../../assets/Components/Courses/UIDCourse/UIDCourseEnroll";
import UIDCourseGain from "../../assets/Components/Courses/UIDCourse/UIDCourseGain";
import Footer from "../../assets/Components/NewTabs/Footer";
import Testimonials from "../../assets/Components/NewTabs/Testimonials";
import Syllabus from "../../assets/Components/NewTabs/Syllabus";

const UIDesignCourse = () => {
  return (
    <div>
      <NavBar />
      <UIDCourseHeroes />
      <UIDCourseJourney />
      <UIDCourseEnroll />
      <UIDCourseGain />
      <Syllabus imgUrl="https://res.cloudinary.com/dktrwqio1/image/upload/v1730470979/SSD/UI_Design_Course_1_naqekc.png" />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default UIDesignCourse;
