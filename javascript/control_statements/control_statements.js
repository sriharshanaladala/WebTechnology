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

// ==================================================
//prime numbers
let p =100;
if (p<=1)
{
    console.log(p+" is not prime");
}
else if ( p%2 && p%3)
{
    console.log(p+" is  a prime");
}
else if(p/2>=2)
{
 console.log(p+" is not a prime ");
}
else{
    console.log(p+" is a prime");
}

// ==================================================
//eligible for army or not
let age = 19;
let height = 175;
let weight = 70;
if (age<18)
{
    console.log("due to less age"+age+" years you are not aligible for army")
}
else if(height < 170)
{
    console.log("due to insufficiant height"+height+" cm you are not aligible for army")
}
else if(weight<60)
{
    console.log("due to insufficiant weight"+weight+" kg's you are not aligible for army")
}
else
{
    console.log("you are eligible for army")
}

// ==================================================
//divisible by 5 &7 or not

let num1 =35;
if (num1%5==0 && num1%7==0)
{
    console.log(num1+" is divisible by 5 and 7")
}
else {
    console.log(num1+" not divisible by 5 and 7")
}

// ==================================================
// program to check the data type
let num2="sri";
if (typeof(num2)===typeof(1))
{
    console.log(num2+" is a number type")
}
else if(typeof(num2)===typeof("string"))
{
    console.log(num2+" is a string type")
}
else if()