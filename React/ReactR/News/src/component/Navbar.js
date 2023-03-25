import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Dropdown from 'react-bootstrap/Dropdown';
import { MDBSwitch } from 'mdb-react-ui-kit';
function BasicExample(props) {                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        
  return (
    <Navbar bg={props.mode} expand="lg" variant={`${props.mode==='light'?'light':'dark'}`} style={{position:'relative'}}>
      <Container>
        <Navbar.Brand href="/home">NEWSFeed</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link  href="/home">Home</Nav.Link>
            <Nav.Link  href="/business">Business</Nav.Link>
            <Nav.Link  href="/entertainment">Entertainment</Nav.Link>
            <Nav.Link  href="/general">General</Nav.Link>
            <Nav.Link  href="/health">Health</Nav.Link>
            <Nav.Link  href="/science">Science</Nav.Link>
            <Nav.Link  href="/sports">Sports</Nav.Link>
            <Nav.Link  href="/technology">Technology</Nav.Link>
          </Nav>
        </Navbar.Collapse>
  
      <div className='container d-flex flex-row justify-content-around align-items-center'>
        <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
       Country
      </Dropdown.Toggle>
       
      <Dropdown.Menu>
        <Dropdown.Item onClick={()=>{props.setCountry('us')}} key={1}>USA</Dropdown.Item>
        <Dropdown.Item onClick={()=>{props.setCountry('in')}} key={2}>INDIA</Dropdown.Item>
        <Dropdown.Item onClick={()=>{props.setCountry('ru')}} key={3}>RUSSIA</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>

    <MDBSwitch id='flexSwitchCheckDefault' label={props.text} onClick={props.ToogleMode}/>
    </div>
      </Container>
    </Navbar>
  );
}

export default BasicExample;