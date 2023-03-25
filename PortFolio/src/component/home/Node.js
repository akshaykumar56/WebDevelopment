import React from 'react'

const Node = () => {
  return (
    <div className='container d-flex flex-column align-items-center justify-content-around my-5'>
    <h3>NodeJS</h3>
    <h4>To watch my work with Python please visit my github-<a href='https://github.com/akshaykumar56/NodeJs'>Click Here</a></h4>
    <p className='my-2'>
    Node.js is a cross-platform, open-source server environment that can run on Windows, Linux, Unix, macOS, and more.<br/> <br/>
    Node.js is a back-end JavaScript runtime environment, runs on the V8 JavaScript Engine, and executes JavaScript code outside a web browser.<br/><br/>
    Node.js lets developers use JavaScript to write command line tools and for server-side scripting. The ability to run JavaScript code on the server is often used to generate dynamic web page content before the page is sent to the user's web browser.<br/><br/>
    Consequently, Node.js represents a "JavaScript everywhere" paradigm, unifying web-application development around a single programming language, as opposed to using different languages for the server- versus client-side programming.<br/><br/>
    Node.js has an event-driven architecture capable of asynchronous I/O. These design choices aim to optimize throughput and scalability in web applications with many input/output operations, as well as for real-time Web applications (e.g., real-time communication programs and browser games).
    </p>
    </div>
  )
}

export default Node
