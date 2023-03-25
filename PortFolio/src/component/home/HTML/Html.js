import React from 'react'
import IMG from './HTML.jpg';
import IMG2 from './HTML2.png';
import IMG3 from './HTML3.jpg';
import './html.css'
const Html = () => {
  return (
    <div className='container d-flex flex-column align-items-center justify-content-around my-5'>
    <h2>HTML</h2>
    <h4>Watch My Work With HTML At My <a href='https://github.com/akshaykumar56/HTML'>Github</a></h4>
    <img src={IMG} alt="HTML"  className='my-4 shadow p-3 mb-3 bg-white rounded'/>
    <p className='my-2' style={{textAlign:'justify'}}>The <b>HyperText Markup Language</b> is the standard markup language for documents designed to be displayed in a web browser. It is often assisted by technologies such as <b>Cascading Style Sheets</b> and <b>JavaScript</b>.<br/><br/>
    Web browsers receive HTML documents from a web server or from local storage and render the documents into multimedia web pages. HTML describes the structure of a web page semantically and originally included cues for its appearance.<br/><br/>
    HTML elements are the building blocks of HTML pages.HTML provides a means to create structured documents by denoting structural semantics for text such as <b>headings, paragraphs, lists, links, quotes, and other items.</b><br/><br/>
    Tags such as &lt;img /&gt; and &lt;input /&gt; directly introduce content into the page. Other tags such as &lt;p&gt; and &lt;/p&gt; surround and provide information about document text and may include sub-element tags. Browsers do not display the HTML tags but use them to interpret the content of the page.<br/><br/>
    A form of HTML, known as HTML5, is used to display video and audio, primarily using the &lt;canvas/&gt; element, together with JavaScript.
    The HTML code contains some sections such as DOCTYPE, meta tags, head, and body. All the tags that we include in an HTML file, needs to be first opened and then closed by angular brackets. Let us now understand different sections one by one.<br/><br/>
    <h4>Important HTML Elements</h4> <br/>
    <b>Doctype HTML</b>- Doctype HTML justifies that it is a HTML document. So, we are defining specifically for a browser to understand that it is an HTML document. To understand more about the type of documents, you can visit here.<br/><br/>
    <b>&lt;html lang= “en”&gt;</b> - It is the opening part of the HTML tag that tells us the language of the document is in English.<br/><br/>
    <b>&lt;head&gt;</b> - Head contains all the meta-tags in it which is used to describe the contents of a website. Meta means providing information about information. Therefore, meta tags are used to define the keywords and descriptions on our website. Head also contains the title of the website and all the external files like CSS and JavaScript that we link to it.<br/><br/>
    <b>&lt;body&gt;</b> - Body contains all the contents of the webpage in it. However, in the beginning, our website may look a little uglier but after including stylesheets it will start looking attractive. <br/><br/>
    <h4>Title, Script, Link, and Meta Tags</h4><br/>
    <b>&lt;meta charset= "UTF-8"&gt;</b>- It simply means that the characters that are used will be of UTF-8. It declares the page's character encoding. It should contain a standard IANA MIME name for character encodings. Moreover, authors are encouraged to use UTF-8.<br/><br/>
    <b>&lt;meta name= "viewport" content= "width=device-width, initial-scale=1.0"&gt;</b>-This tag is used to make your website responsive and adjust its width in such a way that it looks good in both PC or mobile. It helps in making the website mobile friendly also.<br/><br/>
    <b>&lt;meta http-equiv= "X-UA-Compatible" content= "ie=edge"&gt;</b>-This tag is used to make your website responsive and adjust its width in such a way that it looks good in both PC or mobile. It helps in making the website mobile friendly also.<br/><br/>
    <b>&lt;meta name= "description" content = "This is a description"&gt;</b>- To add a description, we have to write the above statement and write your own description in the content part.<br/><br/>
    <b>&lt;meta name= "keywords" content= "html tutorial, css tutorial"&gt;</b>-Keywords are those special words through which a user reach any website. You can add the keywords in the content part of the tag.<br/><br/>
    <b>&lt;meta name= "robots" content= "INDEX, FOLLOW"&gt;</b>-If we want our website to be indexed in Google or other search engines and bots should follow all the links present on the website, then we have to write this.<br/><br/>
    <b>&lt;link rel= "stylesheet" href= "akshay.css" &gt;</b>-To link our stylesheets named as “harry.css” in the HTML code, we have to write this.<br/><br/>
    <b>&lt;script src="akshay.js"&gt;&lt;/script&gt;</b>-To add Javascript file<br/><br/>
    <h4>Visualization of HTML document:</h4>
    <img src={IMG2} alt="Visualization" className='my-4' />
    <h4>Basic HTML tags</h4>
    1. The <b>&lt;h1&gt;, &lt;h2&gt;, &lt;h3&gt;, &lt;h4&gt;, &lt;h5&gt;,&lt;h6&gt; </b> element defines heading in decreasing font-size respectively.<br/>
    2. The <b>&lt;p&gt;</b> element defines a paragraph <br/>
    3. The <b>&lt;form&gt;</b> element is used to create an form for user input.<br/>
    4. The <b>&lt;input&gt;</b> element is used to take input from the user.<br/>
    5. An unordered list starts with the <b>&lt;ul&gt;</b> tag. Each list item starts with the <b>&lt;li&gt;</b> tag.<br/>
    6. An ordered list starts with the <b>&lt;ol&gt;</b> tag. Each list item starts with the <b>&lt;li&gt;</b> tag.<br/>
    7. The <b>&lt;img&gt;</b> tag is used to embed an image in a web page.<br/>
    8. The <b>&lt;div&gt;</b> tag defines a division or a section in an HTML document.<br/>
    9. The <b>&lt;button&gt;</b> tag defines a clickable button.<br/>
    10. The <b>&lt;a&gt;</b> tag defines a hyperlink, which is used to link from one page to another.<br/>
    11. The <b>&lt;table&gt;</b> tag defines an HTML table. An HTML table consists of one <b>&lt;table&gt;</b> element and one or more <b>&lt;tr&gt;</b>, <b>&lt;th&gt;</b>, 
    and <b>&lt;td&gt;</b> elements.<br/>The <b>&lt;tr&gt;</b> element defines a table row, the <b>&lt;th&gt;</b>
    element defines a table header, and the <b>&lt;td&gt;</b> element defines a table cell.<br/>
    12. The <b>&lt;i&gt;</b> tag defines a part of text in an alternate voice or mood. The content inside is typically displayed in italic. <br/>
    13. The <b>&lt;link&gt;</b> tag defines the relationship between the current document and an external resource. <br/>
    14. The <b>&lt;textarea&gt;</b> tag defines a multi-line text input control.<br/>
    15. The <b>&lt;video&gt;</b> tag is used to embed video content in a document, such as a movie clip or other video streams.<br/><br/>
  
    <h4>HTML Semantics</h4>
    HTML semantics are very useful in defining the structure of a webpage<br/><br/>
    <img src={IMG3} alt="Semantics" />
    </p>
    </div>
  )
}

export default Html
