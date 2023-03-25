import React from 'react'
import Alert from 'react-bootstrap/Alert';


const alert = (props) => {
  return (
    <div style={{height: '50px'}}>
    {props.alert && <Alert variant={props.alert.type}>
          {props.alert.message}
    </Alert>}
    
    </div>
  )
}

export default alert
