import React from 'react'
import IMG from './CSS.jpg';
import './Css.css'
const Css = () => {
  return (
    <div className='container d-flex flex-column align-items-center justify-content-around my-5'>
    <h1>CSS</h1>
    <h4>Watch My Work With CSS At My <a href='https://github.com/akshaykumar56/CSS'>Github</a></h4>
    <img src={IMG} alt="CSS" className='my-4 shadow p-3 mb-3 bg-white rounded' />
    <p className='my-2'><b>Cascading Style Sheets</b> is a style sheet language used for describing the presentation of a document written in a markup language such as HTML or XML. CSS is a cornerstone technology of the World Wide Web, alongside <b>HTML</b> and <b>JavaScript</b>.<br/><br/>
    CSS describes how HTML elements are to be displayed on screen, paper, or in other media<br/><br/>
    <h4>The Various Terms Used In CSS are: </h4><br/>
    <h5>A. CSS Selectors</h5>
    In CSS, selectors are patterns used to select the element(s) you want to style.<br/>
    1 .class: Select the item with class.<br/>
    2 #id: Selects the element with id.<br/>
    3 *: Selects all elements.<br/>
    4 ::after : Insert something after the content of element.<br/>
    5 ::before : Insert something before the content of element.<br/>
    6 :nth-child() : Use to select the nth child.<br/><br/>

    <h5>B. CSS Styles</h5>
    1. <b>Background Properties:</b> The background property is a shorthand property for:<br/>
    a) background-color<br/>
    b) background-image<br/>
    c) background-size<br/>
    d) background-position<br/><br/>

    2. <b>Border Properties:</b> The border property is a shorthand property for:<br/>
    a) border-width<br/>
    b) border-style<br/>
    c) border-color<br/><br/>

    3. <b>Padding:</b> An element's padding is the space between its content and its border.<br/><br/>

    4. <b>Margin:</b> Set the margin of the selected element.<br/><br/>

    5. <b>Transform:</b> The transform property applies a 2D or 3D transformation to an element. This property allows you to rotate, scale, move, skew, etc., elements.<br/><br/>

    6. <b>Transition:</b> The transition property is used to add the transition effect to the selected element.<br/><br/>

    7. <b>Position</b> The position property specifies the type of positioning method used for an element.<br/>
      Various Position Property Values are: <br/>
      a) Static<br/>
      b) Relative<br/>
      c) Fixed<br/>
      d) Sticky<br/>
      e) Absolute<br/><br/>

    8. <b>Display:</b> The display property specifies the display behaviour(the type of rendering box) of an element.<br/>
      Various Display Property Values are<br/>
      a) Inline<br/>
      b) Block<br/>
      c) Flex<br/>
      d) Grid<br/>
      e) Table<br/><br/>
    
    9. <b>Justify-content:</b> Specifies the alignment between the items inside a flexible container when the items do not use all available space.<br/><br/>

    10. <b>Align-items:</b> Center the alignments for all the items of the flexible element.

    </p>
    
    </div>
  )
}

export default Css
