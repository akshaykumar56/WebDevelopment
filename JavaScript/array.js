// var books=['harry potter','hobbit','hunger game','little prince'];
// console.log(books[books.length-1]);



//var films=[['a1',['a3','a4'],'a3'],['b1','b2','b3'],['c1','c2','c3']];
// // print c3
// console.log(films[0][1][1]);


// array iteration using loop
// var c=[1,2,3,4,5,6,7,5,3,21,3,5,7,8,65,43,2,1,2];

// for(var i=0;i<=c.length-1;i++)
// {
//    console.log(c[i]);

// }

// put items in array using loop
var number=[];
for(var i=0;i<=20;i++)
{
    number.push(i); // this means push items 'i' in array 'numbers'
}

// console.log(number);
number.forEach(function(number)
{
if(number%5===0){
    console.log(number);
}
});
