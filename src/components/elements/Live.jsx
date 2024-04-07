import "./live.css";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const Live = () => {
  const [show, setShow] = useState(false);
  const [modalHeading, setModalHeading] = useState("");
  const [modalBody, setModalBody] = useState("");

  const handleClose = () => setShow(false);

  const handleShow = (heading, body) => {
    setShow(true);
    setModalHeading(heading);
    setModalBody(body);
  };

  return (
    <>
      <div className="container-fluid live-bg">
        <div className="container live-pd">
          <h1 className="text-center fw-bold">
            Platforms going <span className="color">Live</span> after PreSale
          </h1>
          <div className="row mt-5 pt-5 text-center">
            <div className="col-sm-4">
              <h4 className="live-h4">Frictionless yield</h4>
              <Button
                className="live-btn"
                onClick={() =>
                  handleShow(
                    "Frictionless yield",
                    "The nature of governance in the gaming community is somewhat, centralized governance structure. The founders of each gaming clan are mostly it’s leaders too. These include, the administrators of the system, the owners of the server, the savvy programmers are the only ones in most cases to participate in the important decision making of the platform. These fast paced gaming structure requires a central leadershipfor its in-game operations. However, the governance of gaming extends far than the in-game structure. The leadership is much more democratic outside the gaming platform, where they organize and participate in discussion and suggestion platforms."
                  )
                }
              >
                Read more
              </Button>
            </div>
            <div className="col-sm-4">
              <h4 className="live-h4">Governance in gaming</h4>
              <Button
                className="live-btn"
                onClick={() =>
                  handleShow(
                    "Governance in gaming",
                    "The nature of governance in the gaming community is somewhat, centralized governance structure. The founders of each gaming clan are mostly it’s leaders too. These include, the administrators of the system, the owners of the server, the savvy programmers are the only ones in most cases to participate in the important decision making of the platform. These fast paced gaming structure requires a central leadershipfor its in-game operations. However, the governance of gaming extends far than the in-game structure. The leadership is much more democratic outside the gaming platform, where they organize and participate in discussion and suggestion platforms."
                  )
                }
              >
                Read more
              </Button>
            </div>
            <div className="col-sm-4">
              <h4 className="live-h4">Staking in gaming</h4>
              <Button
                className="live-btn"
                onClick={() =>
                  handleShow(
                    "Staking in gaming",
                    "The integration of DeFi in the online gaming community is the hidden gem to generate passive income. The two communities have joined to give birth to their brainchild, ‘cryptocurrency gaming’. The concept works as follow, there are a number of games available online, which incorporate blockchain technology. Gamer enthusiasts around the globe play to earn. The players in these games earn rewards in form of cryptocurrencies. The users than use their tokens to earn reward through staking them. This works on the concept of proof of stake. These gamers also earn governance tokens to participate in important decision making of the platform."
                  )
                }
              >
                Read more
              </Button>

              <Modal className="model" show={show} onHide={handleClose}>
                <Modal.Header closeButton={true}>
                  <Modal.Title>{modalHeading}</Modal.Title>
                </Modal.Header>
                <Modal.Body>{modalBody}</Modal.Body>
                <Modal.Footer></Modal.Footer>
              </Modal>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Live;
