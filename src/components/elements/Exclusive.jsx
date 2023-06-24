import React from "react";
import "./exclusive.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const Exclusive = () => {
  return (
    <>
      <div className="container-fluid exclusive section">
        <div className="container text-center">
          <h1 className="text-center fw-bold">
            {" "}
            <span className="color">Povo</span>Exclusive NFT's{" "}
          </h1>
          <div className="row">
            <Carousel
              swipeable={false}
              draggable={false}
              showDots={false}
              responsive={responsive}
              ssr={true} // means to render carousel on server-side.
              infinite={true}
              autoPlaySpeed={4000}
              autoPlay={true}
              arrows={false}
              keyBoardControl={true}
              customTransition="all .5"
              transitionDuration={4000}
              containerClass="carousel-container"
              removeArrowOnDeviceType={["tablet", "mobile"]}
              dotListClass="custom-dot-list-style"
              itemClass="carousel-item-padding-10-px"
            >
              <div className="m-2 d-flex flex-column align-items-center">
                
                <img
                  className="multi-img mb-2"
                  src="assets/hero1.png"
                  alt="no"
                />
                <button className="btn fw-bold e-btn">Buy</button>{" "}
              </div>
              <div className="m-2 d-flex flex-column align-items-center">
                {" "}
                <img
                  className="multi-img mb-2"
                  src="assets/hero2.png"
                  alt="no"
                />
                <button className="btn fw-bold e-btn">Buy</button>{" "}
              </div>
              <div className="m-2 d-flex flex-column align-items-center">
                {" "}
                <img
                  className="multi-img mb-2"
                  src="assets/hero3.png"
                  alt="no"
                />
                <button className="btn fw-bold e-btn">Buy</button>{" "}
              </div>
              <div className="m-2 d-flex flex-column align-items-center">
                {" "}
                <img
                  className="multi-img mb-2"
                  src="assets/hero4.png"
                  alt="no"
                />
                <button className="btn fw-bold e-btn">Buy</button>{" "}
              </div>
              <div className="m-2 d-flex flex-column align-items-center">
                {" "}
                <img
                  className="multi-img mb-2"
                  src="assets/hero5.png"
                  alt="no"
                />
                <button className="btn fw-bold e-btn">Buy</button>{" "}
              </div>
              <div className="m-2 d-flex flex-column align-items-center">
                {" "}
                <img
                  className="multi-img mb-2"
                  src="assets/hero1.png"
                  alt="no"
                />
                <button className="btn fw-bold e-btn">Buy</button>{" "}
              </div>
              <div className="m-2 d-flex flex-column align-items-center">
                {" "}
                <img
                  className="multi-img mb-2"
                  src="assets/hero2.png"
                  alt="no"
                />
                <button className="btn fw-bold e-btn">Buy</button>{" "}
              </div>
              <div className="m-2 d-flex flex-column align-items-center">
                {" "}
                <img
                  className="multi-img mb-2"
                  src="assets/hero3.png"
                  alt="no"
                />
                <button className="btn fw-bold e-btn">Buy</button>{" "}
              </div>
            </Carousel>
          </div>
        </div>
      </div>
    </>
  );
};

export default Exclusive;
