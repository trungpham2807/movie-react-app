import React, { useState, useEffect } from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Container, Navbar, Nav, NavDropdown, Form, FormControl, Button } from "react-bootstrap"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import { useHistory } from "react-router-dom";
import SearchMovie from "../components/SearchMovie"

const NavBarMovie = () => {
  //handle events
  const [query, setQuery] = useState("");

  const HandleChange = (e) => {
    setQuery(e.target.value);
  }
  const history = useHistory();
  const HandleSubmit = (e) => {
    e.preventDefault();
    history.push(`/search/${query}`);
  }



  //render
  return (
    <div className="NavBarMovie">
      <Navbar bg="light" expand="lg">
        <Container fluid>
          <Navbar.Brand as={Link} to="/">
            <img
              src="/logo.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            /></Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <Nav.Link as={Link} to="/top-rate">Top Rate</Nav.Link>
              <Nav.Link as={Link} to="/popular-movie">Popular Movie</Nav.Link>

            </Nav>
            <Form className="d-flex" onSubmit={HandleSubmit}>
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                value={query}
                onChange={HandleChange}
              />
              <Button variant="outline-success">Login</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default NavBarMovie;



