import React from "react";
import { Link } from "react-router-dom";
import "./header.css";

const Header = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg  sticky-top">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <img className="logo" src="https://povo-site.netlify.app/static/media/NewLogo.0402fecf.png" alt="not found" />
          </Link>
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
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item fw-bold">
                <Link to="/" className="nav-link ">
                 Home
                </Link>
              </li>
              <li className="nav-item fw-bold">
                <Link to="./login" className="nav-link ">
                 Staking
                </Link>
              </li>
              <li className="nav-item fw-bold">
                <Link to="./login" className="nav-link ">
                  Governance
                </Link>
              </li>
              <li className="nav-item fw-bold">
                <Link to="./login" className="nav-link ">
                  Tokenomics
                </Link>
              </li>
              <li className="nav-item fw-bold">
                <Link to="./signup" className="nav-link">
                  Roadmap
                </Link>
              </li>
              <li className="nav-item fw-bold">
                <Link to="./signup" className="nav-link">
                  Rugpul
                </Link>
              </li>
              <li className="nav-item fw-bold">
                <Link to="./signup" className="nav-link">
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
