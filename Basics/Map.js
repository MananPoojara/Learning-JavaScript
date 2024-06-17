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

function uniquepair() {
    const map = new Map();
    const obj = { name: 'Manan' }
    const unique = map.set(obj, { age: 19 });
    map.set(obj, { lname: 'pujara' });
    map.set({ name: 'Manan' }, { fname: 'Manan' })
    return map, unique;
    map.ke

}

console.log(basicmap());
console.log(initMap());
console.log(uniquepair());


function mapInfo() {
    const map = new Map();
    map.set('a', 2);
    map.set({ v: 4, j: 5 }, 5)
    map.set(() => {
        console.log("hello word")
    }, 2)

    return {
        mapsize: map.size,
        maphas: map.has(5),
        keysize: Object.keys(map),
        values: map.values(),

    }
}


console.log(mapInfo());