import React from "react";
import Hero from "./Hero";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaLongArrowAltRight } from "react-icons/fa";

function PricingPage() {
  return (
    <>
      <Hero></Hero>
      <div className="container mt-5 mb-5">
        <div className="d-flex flex-column align-items-center">
          <img
            src="/media/cryptoscreenshot.png"
            className="img-fluid d-block mb-4"
            style={{ maxHeight: "500px" }}
            alt="crypto page"
          />

          <a
            className="fs-5 "
            style={{ textDecoration: "none" }}
            href={"https://cryptotracker-ochre-one.vercel.app"}
          >
            {" "}
            Track Your Crypto <FaLongArrowAltRight />
          </a>
        </div>
      </div>
    </>
  );
}

export default PricingPage;
