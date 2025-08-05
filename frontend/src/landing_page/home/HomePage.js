import React from "react";
import Hero from "./Hero";
import Awards from "./Award";
import Stats from "./Stats";
import Pricing from "./Pricing";
import Education from "./Education";
import { FaUserCircle } from "react-icons/fa";

import OpenAccount from "../OpenAccount";
import Navbar from "../Navbar.js";
import Footer from "../Footer";
import "bootstrap/dist/css/bootstrap.min.css";

function HomePage() {
  return (
    <>
      <Hero></Hero>
      <Awards></Awards>
      <Stats></Stats>
      <Pricing></Pricing>
      <Education></Education>
      <OpenAccount></OpenAccount>
    </>
  );
}

export default HomePage;
