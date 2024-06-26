// spread opr = ... allows an itrable such as 
//             array and string to bo expanded into saprate element

let numbers = [0, 1, 2, 3, 54, 6, 3]
let maximum = Math.max(...numbers)
let Minimum = Math.min(...numbers)
console.log(Minimum)
console.log(maximum)
console.log(numbers)


let string = "Hello World"
let letters = [...string].join('-');
console.log(letters)
let bc = [2.2, 232, 322, 3]


const obj1 = {
    a: 'from a',
    b: 'from b',
    c: 'from c',
    d: {
        g: 'from g',
        h: 'from h',
    }
}

const obj2 = { ...obj1 }

console.log(obj2)