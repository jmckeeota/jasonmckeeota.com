import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
// See https://stackoverflow.com/questions/67383776/bootstrap-5-offcanvas-scrolls-back-to-top-on-close
function MyBar({data}) {

  function handleClose () {
    // this.preventDefault();
    // this.stopPropagation();
    console.log('handling close')
  }

  return (
    <>
    <Navbar expand="lg" variant='dark'>

      <Container>
        <Navbar.Brand href="#home">Jason McKe-Ota</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Offcanvas
        id={'offcanvasNavbar'}
        aria-labelledby={'offcanvasNavbarLabel-expand-${expand}'}
        placement="end"
        scroll
        // onHide={() => this.handleClose.bind(this)}
        onHide={handleClose}

        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id={'offcanvasNavbarLabel-expand-${expand}'}>
              Menu
              </Offcanvas.Title>
              </Offcanvas.Header>
            <Offcanvas.Body>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">About Me</Nav.Link>
            <NavDropdown title="Projects" id="basic-nav-dropdown">
            {data.map((navDropdownData) => (
              <NavDropdown.Item key={navDropdownData.id} href={'#' + navDropdownData.title}>{navDropdownData.title}</NavDropdown.Item>))}
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
    </>
  );
  
}

export default MyBar;