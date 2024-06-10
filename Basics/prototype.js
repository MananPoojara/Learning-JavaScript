const dude = {}
console.log(dude)
dude.name = "MANNNNNN";
dude.age = 30
console.log(dude)

const brother = ['ben', 'sam']
console.log(brother)
var name = "Manan"




class human {
    talk() {
        return "Talking";
    }
}
class Human {
    talk() {
        return "Talking";
    }
}
// undefined
class SuperHuman extends Human {
    fly() {
        return "Flying"
    }
}





// undefined
const sam = new SuperHuman();
// undefined
console.log(sam.fly);
// SuperHuman { }
// sam.fly
// ƒ fly(){ return "Flying" }
console.log(sam.talk);
// sam.talk
// ƒ talk() {
//     return "Talking";
// }


// SuperHuman { } [[Prototype]]: Humanconstructor: class SuperHumanfly: ƒ fly()length: 0name: "fly"arguments: (...)caller: (...)[[FunctionLocation]]: VM948: 1[[Prototype]]: ƒ()[[Scopes]]: Scopes[2][[Prototype]]: Objectconstructor: class Humantalk: ƒ talk()length: 0name: "talk"arguments: (...)caller: (...)[[FunctionLocation]]: VM784: 2[[Prototype]]: ƒ()[[Scopes]]: Scopes[2][[Prototype]]: Object
// sam.jump
// undefined