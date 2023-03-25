// function orange(){
//     console.log('I am orange')
// }
// orange();

function callback(func){
    func();
}

let red=function orange(){
    console.log('I am red orange')
}
// red();
callback(red);