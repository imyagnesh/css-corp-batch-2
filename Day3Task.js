const users = [
    { id: 1, name: "Yagnesh", gender: 'male', age: 33 },
    { id: 2, name: "Virat", gender: 'male', age: 28 },
    { id: 3, name: "Rohit", gender: 'male', age: 32 },
    { id: 4, name: "Alia", gender: 'female', age: 18 },
    { id: 5, name: "Dipeeka", gender: 'female', age: 26 },
    { id: 6, name: "Priyanka", gender: 'female', age: 38 },
    { id: 7, name: "Taimur", gender: 'male', age: 08 },
    { id: 8, name: "Amitabh", gender: 'male', age: 70 },
    { id: 9, name: "Rajini", gender: 'male', age: 75 },
    { id: 10, name: "Akshaya", gender: 'female', age: 24 },
    { id: 10, name: "Alia", gender: 'female', age: 24 },
    { id: 11, name: "Siddarth", gender: 'male', age: 3 },
    { id: 12, name: "Vijay", gender: 'male', age: 45 },
]

const sortedByAge = users.reduce((previousValue, currentValue) => {
    const age = Math.floor((currentValue.age / 10));
    const ageFormat = `${age}0 - ${age}9`;
    previousValue[ageFormat] = previousValue[ageFormat] ?? [];
    const indexofMethod = previousValue[ageFormat].findIndex( x => {
        if (x.name > currentValue.name) {
            return 1
        }
    });
    if (indexofMethod > -1) {
        previousValue[ageFormat] = [
            ...previousValue[ageFormat].slice(0, indexofMethod),
            currentValue,
            ...previousValue[ageFormat].slice(indexofMethod)
        ];
    } else {
        previousValue[ageFormat].push(currentValue);
    }
    return previousValue;
}, {});

console.log(sortedByAge);