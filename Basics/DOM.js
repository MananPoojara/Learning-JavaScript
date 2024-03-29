
// DOM 
let username = "";
let welcomemsg = document.getElementById("welcome-msg");
welcomemsg.textContent += username === "" ? `Guest` : username;


