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