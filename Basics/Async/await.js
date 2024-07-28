function getData() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("vlksd")
        }, 100)
    })
}

//using async-await
async function start() {
    const result = await getData()
    console.log(result)
}


//using promise
function start2() {
    getData()
        .then(function result(data) {
            console.log(data)
        })
}


start()
start2()


// real world exaample

async function wether() {
    const result = await fetch("http://api.weatherapi.com/v1/current.json?key=5edd11718f57400abfd162011242207&q=London&aqi=no")
    const data = await result.json()
    console.log(data.current.condition)
}
wether()

async function wether2() {
    fetch("http://api.weatherapi.com/v1/current.json?key=5edd11718f57400abfd162011242207&q=London&aqi=no")
        .then(data => data.json())
        .then(result => {
            console.log(result.current.condition)
        })
}
wether2()

