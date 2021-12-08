
const arr = [1,2,3,4, 5 , 6];

const [a, ...rest] = arr;

console.log(rest);



// const [, , c] = arr;
// console.log(c);


// console.log(arr[2]);

// console.log(a);
// console.log(b);
// console.log(c);

// console.log(arr[0]);
// console.log(arr[1]);
// console.log(arr[2]);
// console.log(arr[3]);
// console.log(arr[4]);

// const arr1 = arr.slice(0,3);

// const arr2 = arr.slice(3);

// console.log(arr2);

// console.log(arr1);

// Add Data
// const finalArr = [
//     ...arr.slice(0,3),
//     7,
//     ...arr.slice(3)
// ]


// Update Data
// const finalArr = [
//     ...arr.slice(0,3),
//     7,
//     ...arr.slice(4)
// ]

// Delete Data
// const finalArr = [
//     ...arr.slice(0,3),
//     ...arr.slice(4)
// ]


// console.log(finalArr);

const newArr = [0, ...arr, 6];

console.log(newArr);

// Mutable
// LILO
arr.push(6);

console.log(arr);

arr.pop();

console.log(arr);

// FIFO
arr.unshift(0);

console.log(arr);

arr.shift();

console.log(arr);

// arr.splice(2,1);

// console.log(arr);

arr.splice(2,1, 6);

console.log(arr);