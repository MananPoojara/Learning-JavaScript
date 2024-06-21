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

    const [...keys] = map.keys();
    const [...values] = map.values();
    return {
        mapsize: map.size,
        maphas: map.has(5),
        // keysize: Object.keys(map),
        // values: map.values(),
        keys,
        values,

    }
}


console.log(mapInfo());



// Map / Filters 

// what's the purpose of using map and filter let see 

// array [1,2,3,4,5,6] to => [1,4,9,16,25,36]

// var arr2 = [1, 2, 3, 4, 5, 6];

// // var newArray = [];

// // function multi(arr) {
// //     for (let i = 0; i < arr.lengthl; i++) {
// //         newArray.push(arr[i] * arr[i]);
// //     }
// //     return newArray;
// // }
// // console.log(multi(arr2));

const arr = [1, 2, 3, 4, 5, 6]
// function multi(i) {
//     return i * i;
// }
// const ans = arr.map(function multi(i) {
//     return i * i;
// })
const ans = arr.map((i) => {
    return i * i;
})

//i provided threee ways of doing this 
console.log(ans)
