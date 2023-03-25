import React from 'react'
import IMG from './React.jpeg'
import './react.css'
const React1 = () => {
  return (
    <div className='container d-flex flex-column align-items-center justify-content-around my-5'>
    <h2>ReactJS</h2>
    <h4>Watch My Work With React At My <a href='https://github.com/akshaykumar56/WebDevelopment/tree/main/React'>Github</a></h4>
    <img src={IMG} alt="React" className='my-4 shadow p-3 mb-3 bg-white rounded'/>
    <p className='my-2'>
      <b>React</b> is a free and open-source front-end JavaScript library for building user interfaces based on components.
      It is maintained by <b>Meta (formerly Facebook)</b> and a community of individual developers and companies.<br/><br/>
      React can be used as a base in the development of <b>single-page, mobile, or server-rendered applications with frameworks like Next.js</b>. However, React is only concerned with the user interface and rendering components to the DOM, so creating React applications usually requires the use of additional libraries for routing, as well as certain client-side functionality.<br/><br/>
      <h5>React</h5> 
      a) React is a JavaScript library for building user interfaces.<br/>
      b) React is used to build single-page applications.<br/>
      c) React is a JavaScript library created by Facebook.<br/>
      d) React is a User Interface (UI) library.<br/>
      e) React is a tool for building UI components.<br/><br/>

      <h5>How Does React Works?</h5>
      a) React creates a VIRTUAL DOM in memory.<br/>
      b) Instead of manipulating the browser's DOM directly, React creates a virtual DOM in memory, where it does all the necessary manipulating, before making the changes in the browser DOM.<br/>
      c) React only changes what needs to be changed!.<br/>
      d) React finds out what changes have been made, and changes only what needs to be changed.<br/><br/>
      

      <h5>What Is JSX?</h5>
      a) JSX stands for JavaScript XML.<br/>
      b) JSX allows us to write HTML in React.<br/>
      c) JSX makes it easier to write and add HTML in React<br/><br/>

      <h5>Why Use JSX?</h5>
      a) It is faster than regular JavaScript because it performs optimization while translating the code to JavaScript.<br/>
      b) Instead of separating technologies by putting markup and logic in separate files, React uses components that contain both. We will learn components in a further section.<br/>
      c) It is type-safe, and most of the errors can be found at compilation time.<br/>
      d) It makes easier to create templates.<br/><br/>
      </p>
    </div>
  )
}

export default React1
