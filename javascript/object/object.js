let arr1 = ['hello',20,40,[5,10,15,20,25.30]]

let person = {
    name : "sri",
    age : 25,
    sal : 2000,
    family : {wife:"seetha",child: "hari"}

}
//!keys(): will give all the keys of an object in the form of an arry
console.log(Object.keys(person));

//values(): it will give all the values of given object in the form of array
console.log(Object.values(person));

//!seal(): is used to seal given object 
// once we seal the an object then we cannot add new (key:value) pair in to an object
//we can modify the existing values
console.log(Object.seal(person));

//! issealed() : it is used to check whether given object issealed or not 
console.log(Object.isSealed(person));
person.age = 40;
console.log(Object.values(person));

//! Freez() : it is used to freez the given object 
// once the object is frezzed then wwe can not add the new  key- value pair and we cannot modify exisisting keys also
console.log(Object.freeze(person));
person.age =60;
console.log(Object.values(person));

//!isfrozen(): it is used to check whether given object is freezed or not.
console.log(Object.isFrozen(person));
console.log(Object.values(person.family.child));
console.log(person.family.child);

console.log(Object.isSealed(arr1));

//!assign(): it will concate the objects
//it accepts n no of arguments
//1st argument is target object 
//remaining arguments are sources object target object 
//all sources object is concatinated to target object and it returns that 

let obje1 = {
    name: "sri"
}
let obje2 = {
    age: 22
}
let obje3 = {
    email:"123@gmail.com"
}

console.log(Object.assign(obje1,obje2,obje3));




