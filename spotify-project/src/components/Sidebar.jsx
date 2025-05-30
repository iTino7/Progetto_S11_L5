import React from "react";
import { Button, Col, Container, Form, Nav } from "react-bootstrap";
import { BookFill, HouseDoor, HouseDoorFill } from "react-bootstrap-icons";
import { NavLink } from "react-router-dom";
import Main from "./Main";
import Player from "./Player";

function Sidebar() {
  return (
    <>
      <Container fluid>
        <aside className="col col-2">
          <Nav
            className="navbar navbar-expand-md fixed-left justify-content-between"
            id="sidebar"
          >
            <Container
              fluid
              className="container flex-column align-items-start"
            >
              <NavLink to="/" className="navbar-brand">
                <img
                  src="/src/assets/logo/logo.png"
                  alt="Spotify Logo"
                  width="131"
                  height="40"
                />
              </NavLink>
              <Container fluid className="p-0">
                <NavLink
                  to="/"
                  className="nav-item nav-link d-flex align-items-center text-secondary "
                >
                  <HouseDoorFill className="fs-4 me-2" /> Home
                </NavLink>
                <NavLink
                  to="/favourites"
                  className="nav-item nav-link d-flex align-items-center text-secondary "
                >
                  <BookFill className="fs-4 me-2" /> Your Library
                </NavLink>
                <Form className="mt-4">
                  <Form.Control
                    className="form-control"
                    type="text"
                    placeholder="Scrivi una canzone..."
                  />
                </Form>
              </Container>
            </Container>
            <Container fluid className="nav-btn flex-column">
              <Button className="btn signup-btn"> Sign Up </Button>
              <Button className="btn login-btn">Login</Button>
              <NavLink to="/">Cookie Policy</NavLink>
              <NavLink to="/"> Privacy </NavLink>
            </Container>
          </Nav>
        </aside>
        <Main />
        <Player />
      </Container>
    </>
  );
}

export default Sidebar;
