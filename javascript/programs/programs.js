//wap ti iterate through array
arr1 = [10,20,30,40,50]
function iterate(arr){
    for(let i=0; i<arr.length; i++){
        console.log(arr[i]);
    }
}
iterate(arr1)

console.log("_______________________________________________");


//wap to print only odd index elements in form of an array

arr2 = [1,2,3,4,5,6,7,8,9,10]
function odd(arr){
    for (let j= 0; j<arr.length; j++)
    {
        if (arr[j]%2 != 0)
            {
                console.log(arr[j])
        }
    }
}
odd(arr2)
console.log("_______________________________________________");

//wap to print only even index
function even(arr){
    for (let j= 0; j<arr.length; j++)
    {
        if (arr[j]%2 == 0)
            {
                console.log(arr[j])
        }
    }
}
even(arr2)
console.log("_______________________________________________");


//wap to print
function sum(arr){
    sum=0;
    for(let i=0; i<arr.length;i++){
    sum+=arr[i]
    console.log(sum);

    } 
}
sum(arr2)

console.log("_______________________________________________");

console.log("write a program to display sum of all the array elements :");
function sum2(arr){
    sum=0
    new_arr=[]
   let sum_arr = arr.map((element)=>{
    // console.log(sum_arr);
        new_arr.push(element)
        // n = index
        return(sum +=element)
    
   })
   console.log("sum of array ["+ new_arr+"] is " + sum)
}
sum2(arr2)
console.log("_______________________________________________");
console.log("WRITE A PROGRAME TO DISPLAY CHECK THE DATA TYPE OF EACH ELEMENT IN THE GIVEN ARRAY");

let arr3= ['hello',25,5.5,true,null,97n] 
new_array=[]
function datatype(arr){
    let type = arr.map((element)=>{
        data_type = typeof(element)
        console.log("data type of "+element+" is "+data_type);
    })
}
datatype(arr3)

console.log("_______________________________________________");

console.log("write a programe to check whether array is having odd numbers or not");

let arr4 = [1,3,6,5,7,11,15,26,34,33]
let odd_numbers=[]
function odd_or_not(arr){
    let have = arr.map((element,index)=>{
        odd_numbers.push(element%2!=0)     
    })
    // console.log(odd_numbers);
    odd_array=[]
    for(let i=0;i<arr.length;i++){
        if (odd_numbers[i]==true){
            odd_array.push(arr[i])   
        }
    }
    console.log(odd_array+" are the  odd numbers present in array" )

}
odd_or_not(arr4)

console.log("_______________________________________________");

console.log("write a programe to print occurence of each element");
let arr5 = [1,1,5,6,7,6,8,5,20,25,20]

function occurence(arr){
    let count = 1;
    let results = []
    for(let i =0; i<arr.length;i++)
    {
        if (arr[i]==arr[i++]){
            count+=1
        }
        else{
            results +=arr[i] + "----->"+count+"times\n";
            count=1;
        }
    }
}

occurence(arr5)
console.log("______________________________________________");
console.log("WRITE A PROGRAME TO CHECK GIVEN ARRAY IS HOMOGENEOUS OR HETROGENOS")

console.log("______________________________________________");


let arr6 = ["hello", 10 , true, 20, "hi",null, false, 30]
function number_type(arr){
    arr_of_string=[]
    arr_of_numbers=[]
    arr_of_bool=[]
    for(let i=0; i<arr.length;i++)
    {
        if (typeof(arr[i])==='number'){
            arr_of_numbers.push(arr[i]) 
    }
        else if(typeof(arr[i])==='string'){
            arr_of_string.push(arr[i])
        }
        else if(typeof(arr[i])==='boolean'){
            arr_of_bool.push(arr[i])
        }
}
console.log(arr_of_bool);
console.log(arr_of_numbers);
console.log(arr_of_string)
}
number_type(arr6)


console.log("______________________________________________");

