let arr1 = ['hello',20,40,[5,10,15,20,25.30]]

let person = {
    name : "sri",
    age : 25,
    sal : 2000,
    family : {wife:"seetha",child: "hari"}

}

console.log(Object.keys(person));
console.log(Object.values(person));
console.log(Object.seal(person));
console.log(Object.isSealed(person));
person.age = 40;
console.log(Object.values(person));
console.log(Object.freeze(person));
person.age =60;
console.log(Object.values(person));
console.log(Object.isFrozen(person));
console.log(Object.values(person.family.child));
console.log(person.family.child);



