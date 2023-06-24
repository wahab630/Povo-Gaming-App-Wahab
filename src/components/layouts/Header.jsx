import React from "react";
import { Link } from "react-router-dom";
import "./header.css";

const Header = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg  sticky-top">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <img className="logo" src="assets/logo.png" alt="not found" />
          </Link>
          <button
            className="navbar-toggler bg-white"
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
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item fw-bold">
                <Link to="/" className="nav-link ">
                 Home
                </Link>
              </li>
              <li className="nav-item fw-bold">
                <Link to="/" className="nav-link ">
                 Staking
                </Link>
              </li>
              <li className="nav-item fw-bold">
                <Link to="/" className="nav-link ">
                  Governance
                </Link>
              </li>
              <li className="nav-item fw-bold">
                <Link to="/" className="nav-link ">
                  Tokenomics
                </Link>
              </li>
              <li className="nav-item fw-bold">
                <Link to="/" className="nav-link">
                  Roadmap
                </Link>
              </li>
              <li className="nav-item fw-bold">
                <Link to="/" className="nav-link">
                  Rugpul
                </Link>
              </li>
              <li className="nav-item fw-bold">
                <Link to="/" className="nav-link">
                  FAQ
                </Link>
              </li>
              <li className="nav-item">
                <button className="btn fw-bold">Connect Wallet</button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
