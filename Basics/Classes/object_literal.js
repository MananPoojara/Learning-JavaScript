
// defining Prototype using __proto__

const parent = {
    parentprop: 'parent',
    overridenProp: 'parent overridden!'
}

const child = {
    __proto__: parent,
    childProp: 'child',
    childOverridenProp: 'child Overriden!!'
}

console.log(Object.getPrototypeOf(child))



// methodShortHand()

const greete = {
    // sayhi: function sayhi(name) {
    //     console.log(`hello ${name}`)
    // }
    // old way now we can use methodshorthand

    sayhi(name) {
        console.log(`hello ${name}`)
    },
}

console.log(greete.sayhi('manan'))


function getcar(carName, Model) {
    return {
        [carName.toUpperCase()]: Model,
    }
}

console.log(getcar('maruti', 'sizuki'))