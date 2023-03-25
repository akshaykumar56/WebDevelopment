import React from 'react'
import Cars from './Carsol'
import './home.css'
const Home = () => {
  return (
  <>
   <div className="my-3" style={{backgroundColor:'#87CEEB',color:'blue'}}>
    <div className="content mx-2 d-flex justify-content-center align-items-center"><p><br/><h3>Hello There!</h3><h3>I Am Akshay Kumar</h3><h3>Welcome To My Portfolio</h3><h3>Watch Out My Work!</h3></p></div>
    <Cars/>
   </div>
  </>
  )
}

export default Home