//wap to check whether given element is present in array or not 
console.log("wap to check whether given element is present in array or not");

function is_present_or_not(arr,element){
    for(let i=0;i<arr.length;i++)
    {
        if(arr[i]===element)
        {
            console.log(element+" is presnt in given array");
        }
        else
        {
            console.log(element+" is not present in given array");
        }
    }
}
is_present_or_not(arr6,50)

console.log("______________________________________________");
//method2
let given_no = 10;
let count = 0;
for(let i=0;i<arr6.length;i++)
{
 if(arr6[i]===given_no)
 {
    count++
 }
}
if(count>0){
    console.log(given_no+" is present in the array");
    // return true
}
else
{
    console.log(given_no+" is not present in the array");
    // return false
}

console.log("______________________________________________");

let students =[
    {
        name: "abhi",
        id:101,
        marks:{
            js:100,
            react:70
        }
    },
    {
        name:"ramu",
        id :"102",
        marks:{
            js : 90,
            react:50
        }
    }
]
// function object_prsent(arr,obj){
//     for(let i=0;i<arr.length;i++)
//         {
//             if (arr[i])===
//         }
// }
// write a promme to create array of objects 

console.log("______________________________________________");

//write a program to add two numbers
console.log("write a program to add two numbers");

let a = 10;
let b=20;
console.log((a+b)+" using '+' operator ");

console.log("______________________________________________");
let addition = (a,b) => console.log("sum of "+a+" & "+b +" is "+(a+b) +" using arrow function");
addition(2,3)

console.log("______________________________________________");
function add(a,b){
    return a+b
}
let x= add(3,5);
console.log(x+" using function declaration and return statement")
console.log("______________________________________________");

//write a programe to multiply of two numbers
console.log("write a programe to multiply of two numbers");
//using operator
a = 120;
b=130;
console.log("product of "+a+" & "+b+" is "+ (a*b) +" using '*' operator")

console.log("______________________________________________");
function product(a,b){
    console.log("product of "+a+" & "+b+" is "+ (a*b) +" using function");
}
product(110,10)

console.log("______________________________________________");

//write a program to add float numbers
console.log("write a program to add float numbers");
function add_float(a,b){
   let result= parseFloat(a)+parseFloat(b)
   return result.toFixed(2) 
}
let z=add_float("2.678","3.567")
console.log(z+" is the out put of sum of two floats using parsefloat and tofixed methods");

console.log("_____________________________________________");

//write a program to check if a numbe is odd or even
console.log("write a program to check if a numbe is odd or even");
let even_or_odd = a => {
    if (a%2!=0){
        return ( a+" is odd")
    }
    else if(a%2===0){
        return( a+" is even")
    }
}
let y=even_or_odd(6)
console.log(y);
console.log(typeof(even_or_odd));
console.log("____________________________________________");

//write a programe to check if a number is a positive or negitive

console.log("write a programe to check if a number is a positive or negitive");
function positive_or_negitive(a){
    return(+(a>=0) ? a+" is positive" : a+ 'is negitive')
}
console.log(positive_or_negitive(0));

console.log("____________________________________________");


//wwap to print each charecters in given string 
let str1 = "hi, how are you?"

function charecters(str){
    for(let i = 0; i<str.length; i++){
       console.log(str[i]+" is present in "+i );
    }
}
charecters(str1)
console.log("____________________________________________");

//wwap to count no of charecters in given string avoiding spaces

function count_char(str){
    count = 0
    for (let i =0; i<str.length; i++)
    {
        if (str[i] != " ")
            count++
    }
    console.log(count);
    
}
count_char(str1)
console.log("____________________________________________");

//map  to  print unique charecters in given string
function unique_char(str){
    aray=[]
    count=0
    for(let i =0; i<str.length;i++){
        if (str[i]!=str[i+1]){
        aray.push(str[i])
        count++ 
        }
        else {
            aray =[]
            count=0
        }
    }

    console.log(aray);

}
unique_char(str1)