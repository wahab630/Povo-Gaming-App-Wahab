import React from "react";
import "./platform.css";

const Platform = () => {
  return (
    <>
      <div className="container-fluid plat">
        <div className="container pt-5">
          <div className="row section ">
            <div className="col-md-6">
              <img className="platfoam-img" src="assets/laptop.png" alt="no" />
            </div>
            <div className="col-md-6">
              <div className="text-center">
                <h1 className="mb-4">
                  <span className="color"> Povo </span>{" "}
                  <span className="fw-bold">Staking Platform</span>{" "}
                </h1>
                <button className=" btn btn-lg my-3 px-4">Launched, Povo Staking</button>
              </div>
              <ul>
                <p>
                  <strong>Key features</strong>
                </p>
                <li>
                  You can stake your POVO at any time you choose. You can stake
                  any amount of POVO you wish.
                </li>
                <li>
                  Once staked, the contract will deliver a reward continuously
                  for as long as tokens remain staked.
                </li>
                <li>
                  You can withdraw any amount of staked POVO tokens without any
                  locking period
                </li>
                <li>You are free to stake additional amounts at any time</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Platform;
