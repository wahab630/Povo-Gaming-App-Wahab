import React from "react";
import "./footer.css";
import {
  FaMediumM,
  FaGithub,
  FaTwitter,
  FaFacebook,
  FaYoutube,
  FaReddit,
  FaTelegram,
} from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className="footercolor">
        <div className="container pt-5">
          <div className="row">
            <div className="col-lg-5 d-flex">
              <img
                className="footer-logo"
                src="assets/logo.png"
                alt="no"
              />
              <span className="p-2">
                <strong> PLAY TO WIN REWARD ON HOLDING </strong> <br />
                Frictionless yield &amp; liquidity generation protocol <br />
                for game lover. Povo is deflationary in it's nature
              </span>
            </div>
            <div className="col-lg-4 offset-lg-3 text-center pt-5">
              <ul className="list-unstyled d-flex justify-content-center ">
                <li className="me-3">
                  
                  <FaMediumM size={25} />
                </li>
                <li className="me-3">
                  
                  < FaGithub size={25} />
                </li>
                <li className="me-3">
                  
                  <FaTelegram size={25} />
                </li>
                <li className="me-3">
                  
                  <FaTwitter size={25} />
                </li>
                <li className="me-3">
                  
                  <FaYoutube size={25} />
                </li>
                <li className="me-3">
                  
                  <FaReddit size={25} />
                </li>
                <li className="me-3">
                  
                  <FaFacebook size={25} />
                </li>
               
                
              </ul>
              
            </div>

            <div className="col-lg-12">
              <hr className="footer-line" />
            </div>

            <div className="col-sm-12 text-center mb-3">
              ©2021 Povo Productions Limited
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
