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
}, false)//third parameter is the boolen for Event Propogation
//by default false
document.getElementById("beta").addEventListener('click', function (e) {
    console.log("Beta Beta Hota Hai")
    e.stopPropagation();
}, false)

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


// In some case we have saperate script for ul and li and both are doing their saprate things so we have stop the propogatio
//e.stopPropagation();


// New Func for prevent default behaviour of events like we have one google href that go to google when click but we don't want to go google so we can use preventdefault()

document.getElementById('web').addEventListener('click', function (e) {
    e.preventDefault()
    document.body.append("google click kiya")
}, false)