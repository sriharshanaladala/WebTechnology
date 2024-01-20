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