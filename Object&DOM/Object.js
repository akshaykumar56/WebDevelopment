// var movie={
//     title:'akshay',
//     roll:40,
//     object:{
//         toll:'ram',
//         till:'rajesh'
//     },
//     array:[12,13,14,16,32,23]
// }

// console.log(movie.roll);
// console.log(movie.object.toll);
// console.log(movie.array);
// console.log(movie.array[1]);


//////////////////////////////////////////Complex DataStructure////////////////////////////////////////
var movie={
    title:'akshay',
    roll:40,
    object:{
        toll:'ram',
        till:'rajesh',
        object1:{
            tell:'radha',
            tin:'ramesh',
            array2:[12,5,6,3,4,6,8,7,6]
        }
    },
    array:[12,13,14,16,32,23]
};

console.log(movie.object.object1.array2[4]);



var sheldon={
    name:'sheldon',
    age:34,
    hasGone:true,
    friends:['pemmy','ramu'],
    say:function()
    {
        console.log('hello sheldon');
    }
}
sheldon.say();


var larry={
    name:'larry',
    age:33,
    hasGone:true,
    friends:['pemmy','ramu'],
    say:function()
    {
        console.log('hello larry');
    }
}
larry.say();