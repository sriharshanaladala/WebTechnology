//strings : group of charecters.
//string in ` ` then it is known as templates literals
//datatype of string is string

let str1 = "hello world";
console.log(str1);
//split()
console.log(str1.split(""));
//toUpperCase()
console.log(str1.toUpperCase());

let str2 = "Hello WORLD"
//toLowerCase()
console.log(str2.toLowerCase());
console.log(str2);

console.log(str2.length);
//startsWith()
console.log(str1.startsWith('hell'));
//endsWith()
console.log(str1.endsWith("rld"));
//charAt()
console.log(str1.charAt(0));
//charCodeAt()
console.log(str1.charCodeAt(2));
//indexof()
console.log(str1.indexOf('l'));
//lastIndexof()
console.log(str1.lastIndexOf("l"));
//substring()
console.log(str1.substring(2,7));
//subtring():negitive indexing not possible
console.log(str1.substring(-11,-5));
//slice()
console.log(str1.slice(2,9));
//slice()
console.log(str1.slice(-11,9));
//substr()
console.log(str1.substr(3,6));

str = "jspiders"
//repeat
console.log(str.repeat(15));
//trim() it will remove wwhite space in teh starting and ending o fgiven string and return trimmed 
let str3 = "    this is java script class"
console.log(str3.length);
let trimmedstr = str3.trim()
console.log(trimmedstr);
console.log(trimmedstr.length);
console.log(str3.trimEnd());
console.log(str3.trimEnd().length);
console.log(str3.trimStart());
console.log(str3.trimStart().length);
//includes(): it will check whether given charecter is present in string or not.if present it returns true elese it returns false
console.log(str);
console.log(str.includes("j"));
console.log(str.includes("J"));
console.log(str.includes("j",5));
console.log(str.includes("q",0));
console.log("jspiders".includes("q",-1));


//replace() -it wil lreplace only the first occurence of the given string.
let str4 = "js stands for java script.js is used for dynamic changes of web pages.js is a single threaded ";
console.log(str4.replace("js", "react"));
console.log(str4.replaceAll("js", "react"));

//!string inter polation : it is used to avoid normal way of concatinating astring with a variable
let name = "geetha";

console.log("mam name is "+name);
console.log("mam name is +name");
console.log('mam name is '+name);
console.log('mam name is +name');
console.log(`mam name is ${name}`);
console.log("mam name is ${name}");




