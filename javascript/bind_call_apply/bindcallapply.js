//call()
let person1 = {
    firstname : "Dinga",
    lastname : "raja",
    sal : 1000,
    fullname : function (address,pincode){
        let fullname = this.firstname+this.lastname;
        console.log(fullname+" live in " + address+" pincode is "+pincode);
    }
}
person1.fullname("Ameerpet", 876)
person2 = {
    firstname : "dingi",
    lastname : "rani"
}
let person3 = {
    firstname:"mahesh",
    lastname:"babu"
}
person1.fullname.call(person2, "punjagutta",9876)
person1.fullname.call(person3,"banjarahills", 9876)


//apply()
person1.fullname.apply(person3, ["goa",3456])
person1.fullname.apply(person3,["punjagutta",56789])

//bind()
let bounfun = person1.fullname.bing(person2);
console.log(bounfun);
bounfun()