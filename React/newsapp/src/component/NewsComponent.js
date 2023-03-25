import React, { Component } from 'react'

export default class Newscomponent extends Component {
  render()
   {
    let {author,date,title,description,imgURL, newsURL}=this.props;  // way to declare props in class based components
    return (
      
      <div>
         <div className="card my-3 mx-3 " style={{backgroundColor:'red'}}>
         <img src={imgURL!=null?imgURL:"https://www.jitnashik.edu.in/assets/front/img/news/news2.png"} className="card-img-top" alt="..."/>
         <div className="card-body">
         <h6 className="card-title">Date: {date!=null?new Date(date).toGMTString():" "}</h6>
          <h6 className="card-title">Author: {author!=null?author:" "}</h6>
         <h5 className="card-title">{title!=null?title:" "}</h5>
          <p className="card-text">  {description!=null?description:" "}</p>
          <a href={newsURL} target="_blank" rel="noreferrer" className="btn btn-sm btn-dark">Read More</a>
          </div>
</div>

      </div>
    )
  }
}

