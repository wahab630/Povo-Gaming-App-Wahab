import React, { useState } from "react";
import "./features.css";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const Features = () => {
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
      <div className="container-fluid Features">
        <div className="container">
          <h1 className="text-center fw-bold">Povo Features</h1>
          <div className="row mt-5 d-flex ">
            
            <div className="col-sm-4 ">
              <div className="card myCard1 mb-2">
                <div className="card-body">
                  <div className="text-center">
                    <img
                      className="card-img"
                      src="https://uploads-ssl.webflow.com/60c7783699e1051d74062f79/60c92caf0644a6350eba414b_1.svg"
                      alt="no"
                    />
                  </div>
                  <h4 className="fw-bold card-h text-center pb-2 pt-3">
                    In-game items <br /> crafting
                  </h4>
                  <p className="card-p">
                    In-game items crafting is a skill or set of skills option
                    specifically provides in massively multiplayer online games
                    or role playing games
                  </p>
                  <div className="text-end mb-3">
                    <Button
                      onClick={() =>
                        handleShow(
                          "In-game items crafting",
                          "In-game items crafting is a skill or set of skills option specifically provides in massively multiplayer online games or role playing games and other game genres. It allows the users to use basic tools within the game to construct a tool for themselves to use later, more likely for the purpose of competitive edge over other participants. Other game genres where crafting tool is available are, FPS team fortress 2, which allows its users to combine different weapons to create a new one. Or, sandbox Minecraft, which allows players to create and repair their weapons."
                        )
                      }
                    >
                      Read me
                    </Button>
                  </div>
                </div>
              </div>
              
            </div>
            <div className="col-sm-4 ">
              <div className="card myCard2 mb-2">
                <div className="card-body">
                  <div className="text-center">
                    <img
                      className="card-img"
                      src="https://povo-site.netlify.app/static/media/h2.17c263d5.png"
                      alt="no"
                    />
                  </div>
                  <h4 className="fw-bold text-center  pb-2 pt-3">
                    Cross chain interpretability &amp; custom wallet
                  </h4>
                  <p className="">
                    DeFi has a motive to incorporate traditional financial
                    services in the cryptocurrency ecosystem. This can only be
                    possible if each blockchain in the
                  </p>
                  <div className="text-end mb-3">
                    <Button
                      variant="primary"
                      onClick={() =>
                        handleShow(
                          "Cross chain interpretability custom wallet",
                          "DeFi has a motive to incorporate traditional financial services in the cryptocurrency ecosystem. This can only be possible if each blockchain in the ecosystem can communicate and transfer information and data to other blockchains. A reliable and smooth transaction among these blockchain will enable to introduce traditional financial services to the digital currency ecosystem. Moreover, some platforms offer custom wallets where one can store more than one currency and use the interchangeable."
                        )
                      }
                    >
                      Read me
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-4 ">
              <div className="card myCard1 mb-2   ">
                <div className="card-body">
                  <div className="text-center">
                    <img
                      className="card-img"
                      src="https://povo-site.netlify.app/static/media/h3.c5f8acdf.png"
                      alt="no"
                    />
                  </div>
                  <h4 className="fw-bold card-h text-center pb-2 pt-3">
                    Multiverse <br /> gaming
                  </h4>
                  <p className="card-p">
                    The concept of multiverse gaming can be described as a set
                    of parallel world, where theplayers can theoretically travel
                    from one
                  </p>
                  <div className="text-end mb-3 pt-4">
                    <Button
                      variant="primary"
                      onClick={() =>
                        handleShow(
                          " Multiverse   gaming",
                          "The concept of multiverse gaming can be described as a set of parallel world, where theplayers can theoretically travel from one universe to the other with advancements in their levels and gaming tools. Sharded virtual worlds such as Ultima online are similar innature to multiverse games, however transportation and communication in sharderd worlds is not as easy as the traditional multiverse games"
                        )
                      }
                    >
                      Read me
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-3 mb-5 d-flex ">
            <div className="col-sm-4 m-0">
              <div className="card myCard2 mb-2">
                <div className="card-body">
                  <div className="text-center">
                    <img
                      className="card-img"
                      src="https://povo-site.netlify.app/static/media/h1.4f9f7525.png"
                      alt="no"
                    />
                  </div>
                  <h4 className="fw-bold text-center  pb-2 pt-3">
                    Tokenize character <br /> items
                  </h4>
                  <p className="">
                    Povo is one of those games that have tokenized their
                    characters. Meaning that, you can now advance your levels
                    within the game
                  </p>
                  <div className="text-end mb-3">
                    <Button
                      variant="primary"
                      onClick={() =>
                        handleShow(
                          "Tokenize character  items",
                          "Povo is one of those games that have tokenized their characters. Meaning that, you can now advance your levels within the game and monetize your virtual rewards. These virtual rewards can then be converted in tangible assets, traded or swapped with other monetized digital funds. Povo made it possible through the use of Non-fungible tokens (NFTs). It uses NFTs to monetized your virtual rewards."
                        )
                      }
                    >
                      Read me
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-4 m-0">
              <div className="card myCard1 mb-2">
                <div className="card-body">
                  <div className="text-center">
                    <img
                      className="card-img"
                      src="https://povo-site.netlify.app/static/media/idea.d16413b8.svg"
                      alt="no"
                    />
                  </div>
                  <h4 className="fw-bold card-h text-center pb-2 pt-3">
                    Gamer/devs can introduce their own token
                  </h4>
                  <p className="card-p">
                    Blockchain has revolutionized the world of gaming. It allows
                    the projection of value in intangible assets. It helps
                    gamers to securely
                  </p>
                  <div className="text-end mb-3">
                    <Button
                      variant="primary"
                      onClick={() =>
                        handleShow(
                          " Gamer/devs can introduce their own token",
                          "Blockchain has revolutionized the world of gaming. It allows the projection of value in intangible assets. It helps gamers to securely store their in-game assets. These in-gameassets can then be stored in the form of a token. And these token can in turn be monetized or swapped with other digital funds. This facility is provided to both developers and gamers."
                        )
                      }
                    >
                      Read me
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-4 m-0">
              <div className="card myCard2 ">
                <div className="card-body">
                  <div className="text-center">
                    <img
                      className="card-img"
                      src="https://povo-site.netlify.app/static/media/h4.e66c6e38.png"
                      alt="no"
                    />
                  </div>
                  <h4 className="fw-bold text-center  pb-2 pt-3">
                    Dapp Store and game studio integration
                  </h4>
                  <p className="">
                    Decentralized applications are a set of programs that
                    harness excess power from different nodes globally.
                  </p>
                  <div className="text-end mb-3">
                    <Button
                      className="color-btn-f"
                      onClick={() =>
                        handleShow(
                          "Dapp Store and game studio integration",
                          "Decentralized applications are a set of programs that harness excess power from different nodes globally. These are community driven application. One example of theseare bitcoins. The integration of Dapps and gaming can create a brainchild which will allow making features of blockchains in gaming. These features might include, a decentralized gaming structure, secure storage of in-game assets, trading of gaming tokens, and interoperability among different games."
                        )
                      }
                    >
                      Read me
                    </Button>
                    {/* modal start */}

                    <Modal
                      className="model"
                      show={show}
                      onHide={handleClose}
                    >
                      <Modal.Header closeButton>
                        <Modal.Title>{modalHeading}</Modal.Title>
                      </Modal.Header>
                      <Modal.Body>{modalBody}</Modal.Body>
                      <Modal.Footer></Modal.Footer>
                    </Modal>
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

export default Features;
