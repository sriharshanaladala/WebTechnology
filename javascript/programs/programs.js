//wap ti iterate through array
arr1 = [10,20,30,40,50]
function iterate(arr){
    for(let i=0; i<arr.length; i++){
        console.log(arr[i]);
    }
}
iterate(arr1)

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
odd_numbers=[]
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
