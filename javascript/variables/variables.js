// //variables
// //var key word
// var a;            //declaration
// a=10;            //INITIALIZ
// console.log(a);    //UTILIZE
// var a;              //re declare
// a=20;             //re init
// console.log(a);     //re utilize

// var a = 30;
// console.log(a);      //re declare and initialize in same line

// let b;                       //declaration
// b="helo";                 //INITIALIZ
// console.log(b);             //UTILIZE
// //let b                     //re declare is not possible
// b="world"                 //re init
// console.log(b);             //re utilize
// //let b = "helloworld";  //re declare and initialize in same line is not possible

// // const c;
// // c = "hi";
// // console.log(c)
// const c=10              //re declare and initialize in same line is only possible
// console.log(c)

let a = {
    name:"sri"
}
let b = a

console.log(b);
b.name="abji"
console.log(a);