import { Navigate } from "react-router-dom";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Home from "./Pages/Home";
import UXResearch from "./Pages/CoursesPages/UXResearch";
import UXDesignCourse from "./Pages/CoursesPages/UXDesignCourse";
import UIUXDesignCourse from "./Pages/CoursesPages/UIUXDesignCourse";
import UIDesignCourse from "./Pages/CoursesPages/UIDesignCourse";
import IDCourse from "./Pages/CoursesPages/IDCourse";
import DTCourse from "./Pages/CoursesPages/DTCourse";
import ProductDesign from "./Pages/CoursesPages/ProductDesign";
import FrontendDev from "./Pages/CoursesPages/FrontendDev";
import TermsCond from "./assets/Components/NewTabs/TermsCond";
import VelarixPrivacy from "./assets/Components/NewTabs/VelarixPrivacy";
import CookiesPolicy from "./assets/Components/NewTabs/CookiesPolicy";

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
    path: "/uxresearch",
    element: <UXResearch />,
    name: "UXResearch",
  },
  {
    path: "/productdesign",
    element: <ProductDesign />,
    name: "ProductDesign",
  },
  {
    path: "/frontenddev",
    element: <FrontendDev />,
    name: "FrontendDev",
  },
  {
    path: "/TermsCond",
    element: <TermsCond />,
    name: "Terms & Conditions",
  },
  {
    path: "/VelarixPrivacy",
    element: <VelarixPrivacy />,
    name: "VelarixPrivacy",
  },
  {
    path: "/CookiesPolicy",
    element: <CookiesPolicy />,
    name: "CookiesPolicy",
  },
  {
    path: "*",
    element: <Navigate to={"/"} replace />,
    name: "Notfound",
  },
];
