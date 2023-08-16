import About from "../pages/about/About";
import Contacts from "../pages/contacts/Contacts";
import Home from "../pages/home/Home";
import Portfolio from "../pages/portfolio/Portfolio";
import { FaHome, FaUser, FaEnvelopeOpen } from "react-icons/fa";
import { BsFillCameraReelsFill } from "react-icons/bs";

export const routesList = [
  {
    id: 1,
    name: "Начало",
    path: "/",
    component: Home,
    icon: <FaHome className="nav__icon" />,
  },

  {
    id: 2,
    name: "Информация",
    path: "/about",
    component: About,
    icon: <FaUser className="nav__icon" />,
  },

  {
    id: 3,
    name: "Портфолио",
    path: "/portfolio",
    component: Portfolio,
    icon: <BsFillCameraReelsFill className="nav__icon" />,
  },

  {
    id: 4,
    name: "Контакты",
    path: "/contacts",
    component: Contacts,
    icon: <FaEnvelopeOpen className="nav__icon" />,
  },
];
