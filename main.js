//Selecting my documents

var myForm = document.querySelector("#my-form");
var myName = document.querySelector("#name");
var myButton = document.querySelector(".btn");
var myMssg = document.querySelector(".msg");
var userList = document.querySelector("#users");
var myClear = document.querySelector(".btn2");

//adding inputs to my form
myForm.addEventListener("submit",onSubmit);
userList.addEventListener("click",remover);

function onSubmit(e){
e.preventDefault();

if(myName.value === "")
{
  myMssg.classList.add("error");
  myMssg.innerHTML = "Please enter a valid course!";
  setTimeout(()=>myMssg.remove(),500);
}
else {
  var li = document.createElement("li");
  li.appendChild(document.createTextNode(myName.value));
  var del = document.createElement("button");
  del.className = "shor";
  del.appendChild(document.createTextNode("Remove"));
  li.appendChild(del);

userList.appendChild(li);

//removing the field values
myName.value = "";
}
}
//deleting things from the userlist when clicked remove
//since its a button, it responds to a click
function remover(err){
if(err.target.classList.contains("shor")){
  var li= err.target.parentNode;
  userList.removeChild(li);
}
}
//changing the color of my section
var adder = document.querySelector(".add_course");
console.log(adder);
adder.style.fontSize = "20px";
adder.style.color = "black";
var mySection = document.querySelector("section");

//createElement
var newCreate = document.createElement("div");
//adding text elements
//create a textnodes
var newCreateText = document.createTextNode("McGill University");
newCreate.appendChild(newCreateText);

//adding the new text node to anywhere
var h1 = document.querySelector("header h1");
var header = document.querySelector("header");
header.insertBefore(newCreate,h1);

//header color changer function
//changing colors based on mouse coordinates
var header = document.querySelector("header");
header.addEventListener("mousemove",colorChanger);
function colorChanger(eve){
  header.style.backgroundColor = "rgb("+eve.offsetX+","+eve.offsetY+","+eve.offsetY+")";
}
//changing to winter background
var body = document.querySelector("body");
button.addEventListener("click",change_background);
function change_background(c){
body.style.backgroundImage = "url(winter.jpg)";
}
