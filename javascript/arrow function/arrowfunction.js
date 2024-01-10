let arrfun1 = _ => {
    console.log("hellow world")
}
arrfun1()
// -----------------------------------

let arrfun2 = a => console.log(a);

console.log(arrfun2)
let x =arrfun2()
console.log(x)
// ---------------------------------------------
let arrfun3 = (z,y) => z+y;

let b = arrfun3(5,6)
console.log(b)
// -------------------------------------------

// hoisting in functions

demo()

function demo(){
    console.log("helloworld");
}

console.log(h)
let num1= () => console.log("helloworld")
var h = num1();


// num2()
let num2 =function () {
    console.log("hellow world")
}


