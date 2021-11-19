import React from "react";
import logo from "../../src/logo.png";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container">
        <a className="navbar-brand text-light" href="/">
          <img className="logo" src={logo} alt="logo" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <a className="nav-link text-light" href="/">
                Home
              </a>
            </li>
            {/* <li className="nav-item">
              <a className="nav-link text-light" href="/about">
                About
              </a>
            </li> */}
            {/* <li className="nav-item">
              <a className="nav-link text-light" href="/services">
                Services
              </a>
            </li> */}
            <li className="nav-item">
              <a className="nav-link text-light" href="/mywork">
                My Work
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-light" href="/contact">
                Contact
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-light" href="/resume">
                Resume
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
