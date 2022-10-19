import React from "react";
import "./benefits.css";

const Benefits = () => {
  return (
    <>
      <div className="container-fluid   Benefit">
        <div className="container">
          <h1 className="text-center">
            Benefit of <span className="fw-bold"> Povo</span>{" "}
          </h1>
          <div className="row">
            <div className="col-md-6 mt-5">
              <h5 className="fw-bold"> Anyone Who Owns Gaming Assets</h5>
              <ul>
                <li >
                  Transfer items to another account
                </li>
                <li>
                  Renders the items to mount reserve values
                </li>
                <li >
                  Ease of using the items accross other supported games
                </li>
              </ul>
              <h5  className="fw-bold">Game tournament and receive winnings in your wallet</h5>
              <h5  className="fw-bold" >Artificial Intelligence improve players expericne</h5>
              <h5  className="fw-bold">Withdraw funds using PayPal</h5>
            </div>
            <div className="col-md-6">
              <img className="benefits-img" src="https://povo-site.netlify.app/static/media/benefit.568264db.png" alt="no" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Benefits;
