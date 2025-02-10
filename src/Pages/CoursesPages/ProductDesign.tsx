// import React from "react";

import EnrolPDC from "../../assets/Components/Courses/ProductDesignCourse/EnrollPDC";
import GainPDC from "../../assets/Components/Courses/ProductDesignCourse/GainPDC";
import HeroPDC from "../../assets/Components/Courses/ProductDesignCourse/HeroPDC";
import JourneyPDC from "../../assets/Components/Courses/ProductDesignCourse/JourneyPDC";
import Footer from "../../assets/Components/NewTabs/Footer";
import NavBar from "../../assets/Components/NewTabs/NavBar";
// import Syllabus from "../../assets/Components/NewTabs/Syllabus";
import Testimonials from "../../assets/Components/NewTabs/Testimonials";
import WhatsApp from "../../assets/Components/NewTabs/WhatsApp";

const ProductDesign = () => {
  return (
    <div>
      <NavBar />
      <HeroPDC />
      <JourneyPDC />
      <EnrolPDC />
      <GainPDC />
      {/* <Syllabus /> */}
      <WhatsApp />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default ProductDesign;
