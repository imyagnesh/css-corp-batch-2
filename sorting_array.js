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
const age = 29;
const ageGroup = Math.floor(age / 10);

let index=1;
const groupByAge = users.reduce((previousValue, currentValue) => {
    const ageGroup = Math.floor(currentValue.age / 10);
    const key = `${ageGroup}0-${ageGroup}9`;

    if(previousValue[key] && previousValue[key].length && previousValue[key][index-1] && previousValue[key][index-1].name>currentValue.name) {
        (previousValue[key] = previousValue[key] || []).push(currentValue);
    }
    else {
        (previousValue[key] = previousValue[key] || []).unshift(currentValue);
    }
    index++;
    return previousValue;
}, {});

console.log(groupByAge); 