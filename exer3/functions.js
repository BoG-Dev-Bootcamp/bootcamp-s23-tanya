/*
    Create a function that takes an array as an argument
    and returns the reverse array.
    DO NOT USE THE Array.reverse() METHOD!!

    Example: [1, 2, 3] -> [3, 2, 1]
*/
function reverseArr(arr) {
    const new_arr = new Array();
    for (let i = arr.length - 1; i >= 0; --i) {
        new_arr.push(arr[i]);
    }
    return new_arr;
}

/*
    Create a function that takes an object as an argument
    and returns the keys of the object in an array.
    DO NOT USE the Object.keys() METHOD!!

    Example:
    {
        name: "Casey",
        age: 10,              
        breed: "Pomeranian",
        friendly: false
    }
    -->
    ["name", "age", "breed", "friendly"]
*/
function objectKeysToArr(object) {
    const arr = new Array();
    for (const key in object) {
        arr.push(key);
    }
    return arr;
}

/*
    Create a function that takes in two objects as arguments 
    and returns an object that is the combination of the two.
    Make to combine objects in the order they are passed into
    the function. 

    Example:
    {
        name: "Casey",
        age: 10
    }
    {
        breed: "Pomeranian",
        friendly: false
    }
    -->
    {
        name: "Casey",
        age: 10,
        breed: "Pomeranian",
        friendly: false
    }
*/
function combineObjects(object1, object2) {
    const object3 = new Object();
    for (let x in object1) {
        object3[x] = object1[x];
    }
    for (let x in object2) {
        object3[x] = object2[x];
    }
    return object3;
}


// DO NOT ALTER THE CODE BELOW (This is for testing purposes only)

console.log(reverseArr([1, 2, 3]))
console.log(reverseArr([2, 4, 6, 8]))
console.log(objectKeysToArr({ name: "Casey", age: 18, breed: "Pomeranian", friendly: false }))
console.log(objectKeysToArr({ 0: "Casey", 1: 18, 2: "Pomeranian", "test 1": false }))
console.log(combineObjects({ name: "Casey", age: 18 }, { breed: "Pomeranian", friendly: false }))
console.log(combineObjects({ 0: "Casey", 1: 18, 2: "Pomeranian" }, { "test 1": false }))
