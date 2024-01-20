console.log("start");
console.log(a);
var a = 10;
let b = 20;
const c = 30;
function demo()
{
    var a = 100;
    let b
    const c = 300; 
}
demo();
console.log(a,b,c);
console.log('end');
function demo2()
{
    var a = 25;
    let b
    const c = 35;
    function demo3(){
       const c = a+b;
        return
    }
}