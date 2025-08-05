import React, { useState, useEffect, useContext } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthContext";

function Navbar() {
  const navigate = useNavigate();
  const { isLoggedIn } = useContext(AuthContext);

  return (
    <nav
      className="navbar navbar-expand-lg border-bottom"
      style={{ backgroundColor: "#FFF" }}
    >
      <div className="container p-1 ">
        <img
          alt="TradeNova"
          src="media/TradeNova.png"
          style={{ maxWidth: "3%", maxHeight: "3%" }}
        />
        <h3>
          <Link
            style={{
              color: "rgb(82, 16, 138)",
              marginRight: "450px",
              textDecoration: "none",
            }}
            to="/"
          >
            {" "}
            TRADE NOVA
          </Link>
        </h3>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <form className="d-flex" role="search">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/signup"
                >
                  SignUp
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/about">
                  About
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link active" to="/product">
                  Product
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link active" to="/crypto">
                  Track Crypto
                </Link>
              </li>

              {isLoggedIn ? (
                <li className="nav-item ">
                  <a className="nav-link active" href="http://localhost:3000">
                    Dashboard
                  </a>
                </li>
              ) : null}

              <div className="dropdown profile d-inline-flex">
                <button
                  className="btn btn-secondary dropdown-toggle avatar"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  id="profileDropdown"
                >
                  ZU
                </button>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" to="/signup">
                      SignUp
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/login">
                      Login
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/logout">
                      LogOut
                    </Link>
                  </li>
                </ul>
                <p className="username">USERID</p>
              </div>
            </ul>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
