import React, { Component } from 'react'
import Loading from "../Skateboarding.gif"
export default class loading extends Component {
  render() {
    return (
      <div className='text-center'>
        <img src={Loading} alt="Loading" />
      </div>
    )
  }
}
