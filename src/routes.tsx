import { Navigate } from "react-router-dom";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Courses from "./Pages/Courses";
import Home from "./Pages/Home";
import Register from "./Pages/Register";
import UXResearch from "./Pages/CoursesPages/UXResearch";
import UXDesignCourse from "./Pages/CoursesPages/UXDesignCourse";
import UIUXDesignCourse from "./Pages/CoursesPages/UIUXDesignCourse";
import UIDesignCourse from "./Pages/CoursesPages/UIDesignCourse";
import IDCourse from "./Pages/CoursesPages/IDCourse";
import DTCourse from "./Pages/CoursesPages/DTCourse";

export default [
  {
    path: "/",
    element: <Home />,
    name: "Home",
  },
  {
    path: "/about",
    element: <About />,
    name: "About",
  },
  {
    path: "/contact",
    element: <Contact />,
    name: "Contact",
  },

  {
    path: "/courses",
    element: <Courses />,
    name: "Courses",
  },
  {
    path: "/register",
    element: <Register />,
    name: "Register",
  },
  {
    path: "/dtcourse",
    element: <DTCourse />,
    name: "DTCourse",
  },
  {
    path: "/idcourse",
    element: <IDCourse />,
    name: "IDCourse",
  },
  {
    path: "/uidesigncourse",
    element: <UIDesignCourse />,
    name: "UIDesignCourse",
  },
  {
    path: "/uiuxdesigncourse",
    element: <UIUXDesignCourse />,
    name: "UIUXDesignCourse",
  },
  {
    path: "/uxdesigncourse",
    element: <UXDesignCourse />,
    name: "UXDesignCourse",
  },
  {
    path: "/usresearch",
    element: <UXResearch />,
    name: "UXResearch",
  },

  {
    path: "*",
    element: <Navigate to={"/"} replace />,
    name: "Notfound",
  },
];
