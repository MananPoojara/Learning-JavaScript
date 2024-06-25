// Making Events starts with creating Listener That linten what the F you wnat to do and call the event 


document.getElementById("event").addEventListener('click', function (e) {
    // alert("Fuck go deeper event")
    document.getElementById("event").style.background = 'red'
    //let see what happen in event
    console.log(e)
    //we can see the description where so many things are there

}, false)

//type:"Click", timestamp, clientX, clientY, ScreenX, ScreenY, srcElement : div#event, location : of host
// this are the event you can play with 


// Now Let's Go deeper
// Bubbling
// Capturing
//{addEventLitener} try in console of browser we see above terms in boolean



