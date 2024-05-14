import React from "react";
import { NavLink, Link, Outlet } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <nav
        className="navbar navbar-expand-lg bg-body-tertiary sticky-top"
        ata-bs-theme="dark"
      >
        <div className="container-fluid">
          <Link className="navbar-brand mb-0 h1" to="/">
            Hengam Optic
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink className="nav-link" to="/">
                  Orders
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/add_order">
                  new Order
                </NavLink>
              </li>
              <li className="nav-item">
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div id="detail">
        <Outlet />
      </div>
    </div>
  );
};

export default NavBar;
