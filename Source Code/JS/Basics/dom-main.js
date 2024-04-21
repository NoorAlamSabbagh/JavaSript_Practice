// var element;

//element = document.all;

//element = document.head;

//element = document.title;

//element = document.body;

//element = document.links;

//element = document.links[0];

//element = document.images;

//element = document.forms;

// element = document.doctype;

//element = document.URL;

//element = document.domain;

//element = document.baseURI;

//element = document.getElementById("header");

//element = document.getElementsByClassName("list");

//element = document.getElementsByClassName("list")[0]

//element = document.getElementsByTagName("ul");

// element = document.getElementsByTagName("ul")[2]

// console.log(element);

// Dom Part 2:Get Set Method
// var element;

//element = document.getElementById("header").innerText;

//element = document.getElementById("content").innerText;

//element = document.getElementById("content").innerHTML;

//element = document.getElementById("header").innerHTML;

//element = document.getElementById("header").getAttribute("class");

//element = document.getElementById("header").getAttribute("style");

//element = document.getElementById("header").getAttribute("onClick");

//element = document.getElementById("header").getAttributeNode("onClick");

//element = document.getElementById("header").getAttributeNode("style");

//element = document.getElementById("header").getAttributeNode("style").value;

//element = document.getElementById("header").attributes;

//element = document.getElementById("header").attributes[1];

//element = document.getElementById("header").attributes[2].name;

/* DOM Set Method */

// document.getElementById("header").innerHTML = "<h1>WOW</h1>";

// element = document.getElementById("header").setAttribute("style","border:10px dotted yellow");

// element = document.getElementById("header").attributes[1].value = "xyz";

// element = document.getElementById("header").removeAttribute("style");

// element = document.getElementById("header").removeAttribute("class");

// console.log(element);

// part3: Querry Selector and QuerrySelectorAll
// var element;

// element = document.querySelector("#header").innerHTML = "<h1>WOW</h1>";

// element = document.querySelector("#header").getAttribute ("class");

// element = document.querySelectorAll(".list");

// element = document.querySelectorAll( ".list")[1].innerHTML;

// element = document.querySelectorAll("ul");

// element = document.querySelectorAll("ul")[1].innerHTML;

// element = document.querySelectorAll("#header h1");

// element = document.querySelectorAll("#header h1")[1].innerHTML;

// console.log(element);

// Part4: DOM CSS Styling Methods
// var element;

// element = document.querySelector("#header").style.border;

// element = document.querySelector("#header").style.color;

// document.querySelector("#header").style.backgroundColor = "tan";

// document.querySelector("#header").style.color = "blue";

// document.querySelector("#header").className = "abc xyz";

//element = document.querySelector("#header").className;

// document.querySelector("#header").classList = "abc xyz";

// element = document.querySelector("#header").classList;

// document.querySelector("#header").classList.add("xyz","efg");

// element = document.querySelector("#header").classList;

// document.querySelector("#header").classList.remove("xyz");

// element = document.querySelector("#header").classList;

// console.log(element);





//Paart5: AddEventListener
var element;

/*document.getElementById("header").onclick = abc;
// document.getElementById("header").onmouseenter = abc;

function abc(){
    document.getElementById("header").style.background = "red"; 
}*/


/*document.getElementById("header").addEventListener("mouseenter",abc);
   document.getElementById("header").addEventListener("click", function(){
       document.getElementById("header").style.border = "10px solid red"; 
   });*/

/*document.getElementById("header").addEventListener("click", abc);
   document.getElementById("header").addEventListener("click", function() {
      this.style.border = "10px solid red";
   }); */ 

// with removeEventListener

//document.getElementById("header").removeEventListener('mouseleave',abc);

//document.getElementById("header").addEventListener("click",xyz);

function abc(){
    document.getElementById("header").style.background = "green";
}

// function xyz() {
//     document.getElementById("header").removeEventListener('mouseleave',abc);
// }
