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
                <Container fluid className="fixed-bottom bg-container pt-1">
                  <Row className="h-100">
                    <Col lg={10} className="offset-lg-2">
                      <Row className="h-100 flex-column justify-content-center align-items-center">
                        <Col xs={6} md={4} className="playerControls">
                          <div className="d-flex">
                            <NavLink to="#">
                              <img
                                src="/src/assets/playerbuttons/shuffle.png"
                                alt="shuffle"
                              />
                            </NavLink>
                            <NavLink to="#">
                              <img
                                src="/src/assets/playerbuttons/prev.png"
                                alt="prev"
                              />
                            </NavLink>
                            <NavLink to="#">
                              <img
                                src="/src/assets/playerbuttons/play.png"
                                alt="play"
                              />
                            </NavLink>
                            <NavLink to="#">
                              <img
                                src="/src/assets/playerbuttons/next.png"
                                alt="next"
                              />
                            </NavLink>
                            <NavLink to="#">
                              <img
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
                              src="/src/assets/playerbuttons/shuffle.png"
                              alt="shuffle"
                            />
                          </NavLink>
                          <NavLink to="#">
                            <img
                              src="/src/assets/playerbuttons/prev.png"
                              alt="prev"
                            />
                          </NavLink>
                          <NavLink to="#">
                            <img
                              src="/src/assets/playerbuttons/play.png"
                              alt="play"
                            />
                          </NavLink>
                          <NavLink to="#">
                            <img
                              src="/src/assets/playerbuttons/next.png"
                              alt="next"
                            />
                          </NavLink>
                          <NavLink to="#">
                            <img
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
