import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Nav from 'react-bootstrap/Nav';

function BasicExample(props) {
  return (
    <Card style={{ width: '18rem' , backgroundColor:`${props.mode==='light'?'grey':'black'}`, color:`${props.mode==='light'?'black':'white'}`}}>
      <Card.Img variant="top" src={props.imageUrl}/>
      <Card.Body>
        <Card.Title >{props.title}</Card.Title>
        <Card.Text> {props.descripton} </Card.Text>
        <Card.Text> Author: {props.author}</Card.Text>
        <Card.Text> Date: {props.date!=null?new Date(props.date).toGMTString():" "}</Card.Text>
        <Button variant="primary">{props.source}</Button>
        <Nav.Link href={props.newsUrl}>Read More</Nav.Link>
      </Card.Body>
    </Card>
  );
}

export default BasicExample;