// first we see Fetch() and then we can see how and why to use promise()

// fetch("https://smthing.com").then().catch().finally(); 
// always finally called so now see promise 



//Phase of promise 
// pending - waiting
// resolve - get the promise
// reject - not get promise
// no callback no callback hell


function getwether() {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            resolve("Sunny")
        }, 1000)
    })
}

function getwethericon(wether) {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            switch (wether) {
                case 'Sunny':
                    resolve('☀️')
                    break
                case 'Cloudy':
                    resolve('☁️')
                    break
                case 'Rainy':
                    resolve('☔')
                    break
                default:
                    reject("No icon found")
            }
        })

    })

}


// nicer way
function OnSuccess(data) {
    console.log(`Success : ${data}`)
}
function OnError(err) {
    console.log(`Error: ${err}`)
}

// getwether().then(OnSuccess, OnError)
// let's see promise chainig
getwether()
    .then(getwethericon)
    .then(OnSuccess, OnError)




// pp.then(function (data) {
//     console.log(`first param ${data}`);
// },
//     function (data) {
//         console.log(`second param ${data}`)
//     })
//Promise { 'Sunny' }  Sunny

