import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function BasicExample() {
  return (
    <Navbar bg="light" variant='light' className='d-flex justify-content-around  border-bottom'>
      <Container className='d-flex justify-content-between'>
        <div>
        <Navbar.Brand href="/home">Akshay</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        </div>
        <div>
        <Navbar.Collapse id="basic-navbar-nav">
          
          <Nav className="me-auto">
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/project">Project</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        </div>
      </Container>
    </Navbar>
  );
}

export default BasicExample;