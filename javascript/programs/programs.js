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
    sum+=i
    console.log(sum);

    }
    
}
sum(arr2)

function sum2(arr){
    sum=0
    for(let i=0; i<arr.length;i++){
        let sum_arr =arr.map((element)=>{
            // console.log(sum_arr)
            return sum+=element
        })
    }
}
sum2(arr2)