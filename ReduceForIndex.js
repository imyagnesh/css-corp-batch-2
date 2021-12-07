const users = [
    { id: 1, name: "Yagnesh", gender: 'male', age: 33 },
    { id: 2, name: "Virat", gender: 'male', age: 28 },
    { id: 3, name: "Rohit", gender: 'male', age: 32 },
    { id: 4, name: "Alia", gender: 'female', age: 18 },
    { id: 5, name: "dipeeka", gender: 'female', age: 26 },
    { id: 6, name: "Priyanka", gender: 'female', age: 38 },
    { id: 7, name: "Taimur", gender: 'male', age: 08 },
    { id: 8, name: "Amitabh", gender: 'male', age: 70 },
];

//const user = users.find(x => x.age===29)

//console.log(user);

const user1 = users.reduce((previousValue,currentValue) => {
    console.log(previousValue);
    if(currentValue.age === 28) {
        return currentValue;
    }
    return previousValue;
},undefined);

console.log(user1);