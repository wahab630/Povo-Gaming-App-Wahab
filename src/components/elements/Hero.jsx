import React from "react";
import "./hero.css";
import Carousel from "react-bootstrap/Carousel";
import {
  FaMediumM,
  FaGithub,
  FaTwitter,
  FaFacebook,
  FaYoutube,
  FaReddit,
  FaTelegram,
} from "react-icons/fa";

const Hero = () => {
  return (
    <>
      <div className="container-fluid hero-bg">
        <div className="container hero-section">
          <div className="row">
            <div className="col-md-6">
              <h1 className="hero-h fw-bold mt-4">
                Play To Win <br /> Reward on Holding{" "}
              </h1>
              <h3 class="p-0 pt-3">
                Frictionless yield &amp; liquidity generation protocol for game
                lover. Povo is <br /> deflationary in it's nature{" "}
              </h3>
              <button class="hero-button">
                <img
                  className="hero-btn-img"
                  src="assets/hb.png"
                  alt="no"
                />{" "}
                &nbsp; Trade on PancakeSwap
              </button>
              <button class="button-two">Whitepaper</button>
              <div className="col-md-12">
                <ul className="list-unstyled d-flex  my-4">
                  <li className="me-3">
                    <FaMediumM size={25} />
                  </li>
                  <li className="me-3">
                    <FaGithub size={25} />
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
              <div class="row mt-2">
                <div class="col">
                  <h5>Buying FEE is 5%</h5>
                  <ul>
                    <li>3% to buy back funds</li>
                    <li>1% Marketing and Development</li>
                    <li>1% Reflection to holders</li>
                  </ul>
                </div>
                <div class="col">
                  <h5>Selling FEE is 7%</h5>
                  <ul>
                    <li>4% to buy back funds</li>
                    <li>1% Marketing and Development</li>
                    <li>2% Reflection to holders</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="row">
                <Carousel indicators={false}  indicatorLabels={false}>
                  <Carousel.Item>
                    <img
                      className="d-block text-center coursel-img"
                      src="assets/hero1.png"
                      alt="First slide"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block text-center coursel-img"
                      src="assets/hero2.png"
                      alt="Second slide"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block text-center  coursel-img"
                      src="assets/hero3.png"
                      alt="no"
                    />
                  </Carousel.Item>
                </Carousel>
              </div>
              <div className="row my-4">
                <div className="col-md-10">
                  <span className="right-h-btn">Token Address</span>
                  <input
                    type="text"
                    className="input-text"
                    value="0x2a2d03a47ae6220312337d1f094badcd1ee948cc"
                  />
                </div>
                <div className="row text-center mt-5 mb-5">
                  <div className="col">
                    <img
                      className="h-right-b"
                      src="assets/certik.png"
                      alt="no"
                    />
                  </div>
                  <div className="col">
                    <img
                      className="h-right-b"
                      src="assets/pcs.png"
                      alt="no"
                    />
                  </div>
                  <div className="col">
                    <img
                      className="h-right-b"
                      src="assets/xt.png"
                      alt="no"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
