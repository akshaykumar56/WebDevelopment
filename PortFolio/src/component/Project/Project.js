import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import React from 'react'
import TEXT from './TEXT.png'
import NEWS from './NEWS.png'
const Project = () => {
  return (
    <div>
      <div className="d-flex flex-column justify-content-center align-items-center">
         <h3 className="my-3">Projects</h3>
         <div className="container my-3  justify-content-center">
             <div className="row" >
             <div className="col-md-4 my-3" key={1}>
            <Card>
            <Card.Img variant="top" src={TEXT} />
            <Card.Body>
            <Card.Title>React Project</Card.Title>
            <Card.Title>Text Analyser</Card.Title>
            <Card.Text>
            While Creating This Website I Undestand The Concepts Of <b>Props,State,Hooks.</b>
            </Card.Text>
            <div className="d-flex flex-column">
            <Button variant="success" className="my-3"><a href='https://adorable-smakager-8a97e2.netlify.app/'> </a>Get Code</Button>
            <Button variant="success" ><a href='https://adorable-smakager-8a97e2.netlify.app/'> </a>Visit Now</Button>
            </div>
            </Card.Body>
            </Card>
              </div>

            <div className="col-md-4 my-3" key={2}>
            <Card>
            <Card.Img variant="top" src={NEWS} />
            <Card.Body>
            <Card.Title>React Project</Card.Title>
            <Card.Title>NEWSFeed</Card.Title>
            <Card.Text>
            This Is Basically A Website Based On NewsAPI. In This Project I Learn How Single Page Websites Work. I Learn About How to Retrive Data By Hitting APi's, Infite Loading Concept and Many More.
            </Card.Text>
            <div className="d-flex flex-column">
            <Button variant="success" className="my-3"><a href='https://adorable-smakager-8a97e2.netlify.app/'> </a>Get Code</Button>
            </div>
            </Card.Body>
            </Card>
              </div>


            <div className="col-md-4 my-3" key={3}>
            <Card>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
             Some quick example text to build on the card title and make up the bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
            </Card.Body>
            </Card>
            </div>


              <div className="col-md-4 my-3" key={4}>
              <Card>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
             Some quick example text to build on the card title and make up the bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
            </Card.Body>
            </Card>
              </div>

              <div className="col-md-4 my-3" key={5}>
            <Card>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
             Some quick example text to build on the card title and make up the bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
            </Card.Body>
            </Card>
              </div>

              <div className="col-md-4 my-3" key={6}>
              <Card>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
             Some quick example text to build on the card title and make up the bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
            </Card.Body>
            </Card>
              </div>

            </div>
        </div>
    </div>
  </div>
  )
}

export default Project
