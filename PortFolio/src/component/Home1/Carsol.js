import Carousel from 'react-bootstrap/Carousel';
import IMG from './IMG.jpg'
function UncontrolledExample() {
  return (
    <Carousel >
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={IMG}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3 style={{ color: 'white' }}>WEB DEVELOPMENT</h3>
          <p style={{ color: 'white' }}>Web development refers to the creating, building, and maintaining of websites.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={IMG}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3 style={{ color: 'white' }}>AI</h3>
          <p style={{ color: 'white' }}>Artificial intelligence involves replicating human intellectual processes through machines, especially computers.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={IMG}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3 style={{ color: 'white' }}>PYTHON</h3>
          <p style={{ color: 'white' }}>
          Python is a general-purpose language, meaning it can be used to create a variety of different programs and isn't specialized for any specific problems.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledExample;