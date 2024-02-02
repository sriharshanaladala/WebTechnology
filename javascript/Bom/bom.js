var a= 10;
console.log(a);
console.log(window.a);
window.console.log("djhckuhcs")

let features = "height =700,width=700"
let googlewin = window.open("https://goole.com","google",features)
let youtube = window.open("https://goole.com","google",features)
googlewin.close()
youtube.close()
//dom - socument object model 
// document
console.log(window.document);
console.log(window.document.write);
//direct
console.log(document.title);
z =20 
console.log(window.z);

let h1 = document.querySelector("h1")
console.log(h1);
h1.innerText = "document object model"
let div1 = document.getElementById("div1")
div1.innerHTML=`<section> 
                    <article> 
                        <p> loreem ipsum</p>
                    </article>
                </section>`

h1.textContent = "Dom"

//add styles
// h1.style.color = "red";
// h1.style.backgroundColor = "blue";
// h1.style.border = "1px solid yellow"

h1.style.cssText = "color:red; background-color:blue; text-align:center"


h1.setAttribute("title","document object mode;")

let lis = document.getElementsByTagName("li")
console.log(lis);
// lis[0].innerText += "list_item"
// lis[1].innerText += "list_item"
// lis[2].innerText += "list_item"
// lis[3].innerText += "list_item"

for(let i=0; i<lis.length;i++){
    lis[i].innerText += "list_item"
}
let links = document.querySelectorAll("a")
console.log(links);
// links[0].innerText+=" me"
// links[1].innerText+=" me"
// links[2].innerText+=" me"

for(let i =0;i<links.length;i++)
{

    links[i].innerText+=" me"

}

let t =document.getElementsByTagName("tbody")
console.log(t);
t[0].innerHTML += `<tr>
                <td>02</td>
                <td>anupama</td>
                <td>javadeveloper</td
                </tr>
                <tr>
                <td>03</td>
                <td>shaa</td>
                <td>dabba_developer</td
                    </tr>`
let imge = document.getElementsByClassName("div2")
console.log(imge);
imge[0].innerHTML += `<img src="https://cdn.pixabay.com/photo/2023/11/07/12/49/wolves-8372284_1280.jpg">
                        <img src="https://cdn.pixabay.com/photo/2023/07/04/08/31/cats-8105667_640.jpg"
                    `

let images= document.getElementsByTagName("img")
console.log(images);
for(let i=0;i<images.length;i++)
{
    images[i].style.cssText = "height: 200px; width:200px"
}


let li = document.getElementsByTagName("li")
console.log(li);

li[0].className = "item1"
li[1].classList.add("item","item2")

let li2 = document.getElementsByClassName("item")
console.log(li[2]);
li2 = document.getElementsByClassName("item2")
console.log(li2);

li[2].classList.add("item","item3");
li[2].classList.remove("item");
li[2].classList.toggle("item")
li[2].classList.toggle("item")

let bool =  li[2].classList.contains("item")
console.log(bool);

console.log(window)
console.log(window.innerHeight);
console.log(window.innerWidth);


//screen - it is the child object of window object.
//it gives the information of users screen like height width etc

console.log(window.screen);
console.log(window.screen.availHeight);
console.log(window.screen.availWidth);
console.log(window.screen.colorDepth);
console.log(window.screen.pixelDepth);

//history - it is the child object of window object 
//it represents the urls visited by the user
//it stores all urls visited in form of array.
//it gives information of no of urls visites by user, we can go forward and back ward, page or any particular url using go()
console.log(window.history.length);
//window.history.forward()
//window.history.backward()
//window.history.go()


//navigator:- it is also child object of window object
//it is used for users browser detection
//it gives details of users browser like appname,version,etc...
console.log(window.navigator.appName);
console.log(window.navigator.appCodeName);
console.log(window.navigator.appVersion);
console.log(window.navigator.javaEnabled);
console.log(window.navigator.cookieEnabled);

//location - it is used to get information of url like pathname, protocol, hostname,etc..,
console.log(window.location);
console.log(window.location.href);
console.log(window.location.hostname);
console.log(window.location.protocol);
console.log(window.location.pathname);

//dom  - it is used to for  dynamic changes on the web page

let sec1 = document.getElementById("section1")
console.log(sec1);
console.log(sec1.nextElementSibling);
console.log(sec1.nextElementSibling.nextElementSibling.firstElementChild.firstElementChild);
console.log(sec1.nextElementSibling.nextElementSibling.firstElementChild.lastElementChild);
console.log(sec1.parentElement);
console.log(sec1.children);
console.log(sec1.childNodes);////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
console.log(sec1.lastElementChild);
console.log(sec1.firstElementChild);











