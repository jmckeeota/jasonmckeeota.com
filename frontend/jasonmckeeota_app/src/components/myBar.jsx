import Container from "react-bootstrap/Container";
import React, { useState, useEffect, useRef } from 'react';
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import myHashLink from "./myHashLink";
import "./withReactRouterDom.js";
import {
  useLocation,
  useNavigate,
  useParams
} from "react-router-dom";

import Main from "../main.jsx"
import { Link } from "react-router-dom";

import "./myBar.css";
import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse";



// See https://stackoverflow.com/questions/67383776/bootstrap-5-offcanvas-scrolls-back-to-top-on-close



function withRouter(Component) {
  function ComponentWithRouterProp(props) {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();
    return (
      <Component
        {...props}
        router={{ location, navigate, params }}
      />
    );
  }

  return ComponentWithRouterProp;
}

function MyBar( data ) {
  const [headerHeight, setHeaderHeight] = useState(150);
  const headerRef = useRef(null);

function updateHeaderHeight() {
  const height = headerRef.current.clientHeight
  if (headerHeight !== height) {

  console.log(headerRef)
  }
}

  useEffect(() => {
    updateHeaderHeight()
  });
  return (
    <div
    id="header"
    className="header sticky"
    // Use a ref to get div height
    ref={headerRef}
    >
        <Navbar collapseOnSelect key="1" bg="light" expand="lg" id="myBar" className="mb-3" fixed="top">
          <Container>
            <Navbar.Brand href="#">Navbar Offcanvas</Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-lg`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-lg`}
              aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-lg`}>
                  Offcanvas
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="#action1" onClick={() => updateHeaderHeight()}>Home</Nav.Link>
                  <Nav.Link href="#action2">Link</Nav.Link>
                  <NavDropdown title="Projects" id="basic-nav-dropdown">
                    {
                      
                    data.data.map((navDropdownData) => (
                    <NavDropdown.Item
                    key={navDropdownData.id}

                    eventKey={navDropdownData.id}
                    data-height={headerHeight}
                    as={myHashLink}
                    to={"/#anchor " + navDropdownData.title}

                    // href={"#anchor " + navDropdownData.title}
                    onClick={() => (console.log("testing"))} 
                    >
                    {navDropdownData.title}
                  </NavDropdown.Item>))
                  }
                  </NavDropdown>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
    </div>
  );
  
}

export default withRouter(MyBar);