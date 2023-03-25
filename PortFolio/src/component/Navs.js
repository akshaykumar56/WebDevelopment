import Nav from 'react-bootstrap/Nav';

function FillExample() {
  return (
    <Nav activeKey="/home"  className='d-flex justify-content-center sticky-top ' style={{backgroundColor:'white'}}>
      <Nav.Item>
      <Nav.Link eventKey="link-1" href="/home/html">HTML</Nav.Link>
      </Nav.Item>
      <Nav.Item>
      <Nav.Link eventKey="link-2" href="/home/css">CSS</Nav.Link>
      </Nav.Item>
      <Nav.Item>
      <Nav.Link eventKey="link-3" href="/home/javascript">JavaScript</Nav.Link>
      </Nav.Item>
      <Nav.Item>
      <Nav.Link eventKey="link-4" href="/home/react">ReactJs</Nav.Link>
      </Nav.Item>
      <Nav.Item>
      <Nav.Link eventKey="link-5" href="/home/node">NodeJs</Nav.Link>
      </Nav.Item>
      <Nav.Item>
      <Nav.Link eventKey="link-6" href="/home/express">ExpressJs</Nav.Link>
      </Nav.Item>
      <Nav.Item>
      <Nav.Link eventKey="link-7" href="/home/mongo">MongoDB</Nav.Link>
      </Nav.Item>
      <Nav.Item>
      <Nav.Link eventKey="link-8" href="/home/python">Python</Nav.Link>
      </Nav.Item>
      <Nav.Item>
      <Nav.Link eventKey="link-9" href="/home/ai">AI</Nav.Link>
      </Nav.Item>
      <Nav.Item>
      <Nav.Link eventKey="link-10" href="/home/c">DataStructure</Nav.Link>
      </Nav.Item>
      <Nav.Item>
      <Nav.Link eventKey="link-11" href="/home/cpp">CPP</Nav.Link>
      </Nav.Item>
      <Nav.Item>
      <Nav.Link eventKey="link-12" href="/home/sql">Sql</Nav.Link>
      </Nav.Item>
    </Nav>
  );
}

export default FillExample;