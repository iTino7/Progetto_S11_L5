import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

function Player() {
  const currentSong = useSelector((state) => state.player.toggle);

  return (
    <>
      <Container fluid className="fixed-bottom bg-container pt-1">
        <Row className="h-100">
          <Col lg={10} className="offset-lg-2 d-flex align-items-center">
            {currentSong ? (
              <>
                <Container fluid className="fixed-bottom bg-container pt-1 ">
                  <Row className="d-flex">
                    <Col lg={10} className="offset-lg-2  ">
                      <Row className="h-100 ">
                        <Col xs={4} className="d-flex align-items-center mt-3">
                          <img
                            src={currentSong.album.cover_medium}
                            width={50}
                          />
                          <div className="d-flex flex-column">
                            <p className="mb-0 text-white ms-3 ">
                              {currentSong.artist.name}
                            </p>
                            <p className="mb-0 text-white ms-3 ">
                              {currentSong.title}
                            </p>
                          </div>
                        </Col>

                        <Col xs={6} md={4} className="playerControls mt-3 ">
                          <div className="d-flex ">
                            <NavLink to="#">
                              <img
                                className="ms-2 me-4"
                                src="/src/assets/playerbuttons/shuffle.png"
                                alt="shuffle"
                              />
                            </NavLink>
                            <NavLink to="#">
                              <img
                                className="me-4"
                                src="/src/assets/playerbuttons/prev.png"
                                alt="prev"
                              />
                            </NavLink>
                            <NavLink to="#">
                              <img
                                className="me-4"
                                src="/src/assets/playerbuttons/play.png"
                                alt="play"
                              />
                            </NavLink>
                            <NavLink to="#">
                              <img
                                className="me-4"
                                src="/src/assets/playerbuttons/next.png"
                                alt="next"
                              />
                            </NavLink>
                            <NavLink to="#">
                              <img
                                className="me-4"
                                src="/src/assets/playerbuttons/repeat.png"
                                alt="repeat"
                              />
                            </NavLink>
                          </div>
                          <div className="progress mt-3">
                            <div role="progressbar"></div>
                          </div>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </Container>
              </>
            ) : (
              <Container fluid className="fixed-bottom bg-container pt-1">
                <Row className="h-100">
                  <Col lg={10} className="offset-lg-2">
                    <Row className="h-100 flex-column justify-content-center align-items-center">
                      <Col xs={6} md={4} className="playerControls">
                        <div className="d-flex">
                          <NavLink to="#">
                            <img
                              className="me-4"
                              src="/src/assets/playerbuttons/shuffle.png"
                              alt="shuffle"
                            />
                          </NavLink>
                          <NavLink to="#">
                            <img
                              className="me-4"
                              src="/src/assets/playerbuttons/prev.png"
                              alt="prev"
                            />
                          </NavLink>
                          <NavLink to="#">
                            <img
                              className="me-4"
                              src="/src/assets/playerbuttons/play.png"
                              alt="play"
                            />
                          </NavLink>
                          <NavLink to="#">
                            <img
                              className="me-4"
                              src="/src/assets/playerbuttons/next.png"
                              alt="next"
                            />
                          </NavLink>
                          <NavLink to="#">
                            <img
                              className="me-4"
                              src="/src/assets/playerbuttons/repeat.png"
                              alt="repeat"
                            />
                          </NavLink>
                        </div>
                        <div className="progress mt-3">
                          <div role="progressbar"></div>
                        </div>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Container>
            )}
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Player;
