import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function OpenAccount() {
  return (
    <div className="container  p-5 mb-5">
      <div className="row text-center">
        <h1>Open the Trade Nova account</h1>
        <p className="fw-light">
          Mordern platform and apps ,₹0 intrest and ₹20 intraday & F&O trades .
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

export default OpenAccount;
