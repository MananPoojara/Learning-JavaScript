// // first we see Fetch() and then we can see how and why to use promise()

// // fetch("https://smthing.com").then().catch().finally(); 
// // always finally called so now see promise 



// //Phase of promise 
// // pending - waiting
// // resolve - get the promise
// // reject - not get promise
// // no callback no callback hell


// function getwether() {
//     return new Promise(function (resolve, reject) {
//         setTimeout(() => {
//             resolve("Sunny")
//         }, 1000)
//     })
// }

// function getwethericon(wether) {
//     return new Promise(function (resolve, reject) {
//         setTimeout(() => {
//             switch (wether) {
//                 case 'Sunny':
//                     resolve('☀️')
//                     break
//                 case 'Cloudy':
//                     resolve('☁️')
//                     break
//                 case 'Rainy':
//                     resolve('☔')
//                     break
//                 default:
//                     reject("No icon found")
//             }
//         })

//     })

// }


// // nicer way
// function OnSuccess(data) {
//     console.log(`Success : ${data}`)
// }
// function OnError(err) {
//     console.log(`Error: ${err}`)
// }

// // getwether().then(OnSuccess, OnError)
// // let's see promise chainig
// getwether()
//     .then(getwethericon)
//     .then(OnSuccess, OnError)




// pp.then(function (data) {
//     console.log(`first param ${data}`);
// },
//     function (data) {
//         console.log(`second param ${data}`)
//     })
//Promise { 'Sunny' }  Sunny


// basically
// so it's easy  
// return promise(function (resolve, reject))


function func1() {
    return new Promise(function (res, rej) {
        setTimeout(() => {
            rej('202')
        }, 1000)
    })
}

function func2() {
    console.log("func 2")
    return new Promise(function (res, rej) {
        setTimeout(() => {
            res("I done my wrk")
        }, 1000)
    })
}


function OnSuccess(data) {
    console.log(data)
}


function OnError(errorcode) {
    console.log(`ERROR:${errorcode}`)
}


function InTheEnd(end) {
    console.log("it's end of story")
}


func1()
    .then(func2)
    .then(OnSuccess)
    .catch(OnError)
    .finally(InTheEnd)




// Real world Example 
// using wether forcasting api 