
// Synchronous running one by one 


var sum = (a, b) => {
    return a + b;
}
console.log(sum(3, 4));//7
console.log(sum(3, 4));//7
console.log(sum(3, 4));//7
console.log(sum(3, 4));//7
console.log(sum(3, 4));//7


// Creating async code or function we can use Promise for better way to callbacks
// And not going to callback hell 
// setTimeout(function () {
//     console.log("Hello there")
//     setTimeout(function () {
//         console.log("Inside Another Callback ")
//     }, 2000) // It took 3 second but we need 2 sec cause the 1000 func() is in callback queue
// }, 1000)

// Without Promisse it like above also called nested callback 

// Let's Make Async Function using just Callback
//return nothing
// callback func() as input
//here end use give you what to do 
var myAsyncFunc = (cb, duration) => {
    setTimeout(cb, duration);
}
myAsyncFunc(function () {
    console.log("Hello world")
}, 1000)


// Now Using Promise Class
//return promise
//here promise gives you what to do 
const AsynPromis = (duration) => {
    const p = new Promise((resolve) => {
        setTimeout(resolve, duration)
    })
    return p;
}
AsynPromis(1000)
    .then(function () {
        console.log("Using Promise")
    }) //this the new way give callback 


// some Practice for Promise 

var DrinkCoffee = (age) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (age > 15) {
                resolve("Your coffee is ready");
            } else {
                reject("Sorry, you are underage.");
            }
        }, 2000);
    });
}

DrinkCoffee(18)
    .then(function (msg) {
        console.log(msg);
    })
    .catch(function (msg) {
        console.log(msg);
    });
