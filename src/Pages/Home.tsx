import CoursesCards from "../assets/Components/Home/CoursesCards";
import HeroSection from "../assets/Components/Home/HeroSection";
import VirtualClasses from "../assets/Components/Home/VirtualClasses";
import NavBar from "../assets/Components/NewTabs/NavBar";
import Internships from "../assets/Components/Home/Internships";
import Events from "../assets/Components/Home/Events";
import Testimonials from "../assets/Components/NewTabs/Testimonials";
import Footer from "../assets/Components/NewTabs/Footer";
import WhatsApp from "../assets/Components/NewTabs/WhatsApp";

const Home = () => {
  return (
    <div>
      <NavBar />
      <HeroSection />
      <CoursesCards />
      <VirtualClasses />
      <Internships />
      <Events />
      <Testimonials />
      <Footer />
      <WhatsApp />
    </div>
  );
};

export default Home;
