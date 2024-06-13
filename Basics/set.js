// set add unique value only and it's just another data structure for js

// var s = new Set()

var s = new Set();

s.add(1);
s.add(2);
s.add(3);
s.add(2);

console.log(s); // {1,2,3}



// we can set info of set

function infoSet() {
    const obj = { a: 42 };
    const set = new Set([1, 2, 4, obj, 5, 3])
    return {
        size: set.size,
        hasobj: set.has(obj) !== -1,
        hasfive: set.has(5) !== -1,
    }
}
console.log(infoSet())