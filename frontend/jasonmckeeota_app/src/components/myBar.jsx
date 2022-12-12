import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';


function MyBar() {
  return (
    <>
    <Navbar expand="lg" variant='dark'>
      <Container>
        <Navbar.Brand href="#home">Jason McKe-Ota</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Offcanvas
        id={'offcanvasNavbar-expand-${expand}'}
        aria-labelledby={'offcanvasNavbarLabel-expand-${expand}'}
        placement="end"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id={'offcanvasNavbarLabel-expand-${expand}'}>
              Offcanvas
              </Offcanvas.Title>
              </Offcanvas.Header>
            <Offcanvas.Body>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">About Me</Nav.Link>
            <NavDropdown title="Projects" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          </Offcanvas.Body>
          </Navbar.Offcanvas>
      </Container>
    </Navbar>
    </>
  );
  
}

export default MyBar;