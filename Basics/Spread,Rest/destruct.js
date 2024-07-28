// destructuring = extract values from arrays and objects,
//                 then assign them to variable in a convenient way
//                 [] for array
//                 {} for objects



// Swap variable

// For Arrays
let a = 1;
let b = 2;
[a, b] = [b, a];
console.log(a)
console.log(b)
let colors = ["red", "yellow", "blue", "green", "white"];
console.log(colors);
[colors[0], colors[4]] = [colors[4], colors[0]];
console.log(colors);


const [firstColor, secondColor, ThirdColor, ...extraColor] = colors;
console.log(firstColor);
console.log(secondColor);
console.log(ThirdColor);
console.log(extraColor);

// For Objects
const person1 = {
    firstname: 'manan',
    lastname: 'pujara',
    age: 30,
    job: 'chef'
}
const person2 = {
    firstname: 'abhi',
    lastname: 'pujara',
    age: 43,
}

const { firstname, lastname, age, job = "unemployee" } = person2;
console.log(firstname);
console.log(lastname);
console.log(age);
console.log(job);

// For Function
function displayperson({ firstname, lastname, age, job = "unemployee" }) {
    console.log(`firstname : ${firstname}`);
    console.log(`lastname : ${lastname}`);
    console.log(`age : ${age}`);
    console.log(`job : ${job}`);
}
displayperson(person2)





