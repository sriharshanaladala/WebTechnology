//forloops

for (let i=1; i<=50; i++)
{
console.log(i);
}

//do-while loops
i=0;
do{
    console.log(i)
    i++
}while (i<=10)
console.log(i)

//while loops
i=100
while(i>=50)
{
    console.log(i);
    i--
}
console.log(i)
i=50
do
{
    if(i%2==0)
    console.log(i)
    i++
}while(i>=100);

//for in

// for in loop its is  used to iterate throught the array and object 
//it gives arrauy index positions and object key 
let arr = [10,20,30,40]
for(let x in arr)
{
    console.log(x);
    console.log(arr[x]);
}

let obj = {
    name:'abc',
    sal:1000,
    id : 101,
    role:'developer'
}

for(let x in obj){
    console.log(x);
    console.log(obj[x]);
}

//for of : it gives the array element.
for(let x of arr){
    console.log(x);
}
for(let x of obj)
{
    console.log(x);
}