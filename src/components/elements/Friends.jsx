import React from "react";
import "./friends.css";

const Friends = () => {
  return (
    <>
      <div className="container-fluid bg-black">
        <div className="container py-5">
          <h1 className="text-center mb-3 ">
            <span className="fw-bold">Friends of</span>{" "}
            <span className="color">Povo</span>
          </h1>
          <div className="row mt-2 text-center">
            <div className="col-sm-3">
              <img className="friend-img" src="assets/1.png" alt="no" />
            </div>
            <div className="col-sm-3">
              <img className="friend-img" src="assets/2.svg" alt="no" />
            </div>
            <div className="col-sm-3">
              <img className="friend-img" src="assets/3.png" alt="no" />{" "}
            </div>
            <div className="col-sm-3">
              <img className="friend-img" src="assets/4.png" alt="no" />{" "}
            </div>
          </div>
          <div className="row text-center">
            <div className="col-sm-6">
              <img className="friends-img2" src="assets/5.png" alt="no" />{" "}
            </div>
            <div className="col-sm-6">
              <img className="friends-img2" src="assets/6.png" alt="no" />{" "}
            </div>
          </div>
          <div className="row mt-3 text-center">
            <div className="col-sm-4">
              <img className="friends-img3" src="assets/7.png" alt="no" />{" "}
            </div>
            <div className="col-sm-4">
              <img className="friends-img3" src="assets/8.png" alt="no" />{" "}
            </div>
            <div className="col-sm-4">
              <img className="friends-img3" src="assets/9.png" alt="no" />{" "}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Friends;
