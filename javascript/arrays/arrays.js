// let arr = [10, 20 , 30];

// let num1 =  arr.push("hello","25")
// console.log(arr);
// console.log(num1);


// let num2 = arr.pop();
// console.log(arr);
// console.log(num2);


// let num3 = arr.unshift(-1, 0);
// console.log(arr);
// console.log(num3)


// let num4 = arr.shift();
// console.log(arr);
// console.log(num4);


// let num5 = arr.indexOf(20);
// console.log(num5);


// let num6 = arr.lastIndexOf(30);
// console.log(num6)

// let num7 = arr.slice(2,6);
// console.log(num7);

// let num8 = arr.splice(3,0,5);
// console.log(arr);




//concat() - it is used to contact two or more array.
let num1 = [1,2,3]
let num2 = [4,5,6]
let num3 = [7,8,9]
console.log(num1.concat(num2,num3));
console.log(num1)

let arr1 = [10,20,30,40]
console.log(arr1)
let value = arr1.forEach(element => {
});

//with out using map method

let newarr = []

for(let i=0; i<arr1.length; i++)
{
    let ele = arr1[i]
    newarr.push(ele)
    
}
// using 
// let modifiesarr1 = arr1.map((ele,index)=>{
//     console.log(ele);
//     console.log(index);
// })

//filter 

let filteredarr1 = arr1.filter((element)=>
    {
        console.log(element)
        return element>20
    }
)

console.log(arr1);
console.log(filteredarr1);

//map function only give result but not elements asout put
let modifiesarr2 = arr1.map((element)=>{
    return element>20
})
console.log(modifiesarr2);

// reduce() - it will reduce array elements into single value / output
// it accepts a call back function
let value1 =arr1.reduce((a,b)=>{
    console.log(a,b)
    return a+b;
})
console.log(value1);

//using sort

let arr3 = [20,10,50,30]

let sort_val = arr3.sort(()=>{
    console.log(sort_val)
}
)