import React from 'react'
import IMG from './Mongo.png'
import './Mongo.css'
const Mongo = () => {
  return (
    <div className='container d-flex flex-column align-items-center justify-content-around my-5'>
    <h3>MongoDB</h3>
    <h4>Watch My Work With Express At My <a href='https://github.com/akshaykumar56/WebDevelopment/tree/main/mongoDB'>Github</a></h4>
    <img src={IMG} alt="Mongo" className='my-4 shadow p-3 mb-3 bg-white rounded'/>
    <p className='my-2'>
    <b>MongoDB</b> is a document database. It stores data in a type of <b>JSON format called BSON</b>.A record in MongoDB is a document, which is a data structure composed of key value pairs similar to the structure of JSON objects.<br/><br/>
    <h4>A MongoDB Document</h4>
    <b>Records</b> in a MongoDB database are called <b>documents</b>, and the <b>field values</b> may include <b>numbers, strings, Booleans, arrays, or even nested documents.</b><br/><br/>
    <h5>Example Of MongoDB Document</h5>
    &#123;<br/>
	  title: "Post Title 1",<br/>
	  body: "Body of post.",<br/>
	  category: "News",<br/>
	  likes: 1,<br/>
	  tags: ["news", "events"],<br/>
	  date: Date()<br/>
    &#125;<br/><br/>

    </p>
    </div>
  )
}

export default Mongo
