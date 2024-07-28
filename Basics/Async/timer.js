// Using arrow function with setTimeout
const delayedFunction = () => {
    console.log("This function will be called after 3 seconds.");
};

setTimeout(delayedFunction, 3000);

// Using arrow function with setInterval
const intervalFunction = () => {
    console.log("This function will be called every 2 seconds.");
};

setInterval(intervalFunction, 2000);
