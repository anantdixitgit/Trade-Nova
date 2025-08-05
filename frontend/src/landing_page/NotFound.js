import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function NotFound() {
  return (
    <div className="container  p-5 mb-5">
      <div className="row text-center">
        <h1>Error 404:Not Found</h1>
        <p className="fw-light">The page you are looking for doesnot exist</p>
      </div>
    </div>
  );
}

export default NotFound;
