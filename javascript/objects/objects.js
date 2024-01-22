 var kia_seltos = {
    fueltype: "petrol",
    airbags:6,
    tires:"mrf",
    mailage: "16km/lr",
    color:"black",
    engine:"1200cc"
 }
 let pulsar220 = {
    color: "red",
    mailage:"40km/lr",
    engine:"220cc"
 }

 let redmi9_power = {
    category : "mobile",
    ram:"4gb",
    internal_memory: "120gb"
 }


 function pen(brand,color,price)
 {
    this.brand = brand
    this.color = color
    this.cost = price
 }

 let pen1 = new pen("parker", "black", 230);
 console.log(pen1);
 let pen2 = new pen("cello", "red", 200);
 console.log(pen2);
 
 function mobile(brand, ram, camera, rom, color)
 {
    this.brand = brand
    this.ram = ram
    this.camera = camera
    this.internal_memory= rom
    this.color = color
 }
 let mobile1= new mobile("redmi", "8gb","40px", "120gb", "red" )
 console.log(mobile1);


 let person = {
    name: function(){
        this.firstname = "Sri"
        this.lastname ="harsha"
        return(this.firstname+this.lastname)
    },
    sex: "male",
    address : {
        dorno:"3-17",
        village : "davagudur",
        mandal: "zarugumalli",
        distric:"prakasam",
        state:"andhrapradesh",
        country:"india"
    }

 }
 console.log(person.name());
 console.log(person)
console.log(person.firstname)
console.log(person.address)


function Test(a){
      console.log("test function executed");
      console.log(arguments[0]);
      console.log(arguments[1]);
      console.log(arguments[2]);
      console.log(arguments[3]);
      console.log(arguments[4]);

   for(let i = 0; i<arguments.length; i++)
   {
      console.log(arguments[i])
   }

}

Test(10,20,30,40,50)