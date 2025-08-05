import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";

function Stats() {
  return (
    <div className="container p-5 p-md-5">
      <div className="row p-2 p-md-5">
        {/* Text Content Column */}
        <div className="col-12 col-md-6 p-3 p-md-5 order-2 order-md-1">
          <h1 className="fs-2 mb-4 mb-md-5">Trust with confidence</h1>

          <div className="mb-4">
            <h2 className="fs-4">Customer-first always</h2>
            <p className="text-muted">
              That's why 1.3+ crore customers trust Trade Nova with ₹3.5+ lakh
              crores worth of equity investments.
            </p>
          </div>

          <div className="mb-4">
            <h2 className="fs-4">No spam or gimmicks</h2>
            <p className="text-muted">
              No gimmicks, spam, "gamification", or annoying push notifications.
              High quality apps that you use at your pace, the way you like.
            </p>
          </div>

          <div className="mb-4">
            <h2 className="fs-4">The Trade Nova universe</h2>
            <p className="text-muted">
              Not just an app, but a whole ecosystem. Our investments in 30+
              fintech startups offer you tailored services specific to your
              needs.
            </p>
          </div>

          <div className="mb-4">
            <h2 className="fs-4">Do better with money</h2>
            <p className="text-muted">
              With initiatives like Nudge and Kill Switch, we don't just
              facilitate transactions, but actively help you do better with your
              money.
            </p>
          </div>
        </div>

        {/* Image Column */}
        <div className="col-12 col-md-6 p-3 p-md-5 order-1 order-md-2">
          <img
            alt="ecosystem"
            src="media/ecosystem.png"
            className="img-fluid mx-auto d-block"
            style={{ maxWidth: "90%" }}
          />
          <div className="text-center mt-4">
            <div className="d-flex flex-column flex-md-row justify-content-center">
              <a
                href="google.com"
                className="mx-md-5 mb-3 mb-md-0"
                style={{ textDecoration: "none" }}
              >
                Explore our products <FaLongArrowAltRight />
              </a>
              <a href="google.com" style={{ textDecoration: "none" }}>
                Try Kite demo <FaLongArrowAltRight />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stats;
