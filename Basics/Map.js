function basicmap() {

    //map.set(key,value)
    const map = new Map();
    map.set('a', 2);
    map.set({ v: 4, j: 5 }, 5)
    map.set(() => {
        console.log("hello word")
    }, 2)
    return map;

}

function initMap() {
    // it's array of array
    const map = new Map([
        ['a', 3],
        [{ v: 4, j: 5 }],
        [() => {
            console.log("hello word")
        }, 2],
    ])
    return map;
}

console.log(basicmap());
console.log(initMap());