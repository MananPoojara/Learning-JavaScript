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


//now we have UL  and  LI so start with bubbling
document.getElementById("baap").addEventListener('click', function (e) {
    console.log("Baap Baap Hota Hai")
}, true)//third parameter is the boolen for Event Propogation
//by default false
document.getElementById("beta").addEventListener('click', function (e) {
    console.log("Beta Beta Hota Hai")
}, true)

// Here The Propgation is
// ** false ** //
// so if we click on li(hi) that is inside ul so ul callback is called and then li
// Bottom to up approch like li call first then ul
// Beta Beta Hota Hai
//Baap Baap Hota Hai
//Bubbling Up Bottom to up



// But in Case of
// ** True **
//it's a Capture Mode top to bottom
// Baap Baap Hota Hai
// Beta Beta Hota Hai
