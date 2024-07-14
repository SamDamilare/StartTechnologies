import React from "react";
import NavBar from "../assets/Components/NewTabs/NavBar";
import ContactHeroes from "../assets/Components/Contact Us/ContactHeroes";
import ContactForm from "../assets/Components/Contact Us/ContactForm";
import Footer from "../assets/Components/NewTabs/Footer";
import Testimonials from "../assets/Components/NewTabs/Testimonials";

const Contact = () => {
  return (
    <div>
      <NavBar />
      <ContactHeroes />
      <ContactForm />
      {/* <Testimonials /> */}
      <Footer />
    </div>
  );
};

export default Contact;
