import React from 'react'
import IMG from './CPP.jpg'
const Cpp = () => {
  return (
    <div className='container d-flex flex-column align-items-center justify-content-around my-5'>
    <h3>CPP</h3>
    <h4>Watch My Work With CPP At My <a href='https://github.com/akshaykumar56/CPP'>Github</a></h4>
    <img src={IMG} alt="CPP" className='my-4 shadow p-3 mb-3 bg-white rounded' />
    <p className='my-2'>C++ is a cross-platform language that can be used to create high-performance applications.C++ was developed by Bjarne Stroustrup, as an extension to the C language.C++ gives programmers a high level of control over system resources and memory.<br/><br/>
    <h4>Why Uses CPP? </h4>
    a) C++ is an <b>object-oriented programming language </b>that is viewed by many as the best language for creating large-scale applications.<br/>
    b) C++ is a superset of the C language.<br/>
    c) A related programming language, Java, is based on C++ but optimized for the distribution of program objects in a network such as the Internet.<br/><br/>
    <h4>Why Use C++?</h4>
    a) C++ can be found in today's operating systems, Graphical User Interfaces, and embedded systems.<br/>
    b) C++ is an object-oriented programming language which gives a clear structure to programs and allows code to be reused, lowering development costs.<br/>
    c) C++ is portable and can be used to develop applications that can be adapted to multiple platforms.<br/>
    d) C++ is fun and easy to learn!<br/><br/>
     </p>
    </div>
  )
}

export default Cpp
