// using callbacks you don't have to repeat yourself

var Displaysum = (s) => {
    console.log(s);
}

var sum = (n1, n2, myCallback) => {
    sum = n1 + n2;
    myCallback(sum);
}

sum(3, 4, Displaysum)

// here we have one func is display some data and one function sum two number so as a example if we have some function take req data and some function add logic or read the req data and then response to user we can use callback so we don't have to call two function pass the param as a parameter to function 




// Example we are checking user is auth or not so i have two func one where user giving input one for checking the validation and now so userInfo collect the users info and now the checkuser() check the validation so no need to call both func just use callback 

var userInfo = (uname, passwd, Callbackfn) => {

    console.log("Enter the User name : " + uname)
    console.log("Enter the Password: " + passwd)
    Callbackfn(uname, passwd);
}

var checkUser = (name, pass) => {

    var allowedChars = "abcdefghijklmnopqrstuvwxyz1234567890";
    let authName = false;
    let authPass = false;

    for (let char of allowedChars) {
        if (name.includes(char)) {
            authName = true;
        }
        if (pass.includes(char)) {
            authPass = true;
        }
    }

    if (authName && authPass && pass.length >= 8) {
        console.log("Authenticate User")
    }
    else {
        console.log("Not Authenticate User")

    }

}


userInfo("xyz", "123478", checkUser)




var square = (n) => {
    return n * n;
}
var cube = (n) => {
    return n * n * n;
}
var quad = (n) => {
    return n * n * n * n;
}

var callback = (num1, num2, fn) => {
    let square1 = fn(num1)
    let square2 = fn(num2)
    return square1 + square2;
}

console.log(callback(2, 2, square))
console.log(callback(2, 2, cube))