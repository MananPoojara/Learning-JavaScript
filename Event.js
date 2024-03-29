// eventlistner = addeventlistener(evnet, callback)
// emoji.addEventListener(event, callback);

const emoji = document.getElementById("event")

emoji.addEventListener("click", event => {
    event.target.style.backgroundColor = "tomato"
    event.target.textContent = "Ouch!! 🤯"
});


emoji.addEventListener("mouseover", event => {
    event.target.style.backgroundColor = "yellow";
    event.target.textContent = "Don't Click 😞"
});

emoji.addEventListener("mouseout", event => {
    event.target.style.backgroundColor = "lightgreen";
    event.target.textContent = "Click Me 😄"
});
