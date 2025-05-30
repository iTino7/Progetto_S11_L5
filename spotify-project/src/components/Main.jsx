import { useEffect } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import {
  ADD_TO_PLAYER,
  fillSongsAction,
  SET_HIPHOP_SONGS,
  SET_POP_SONGS,
  SET_SONGS,
} from "../redux/action";
import { Star } from "react-bootstrap-icons";

function Main() {
  const songsRock = useSelector((state) => state.songs.song);
  const songsPop = useSelector((state) => state.songs.pop);
  const songsHipHop = useSelector((state) => state.songs.hiphop);

  const dispatch = useDispatch();

  const addPlayer = (add) => {
    dispatch({
      type: ADD_TO_PLAYER,
      payload: add,
    });
  };

  useEffect(() => {
    dispatch(fillSongsAction("Pink Floyd", SET_SONGS));
    dispatch(fillSongsAction("Billie Eilish", SET_POP_SONGS));
    dispatch(fillSongsAction("eminem", SET_HIPHOP_SONGS));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Container xs={12} md={9} className="offset-md-2 mainPage mb-5">
        <Container className="row">
          <Row>
            <Col xs={9} lg={11} className="mainLinks d-none d-md-flex">
              <NavLink to="/"> TRENDING </NavLink>
              <NavLink to="/"> PODCAST </NavLink>
              <NavLink to="/"> MOODS AND GENRES </NavLink>
              <NavLink to="/"> NEW RELEASES </NavLink>
              <NavLink to="/"> DISCOVER </NavLink>
            </Col>
          </Row>
        </Container>
        <Container>
          <Row>
            <Col xs={12} className="d-flex flex-column align-items-center">
              <h2 id="rock" className="mb-4">
                Rock Classics
              </h2>
              <Row>
                {songsRock.map((item, index) => (
                  <Col key={index} xs={6} md={3} className="d-flex flex-column">
                    <img
                      onClick={() => addPlayer(item)}
                      className="img-fluid me-5"
                      src={item.album.cover_medium}
                      alt="track"
                      style={{ cursor: "pointer" }}
                    />

                    <p className="mb-1">{item.title}</p>

                    <div className="d-flex text-white align-items-center">
                      <strong>{item.artist.name}</strong>
                      <Button className="bg-transparent border-0 p-0">
                        <Star className="text-warning ms-3 " />
                      </Button>
                    </div>
                  </Col>
                ))}
              </Row>
            </Col>
            <Col xs={12} className="d-flex flex-column align-items-center">
              <h2 id="pop" className="mb-4">
                Pop Culture
              </h2>
              <Row>
                {songsPop.map((item, index) => (
                  <Col key={index} xs={6} md={3} className="d-flex flex-column">
                    <img
                      onClick={() => addPlayer(item)}
                      className="img-fluid me-5"
                      src={item.album.cover_medium}
                      alt="track"
                      style={{ cursor: "pointer" }}
                    />

                    <p className="mb-1">{item.title}</p>

                    <div className="d-flex text-white align-items-center">
                      <strong>{item.artist.name}</strong>
                      <Button className="bg-transparent border-0 p-0">
                        <Star className="text-warning ms-3 " />
                      </Button>
                    </div>
                  </Col>
                ))}
              </Row>
            </Col>
            <Col xs={12} className="d-flex flex-column align-items-center">
              <h2 id="hiphop" className="mb-4">
                Hip Hop
              </h2>
              <Row className="mb-5">
                {songsHipHop.map((item, index) => (
                  <Col key={index} xs={6} md={3} className="d-flex flex-column">
                    <img
                      onClick={() => addPlayer(item)}
                      className="img-fluid me-5"
                      src={item.album.cover_medium}
                      alt="track"
                      style={{ cursor: "pointer" }}
                    />

                    <p className="mb-1">{item.title}</p>

                    <div className="d-flex text-white align-items-center">
                      <strong>{item.artist.name}</strong>
                      <Button className="bg-transparent border-0 p-0">
                        <Star className="text-warning ms-3 " />
                      </Button>
                    </div>
                  </Col>
                ))}
              </Row>
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  );
}

export default Main;
