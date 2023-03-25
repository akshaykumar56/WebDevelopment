import React from 'react'
import Loading from '../VAyR.gif'
const Spinner = () => {
  return (
    <div className='container my-3' style={{height:100,width:100}}>
      <img src={Loading} alt="Loading" style={{height:90,width:90}}/>
    </div>
  )
}

export default Spinner
