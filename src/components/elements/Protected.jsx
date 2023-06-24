import React from "react";
import "./protected.css";

const Protected = () => {
  return (
    <>
      <div className="protected  container-fluid">
        <div className="container">
          <div className="row section">
            <h1 className="fw-bold text-center">
              How <span className="color">Povo</span> is Rugpul protected
            </h1>
            <div className="col-md-6 mt-5 pt-5">
              <ul>
                <li className="fw-bold">
                  Povo Presale is going held on UniCrypt which prevents rug-pull
                  by offering auto liquidity lock functionality
                </li>
                <li className="fw-bold">
                  60% of raised funds in presale is locked into liquidity by
                  UniCrypt for 266 years
                </li>
                <li className="fw-bold">
                  Transaction fee is never above 7% max.
                </li>
                <li className="fw-bold">
                  Newly created LP tokens are locked in order to ensure
                  transparency.
                </li>
                <li className="fw-bold">
                  Smart Contract is audited by CertTik.
                </li>
              </ul>
            </div>
            <div className="col-md-6 text-center">
              <img
                className="protected-img"
                src="assets/why.png"
                alt="no"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Protected;
