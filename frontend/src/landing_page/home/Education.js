import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";

function Education() {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-6">
          <img src="media/education.svg" style={{ width: "70%" }} />
        </div>
        <div className="col-6">
          <h1 className="mb-3 fs-2">Free and open market education</h1>
          <p>
            Varsity, the largest online stock market education book in the world
            covering everything from the basics to advanced trading.
          </p>
          <a href="google.com" style={{ textDecoration: "none" }}>
            Versity <FaLongArrowAltRight />
          </a>
          <p className="mt-5">
            TradingQ&A, the most active trading and investment community in
            India for all your market related queries.
          </p>
          <a href="" style={{ textDecoration: "none" }}>
            TradingQ&A <FaLongArrowAltRight />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Education;
