// The Document Object Model (DOM) is a platform and language-neutral interface 
// that allows programs and scripts to dynamically access and update the content, structure, 
// and style of a document.

// It defines the logical structure of documents and the way a document is accessed and manipulated.


// var heading=document.querySelector('h1');
// heading.style.color="blue";

// var isyellow=true;
// var body=document.querySelector('body');
// setInterval(function(){
//     if(isyellow)
//     {
//      body.style.background='white';
//     }
//     else{
//         body.style.background='yellow';
//     }
//     isyellow=!isyellow;
// },5000);



/////////////////////////////////////select methods////////////////////////////////////
//1.document.getElementById()
// var para= document.getElementById("oakacademy");
// console.log(para);
// para.style.color='red';



//2.document.getElementByClassName()
// var classname= document.getElementsByClassName("background");
// console.log(classname); --->return list

// we can select elements like this
// classname[0];
// classname[1];
// x= classname.length;
// console.log(x);



//3.document.getElementsByTagName()
// var tagname=document.getElementsByTagName('p');
// console.log(tagname);



//4.document.querruSelector()
// var qname=document.querySelector('h1');  //-->select the first element that matches
// console.log(qname);

// var qaname=document.querySelector('oakacademy');         //  --->it is wrong way
// var qaname=document.querySelector('#oakacademy');        //  ---> for id with oakacademy 
// var qaname=document.querySelector('.background');        //   ---> for class with background 



//5.document.querySelectorAll()
// var qaname=document.querySelectorAll('h1');  
// console.log(qaname);



/////////////////////////// manipulation  methods in javascript//////////////////////


// var divtomanipulate =document.querySelector('.background');

// // backgroundColor-->in javascript
// divtomanipulate.style.backgroundColor='red';
// divtomanipulate.style.height='50px';
// divtomanipulate.style.width='600px';
// divtomanipulate.style.fontSize='30px';
// divtomanipulate.style.border='5px solid black';

// divtomanipulate.classList.add('addclass');
// divtomanipulate.classList.remove('addclass');


// divtomanipulate.classList.toggle('addclass');
// divtomanipulate.classList.toggle('addclass');
// divtomanipulate.classList.toggle('addclass');


///////////////////////////////////////////InnerHTML///////////////////////////////////////////////
// var para = document.querySelector("#oakacademy");
// para.textContent="oak is the best academy really";
// console.log(para.textContent);
// para.innerHTML='oak is the bext academy but <strong> code with harry</strong> is the bestest'

// document.getElementById("demo").innerHTML = 'html';
// document.getElementById("demo").textContent = 'html';
//document.getElementById("myP").innerText='text';

//////////////////////////////////////////manipulate attributes///////////////////////////////////////
// var mylink=document.querySelector('a');
// console.log(mylink.getAttribute('href'));
// mylink.setAttribute('href','https://www.facebook.com/');
// console.log(mylink.getAttribute('href'));
// mylink.textContent="go to facebook";


//////////////////////////////////////////////////Event Handlers////////////////////////////////////////
// button.addEventListener('event',function());
// var para = document.querySelector("#demo");


// var button = document.querySelector('#btn1');
// button.addEventListener('click',function(){
//     console.log('you clicked the button');
//     para.style.backgroundColor='red';
// })

// var nav  = document.querySelector('ul');
// nav.addEventListener('click',function(){
//     console.log('you clicked the nav');
//     nav.style.backgroundColor='blue';
// });

//////////////////////////////////////////callback function////////////////////////////////////
var oakParagraph = document.querySelector('#oakacademy');
function toggleBackground(){
    oakParagraph.classList.toggle('ravi');           // ravi is declared in css
}

oakParagraph.addEventListener('click',toggleBackground);      // toggleBackground is a collback function
// oakParagraph.addEventListener('click',toggleBackground()); -->//it will call itself unless we click or not



////////////////////////////////////////////Events in JavaScript/////////////////////////////
var oakParagraph = document.querySelector('#oakacademy');
oakParagraph.addEventListener('mouseover',function(){
    oakParagraph.style.color='blue';
    })
oakParagraph.addEventListener('mouseout',function(){
        oakParagraph.style.color='red';
    })