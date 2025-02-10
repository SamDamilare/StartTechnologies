import NavBar from "../../assets/Components/NewTabs/NavBar";
import DTCourseHeroes from "../../assets/Components/Courses/DTCourse/DTCourseHeroes";
import DTJourney from "../../assets/Components/Courses/DTCourse/DTJourney";
import Footer from "../../assets/Components/NewTabs/Footer";
import DTEnroll from "../../assets/Components/Courses/DTCourse/DTEnroll";
import DTGain from "../../assets/Components/Courses/DTCourse/DTGain";
import Syllabus from "../../assets/Components/NewTabs/Syllabus";
import Testimonials from "../../assets/Components/NewTabs/Testimonials";

const DTCourse = () => {
  return (
    <div>
      <NavBar />
      <DTCourseHeroes />
      <DTJourney />
      <DTEnroll />
      <DTGain />
      <Syllabus imgUrl="https://res.cloudinary.com/dktrwqio1/image/upload/v1730470976/SSD/Design_Thinking_Course_1_sciu8z.png" />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default DTCourse;
