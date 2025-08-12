import React, { useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

const Menu = () => {
  const [selectedMenu, setSelectedMenu] = useState(0); // here 0 stands for Dashboard and then move to 1,2,3,4,5 for other menus
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const handleMenuClick = (index) => {
    setSelectedMenu(index);
  };

  const menuClass = "menu";
  const activeMenuClass = "menu selected";

  const handleProfileClick = () => {
    setIsProfileOpen(!isProfileOpen);
  };

  return (
    <div className="menu-container">
      <img src="logo.png" style={{ width: "50px" }} />
      <div className="menus">
        <ul>
          <li>
            <Link
              to="/"
              className={selectedMenu === 0 ? activeMenuClass : menuClass}
              style={{ textDecoration: "none" }}
              onClick={() => handleMenuClick(0)}
            >
              <p>Dashboard</p>
            </Link>
          </li>

          <li>
            <Link
              to="/orders"
              className={selectedMenu === 1 ? activeMenuClass : menuClass}
              style={{ textDecoration: "none" }}
              onClick={() => handleMenuClick(1)}
            >
              <p>Orders</p>
            </Link>
          </li>
          <li>
            <Link
              to="/holdings"
              className={selectedMenu === 2 ? activeMenuClass : menuClass}
              style={{ textDecoration: "none" }}
              onClick={() => handleMenuClick(2)}
            >
              <p>Holdings</p>
            </Link>
          </li>
          <li>
            <Link
              to="/positions"
              className={selectedMenu === 3 ? activeMenuClass : menuClass}
              style={{ textDecoration: "none" }}
              onClick={() => handleMenuClick(3)}
            >
              <p>Positions</p>
            </Link>
          </li>
          <li>
            <Link
              to="/funds"
              className={selectedMenu === 4 ? activeMenuClass : menuClass}
              style={{ textDecoration: "none" }}
              onClick={() => handleMenuClick(4)}
            >
              <p>Funds</p>
            </Link>
          </li>
          <li>
            <Link
              to="/apps"
              className={selectedMenu === 5 ? activeMenuClass : menuClass}
              style={{ textDecoration: "none" }}
            >
              <p>Apps</p>
            </Link>
          </li>
        </ul>
        <hr />

        <div className="dropdown profile">
          <button
            className="btn btn-secondary dropdown-toggle avatar"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            ZU
          </button>
          <ul class="dropdown-menu">
            <li>
              <Link className="dropdown-item" to="/SignUp">
                Signup
              </Link>
            </li>
            <li>
              <Link className="dropdown-item" to="/login">
                Login
              </Link>
            </li>
            <li>
              <Link className="dropdown-item" to="#">
                Logout
              </Link>
            </li>
          </ul>
          <p className="username">USERID</p>
        </div>
      </div>
    </div>
  );
};

export default Menu;
