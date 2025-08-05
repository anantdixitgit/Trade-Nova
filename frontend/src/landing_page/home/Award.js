import React from "react";

function Awards() {
  return (
    <div className="container p-5 mt-3 mt-md-5 mb-3 mb-md-5">
      <div className="row align-items-center">
        {/* Image Column - will appear first on mobile */}
        <div className="col-12 col-md-6 order-1 order-md-1 mb-4 mb-md-0">
          <img
            src="/media/largestBroker.svg"
            className="img-fluid w-100"
            alt="Largest stock broker in India"
          />
        </div>

        <div className="col-12 col-md-6 order-2 order-md-2 mt-0 mt-md-4">
          <h1 className="mb-2 mb-md-3 fs-2">Largest Stock broker in India</h1>
          <p className="mb-4 mb-md-5">
            2+million TradeNova clients contribute to over 15% of all retail
            order volumes in India daily by trading and investing in:
          </p>

          <div className="row">
            <div className="col-6">
              <ul className="list-unstyled">
                <li className="mb-2 mb-md-3">✓ Future and Options</li>
                <li className="mb-2 mb-md-3">✓ Commodity derivatives</li>
                <li className="mb-2 mb-md-3">✓ Currency derivatives</li>
              </ul>
            </div>
            <div className="col-6">
              <ul className="list-unstyled">
                <li className="mb-2 mb-md-3">✓ Stocks & IPOs</li>
                <li className="mb-2 mb-md-3">✓ Direct mutual funds</li>
                <li className="mb-2 mb-md-3">
                  ✓ Bonds and Government Security
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-3 mt-md-4">
            <img
              src="/media/pressLogos.png"
              className="img-fluid d-block mx-auto"
              style={{ maxWidth: "90%" }}
              alt="Press coverage logos"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Awards;
