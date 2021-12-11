const names = [
    "yagnesh",
    "virat",
    "rohit",
    "alia",
    "priyanka"
]



// -> add dipeeka above alia

const newArr = [
    ...names.slice(0, 3),
    "dipeeka",
    ...names.slice(3),
]

console.log(newArr);

// -> replace virat with hardik

const newArr1 = [
    ...names.slice(0, 1),
    "hardik",
    ...names.slice(2),
]

console.log(newArr1);

// -> remove yagnsh from array

const [,...rest] = names;
console.log(rest);

console.log(names.slice(1));
