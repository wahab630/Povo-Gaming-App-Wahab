import React from "react";
import "./exclusive.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4
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
            <h1 className="text-center fw-bold">  <span className="color">Povo</span>Exclusive NFT's </h1>
          <div className="row">
            <Carousel
              swipeable={false}
              draggable={false}
              showDots={false}
              responsive={responsive}
              ssr={true} // means to render carousel on server-side.
              infinite={true}
              autoPlaySpeed={3000}
              autoPlay={true}
              arrows={false}
              keyBoardControl={true}
              customTransition="all .5"
              transitionDuration={250}
              containerClass="carousel-container"
              removeArrowOnDeviceType={["tablet", "mobile"]}
              dotListClass="custom-dot-list-style"
              itemClass="carousel-item-padding-40-px"
            >
              <div className="m-2 d-flex flex-column align-items-center"> <img className="multi-img mb-2" src="https://povo-site.netlify.app/static/media/NFT6.e01e2af9.png" alt="no" /><button className="btn fw-bold e-btn">Buy</button> </div>
              <div className="m-2 d-flex flex-column align-items-center"> <img  className="multi-img mb-2" src="https://povo-site.netlify.app/static/media/NFT31.3c9c259c.png" alt="no" /><button className="btn fw-bold e-btn">Buy</button> </div>
              <div className="m-2 d-flex flex-column align-items-center"> <img className="multi-img mb-2" src="https://povo-site.netlify.app/static/media/NFT4.4a793bce.png" alt="no" /><button className="btn fw-bold e-btn">Buy</button> </div>
              <div className="m-2 d-flex flex-column align-items-center"> <img className="multi-img mb-2" src="https://povo-site.netlify.app/static/media/NFT5.8d080857.png" alt="no" /><button className="btn fw-bold e-btn">Buy</button> </div>
              <div className="m-2 d-flex flex-column align-items-center"> <img className="multi-img mb-2" src="https://povo-site.netlify.app/static/media/NFT1.d7c5ef8c.png" alt="no" /><button className="btn fw-bold e-btn">Buy</button> </div>
              <div className="m-2 d-flex flex-column align-items-center"> <img className="multi-img mb-2" src="https://povo-site.netlify.app/static/media/NFT2.ce0d0563.png" alt="no" /><button className="btn fw-bold e-btn">Buy</button> </div>
              <div className="m-2 d-flex flex-column align-items-center"> <img className="multi-img mb-2" src="https://povo-site.netlify.app/static/media/NFT3.f7c6e745.png" alt="no" /><button className="btn fw-bold e-btn">Buy</button> </div>
              <div className="m-2 d-flex flex-column align-items-center"> <img className="multi-img mb-2" src="https://povo-site.netlify.app/static/media/NFT31.3c9c259c.png" alt="no" /><button className="btn fw-bold e-btn">Buy</button> </div>
              
            </Carousel>
            ;
          </div>
        </div>
      </div>
    </>
  );
};

export default Exclusive;
