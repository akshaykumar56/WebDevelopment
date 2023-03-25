import React from 'react'
import IMG from './JavaSc.jpg';
import './javas.css'
const Javas = () => {
  return (
    <div className='container d-flex flex-column align-items-center justify-content-around my-5'>
    <h2>JavaScript</h2>
    <h4>Watch My Work With JAVASCRIPT At My <a href='https://github.com/akshaykumar56/JavaScript'>Github</a></h4>
    <img src={IMG} alt="JAVASCRIPT" className='my-4 shadow p-3 mb-3 bg-white rounded' />
    <p className='my-2'>
    <b>JavaScript</b> often abbreviated as JS, is a programming language that is one of the core technologies of the World Wide Web, alongside <b>HTML</b> and <b>CSS</b>.<br/><br/>
    As of 2022, 98% of websites use JavaScript on the client side for webpage behavior, often incorporating third-party libraries.<br/><br/>
    All major web browsers have a dedicated JavaScript engine to execute the code on users devices.<br/><br/>
    JavaScript is a high-level, often just-in-time compiled language that conforms to the ECMAScript standard.<br/><br/>
    It has dynamic typing, prototype-based object-orientation, and first-class functions.<br/><br/>
    It is multi-paradigm, supporting event-driven, functional, and imperative programming styles.<br/><br/>
    It has <b>Application Programming Interfaces</b> (APIs) for working with text, dates, regular expressions, standard data structures, and the <b>Document Object Model</b> (DOM).<br/><br/>
    JavaScript engines were originally used only in web browsers, but are now core components of some servers and a variety of applications. The most popular runtime system for this usage is <b>Node.js</b>.<br/><br/>
    <h4>Advantage Of JavaScript: </h4>
    The merits of using JavaScript are:<br/><br/>
    a) Less server interaction: You can validate user input before sending the page off to the server. This saves server traffic, which means less load on your server.<br/>
    b) Immediate feedback to the visitors: They don't have to wait for a page reload to see if they have forgotten to enter something.<br/>
    c) Increased interactivity: You can create interfaces that react when the user hovers over them with a mouse or activates them via the keyboard.<br/>
    d) Richer interfaces: You can use JavaScript to include such items as drag-and-drop components and sliders to give a Rich Interface to your site visitors.<br/><br/>

    <h4>Limitations of JS:</h4>
    We cannot treat JavaScript as a full-fledged programming language. It lacks the following important features<br/><br/>
    a) Client-side JavaScript does not allow the reading or writing of files. This has been kept for security reason.<br/>
    b) JavaScript cannot be used for networking applications because there is no such support available.<br/>
    c) JavaScript doesn't have any multi-threading or multiprocessor capabilities.<br/><br/>

    <h4>Depending on enviroment on which JS run JavaScript is of two types:</h4>
    a) <b>Client-Side JavaScript </b> is an extended version of JavaScript that enables the enhancement and manipulation of web pages and client browsers. In a browser environment, your code will have access to things provided only by the browser, like the document object for the current page, the window, functions like alert that pop up a message, etc. The main tasks of Client-side JavaScript are validating input, animation, manipulating UI elements, applying styles, some calculations are done when you don't want the page to refresh so often. In web developing it's the browser, in the user's machine, that runs this code, and is mainly done in JavaScript. Also, this code must run in a variety of browsers.<br/><br/>
    b)  <b>Server-Side JavaScript </b> is an extended version of JavaScript that enables back-end acces to databases, file systems, and servers. Server-side JavaScript, is JavaScript code running over a server local resource, it's just like C# or Java, but the syntax is based on JavaScript. A good example of this is <b>Node.JS</b>, with Node.JS you write JavaScript to program on the server side, and that code can be seen as normal C#, C, or any other server-side language code. Moreover, with server-side code, you can still send JavaScript to the client-side, but there is a great difference between both, because the client-side code is restricted to the client's machine resources, in terms of computing power and permissions. For example, client-side JavaScript can't access the client's hard disk, while with server side you can access your server hard disk without any problem. The primary advantage to server-side scripting is the ability to highly customize the response based on the user's requirements, access rights, or queries into data stores. 
    </p>
    </div>
  )
}

export default Javas
