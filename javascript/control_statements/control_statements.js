//controll statements

let a = 10;
if(a==10)
{
console.log("great");
}
// =======================================================
let b="hello"
if (b==="hi")
{
    console.log("hello")
}
else
{
    console.log("bye")
}
// ====================================================

let c=0
if (c>0)
{
    console.log("positive number")
}
else if(c<0)
{
    console.log("negative number")
}
else
{
    console.log("number is zero")
}
// ==================================================

let d=10
if (d>0)
{
    console.log(d+ " is positive")
    if (d%2==0)
    {
        console.log("and is even")
    }
    else{
        console.log("and odd")
    }
}
else if(d<1)
{
    console.log(d+" is negitive")
    if (d%2==0)
    {
        console.log("and even")
    }
    else{
        console.log("and odd")
    }
}
else{
    console.log("number is zero")
}
// ===============================================
let color ="brown"
switch(color)
{
    case "red": console.log("red color");
    break
    case "blue": console.log("blue color");
    break
    case "green":console.log("green color");
    break
    case "yellow": console.log("yellow color");
    break
    default : console.log("color not matches")
}
console.log("end")


let p = 12;
if (p%1==0 && p%p==0 )
{
    console.log("it is a prime");
}
else{
    console.log("it is not a prime")
}
