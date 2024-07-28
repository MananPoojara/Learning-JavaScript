
// DOM 
let username = "";
let welcomemsg = document.getElementById("welcome-msg");
welcomemsg.textContent += username === "" ? `Guest` : username;


const myh1 = document.createElement('h4');
const space = document.createElement('br');


myh1.innerText = "Hello writing from js using document.createElement()"

document.body.appendChild(space)
document.body.appendChild(space)
document.body.appendChild(space)
document.body.append("i append the text")
document.body.append("DOM is Just api that have multile objects functions and manymore so document is our page and body has all the content using fucntion we can manupilate the document")
document.body.appendChild(myh1)

// document.onclick = () => {
//     document.body.append("i append the text")
// }

//when we click on page anywhere the text apper 



