// HungMan is game where we have to guess the word like _ _ _ _ word is "Code" now one by one we have to give letter like 'c'... so on and we have 3 tries for guess right number

const { cp } = require('fs');


// for input we use node 'readline' module
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

// for tracking user try
var count = 0;
var str = "javascript"

readline.question('Enter Your Name : ', name => {
    console.log(`Welcome to HungMan ${name}!`)
    main(str);
    if (count == 3) {
        readline.close();
    }
})


var attampts = () => {
    if (count == 0) {
        console.log(underscores.join(' '))
    } else if (count == 1) {
        console.log("you have 2 try left ")
    } else if (count == 2) {
        console.log("Last Try!!")
    } else if (count == 3) {
        console.log("You lost!!")
    }
}

function main(str) {
    let arr = Array.from(str);
    let underscores = arr.map(() => '_');


    if (count == 3) {
        console.log("Better Luck Next Time!!😔")
        readline.close();
        count = 0;
    } else if (count == 0) {
        console.log("Game On !!!")
        readline.question("Enter Letter : ", letter => {
            if (letter.length === 1 && /^[a-zA-Z]$/.test(letter)) {
                for (let i = 0; i < arr.length; i++) {
                    if (letter === arr[i]) {
                        underscores[i] = letter;
                        attampts();
                    }
                    else {
                        count++;
                    }
                }
            } else {
                console.log("Invalid input. Please enter a single letter.");
            }

        })
    }

}








