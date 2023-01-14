import Container from "react-bootstrap/Container";
import React, { useState } from 'react';
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";

import "./myBar.css";
import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse";



// See https://stackoverflow.com/questions/67383776/bootstrap-5-offcanvas-scrolls-back-to-top-on-close


function MyBar({ data, myRefs, pageRef, scrollCallback, readShow }) {


  function scrollToLocation(navDropdownData, scrollCallback) {
    console.log("Bang")
    console.log(pageRef)
    console.log(myRefs);

  };
    const [show, setShow] = useState(false);
    const [isToggled, setIsToggled] = useState(false);
    const toggleShow = () => setShow((s) => !s);
    const handleClose = () => (scrollCallback(show, setShow), console.log("jsoidjsaido"));
  
  return (
    
    <div>
      <Navbar expand="lg" variant="dark" id="myBar" fixed="top">
        <Container>
          <Navbar.Brand href="#home">Jason McKe-Ota</Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" tabIndex={'-1'}
              onClick={() => toggleShow()}
              // onClick={() => setExpanded(expanded ? false : true)}
              // onClick={toggleExpand}
            />
          <Navbar.Offcanvas 
            // show={show}
            // onHide={handleClose}
            id={"offcanvasNavbar"}
            aria-labelledby={"offcanvasNavbarLabel-expand-${expand}"}
            placement="end"
            scroll
            restoreFocus="false"
            onEntered={() => setIsToggled(true)}
            onExited={() => setIsToggled(false)}
            
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={"offcanvasNavbarLabel-expand-${expand}"}>
                Menu
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="me-auto">
              <Nav.Item>
                <Nav.Link
                  eventKey="10"
                  href="#home" 
                  onClick={() => (handleClose())}>
                    Home
                  </Nav.Link>
                </Nav.Item>
                <Nav.Link href="#link" eventKey="11">About Me</Nav.Link>
                <NavDropdown title="Projects" id="basic-nav-dropdown">

                  {data.map((navDropdownData) => (
       
                    <NavDropdown.Item
                    eventKey={navDropdownData.id}
                    key={navDropdownData.id}
                    // href={"#anchor " + navDropdownData.title}
                    onClick={() => handleClose("#anchor " + navDropdownData.title)}

                    // onClick={() => this.Navbar.Toggle}
                    // onClick={(e) => scrollToLocation(e, navDropdownData.title)}
                    // onClick={() => scrollCallback()}
                    
                    >
                      {navDropdownData.title}
                    </NavDropdown.Item>
                  ))}
                  <button onClick={() => scrollCallback()}>WHY IS THIS SHIT NOT WORKING?</button>
                  <button onClick={() => readShow(isToggled)}>Is Toggled?</button>
      
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    See all projects
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Offcanvas.Body>

          </Navbar.Offcanvas>

        </Container>

      </Navbar>

    </div>
    
  );

}

export default MyBar;