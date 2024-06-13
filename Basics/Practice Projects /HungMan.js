// HungMan is game where we have to guess the word like _ _ _ _ word is "Code" now one by one we have to give letter like 'c'... so on and we have 3 tries for guess right number

const { cp, read } = require('fs');


// for input we use node 'readline' module
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

// for tracking user try
var count = 3;
var str = "javascript"
var arr = Array.from(str);
var underscores = arr.map(() => '_');

readline.question('Enter Your Name : ', name => {
    console.log(`Welcome to HungMan ${name}!`)
    displaycurrentanswer();
    main();
})


var displaycurrentanswer = () => {
    console.log(underscores.join(' '))
}

function main() {
    readline.question("Enter a letter : ", letter => {
        if (letter.length === 1 && /^[a-zA-Z]$/.test(letter)) {
            let correctguess = false;
            for (let i = 0; i < arr.length; i++) {
                if (letter === arr[i]) {
                    underscores[i] = letter;
                    correctguess = true;
                }
            }
            if (!correctguess) {
                count--;
                console.log(`wrong answer you have ${count} attempt left`);
            } else {
                console.log("Correct answer");
            }

            displaycurrentanswer();

            if (underscores.join('') === str) {
                console.log("You Guessed the correct answer : ", str)
                readline.close();
            }
            else if (count > 0) {
                main()
            } else {
                console.log("Better luck next time!!")
                readline.close();
            }
        }
        else {
            console.log("invalid input please enter single letter at a time");
            main();
        }

    })
}









