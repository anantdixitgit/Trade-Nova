import React from "react";

function Hero() {
  return (
    <div className="container  p-5 mb-5">
      <h1 className="text-center">Developed By Anant Dixit</h1>
      <div className="row text-center">
        <img
          src="media/homeHero.png"
          className="img-fluid mb-5 mt-5"
          alt="main"
        ></img>

        <h1>Invest in everything</h1>
        <p className="fw-light">
          Online Platform to invest in stocks,derivatives,mutual funds, and more
        </p>
        <button
          style={{ width: "25%", margin: "0 auto" }}
          type="button"
          className="btn btn-primary p-2 fs-5"
        >
          SignUp Now
        </button>
      </div>
    </div>
  );
}

export default Hero;
