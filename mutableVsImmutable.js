// const arr =  [...Array(10).keys()];

// console.time("arr")
// for (let i = 0; i < arr.length; i++) {
//     const element = arr[i];
// }
// console.timeEnd("arr")

// const arr1 = [...Array(10).keys()]

// console.time("merge")
// const arr2 = [...arr, ...arr1]
// console.timeEnd("merge")

const obj = {
    a: 1,
    b: 2,
    c: 3,
    b: 3,
}

// Update this object

// Mutable vs Immutable

// Mutablly Add new property in Object

// obj.b = 4;

console.log(obj);

// Cons
// -> As required have to fetch same data again
// -> Error Possibility is high(Javascript will not throw the error build time)
// -> Slower

// Pros
// Occupy less memory

// Merge All Object
//ES5
const newObj = Object.assign({}, obj, { b: 4});

// { a: 1, b: 2, c: 3, b: 4}

console.log(obj);
console.log(newObj);

// Cons
// -> Occupy more memory compare to mutable way

// Props
// -> faster




