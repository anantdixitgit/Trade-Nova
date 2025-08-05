import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";

function Pricing() {
  return (
    <div className="container p-0 px-3 px-sm-0">
      <div className=" p-3 row align-items-center">
        <div className="col-12 col-md-5 col-lg-4 mb-4 mb-md-0">
          <h1 className="mb-3 fs-2">Unbeatable pricing</h1>
          <p>
            We pioneered the concept of discount broking and price transparency
            in India. Flat fees and no hidden charges.
          </p>
          <a href="google.com" style={{ textDecoration: "none" }}>
            See Pricing <FaLongArrowAltRight />
            <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
          </a>
        </div>

        <div className="col-md-1 d-none d-md-block"></div>

        <div className=" p-5 col-12 col-md-6 col-lg-6">
          <div className="row">
            <div className="col p-3 border">
              <h1 className="mb-3">₹0</h1>
              <p>
                Free equity delivery and
                <br className="d-none d-sm-block" />
                direct mutual funds
              </p>
            </div>
            <div className="col p-3 border">
              <h1 className="mb-3">₹20</h1>
              <p>Intraday and F&O</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
