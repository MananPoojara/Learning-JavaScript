const person1 = {
    firstname: "Manan",
    lastname: "Pujara",
    age: 19,
    isEmployed: true,
    sayhello: () => { console.log("hello i am Manan") }
}

const person2 = {
    firstname: "Abhi",
    lastname: "Pujara",
    age: 29,
    isEmployed: false,
    sayhello: () => { console.log("hello i am abhi") }
}

console.log(person1.firstname)
console.log(person1.lastname)
console.log(person1.age)
console.log(person1.isEmployed)
person1.sayhello()
console.log("#######################################")
console.log(person2.firstname)
console.log(person2.lastname)
console.log(person2.age)
console.log(person2.isEmployed)
person2.sayhello()
