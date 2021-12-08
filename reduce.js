const arr = [1,2,3,4, 5]

let result  = 0;
for (let i = 0; i < arr.length; i++) {
    result += arr[i]
}

// immutbale methods

// previous -> its output of my previous iteration

// O(N)
const sum = arr.reduce((previousValue,currentValue) => previousValue + currentValue, 5);

console.log(sum);

console.log(result);

const users = [
    { id: 1, name: "Yagnesh", gender: 'male', age: 33 },
    { id: 2, name: "Virat", gender: 'male', age: 28 },
    { id: 3, name: "Rohit", gender: 'male', age: 32 },
    { id: 4, name: "Alia", gender: 'female', age: 18 },
    { id: 5, name: "dipeeka", gender: 'female', age: 26 },
    { id: 6, name: "Priyanka", gender: 'female', age: 38 },
    { id: 7, name: "Taimur", gender: 'male', age: 08 },
    { id: 8, name: "Amitabh", gender: 'male', age: 70 },
]

// {
//     // "00-09": [],
//     "10-19": [],
//     "20-29": [],
// }

const age = 29;

const ageGroup = Math.floor(age / 10);

console.log(ageGroup);

const key = `${ageGroup}0-${ageGroup}9`;

console.log(key);


// Reduce -> O(N)
// sort -> O(N)
// O(2N)

// reduce + sort  -> O(N)

const groupByAge = users.reduce((previousValue, currentValue) => {
    const ageGroup = Math.floor(currentValue.age / 10);
    const key = `${ageGroup}0-${ageGroup}9`;
    (previousValue[key] = previousValue[key] || []).push(currentValue)
    return previousValue;
}, {});

console.log(groupByAge);


// "20-29": 



const obj = {
    a: 1,
    b: 2
}

console.log(obj['c']);

obj['c'] = 3;

console.log(obj['c']);

const a = 5; // false

const b = 2

const c = a ?? b;

const d = a && b;

console.log(d);

console.log(c);



const groupByGender = users.reduce((previousValue, currentValue) => {
    (previousValue[currentValue.gender] = previousValue[currentValue.gender] || []).push(currentValue)
    return previousValue;
}, {});

// if(previousValue[currentValue.gender] === undefined) {
    //     previousValue[currentValue.gender] = []
    // }

    // return {...previousValue, [currentValue.gender]: [
    //     ...previousValue[currentValue.gender],
    //     currentValue
    // ] }
    // previousValue[currentValue.gender].push(currentValue)

console.log(groupByGender);

// {
//     male: [],
//     female: []
// }



const rohitInfo = users.find(x => x.name === "hello");

console.log(rohitInfo);

const rohitInfo1 = users.reduce((previousValue, currentValue)=> {
    if(currentValue.name === "asdfads") {
        return currentValue;
    }
    return previousValue;
}, undefined)

console.log(rohitInfo1);

const index = users.findIndex(x => x.name === "asdfasd");

const maleUsers = users.filter(x => x.gender === "male");
console.log(maleUsers);


const maleUsers1 = users.reduce((previousValue, currentValue) => {
    if(currentValue.gender === 'male') {
        return [...previousValue, currentValue]
    }
    return previousValue;
}, [])

console.log(maleUsers1);

// const index1 = users.reduce((previousValue, currentValue, index) => {
//     console.log(previousValue);
//     if(currentValue.name === "Rohit") {
//         return index;
//     }
//     return previousValue;
// }, -1)

console.log(index1);

console.log(index);


