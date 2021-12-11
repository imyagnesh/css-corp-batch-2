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

const sortByAge = users.reduce((preVal, currentVal) => {
    const ageNumber = Math.floor((currentVal.age / 10));
    const ageLabel = `${ageNumber}0 - ${ageNumber}9`;
    preVal[ageLabel] = preVal[ageLabel] || [];
    const indexVal = preVal[ageLabel].findIndex(index => {
        if (index.name > currentVal.name) {
            return 1;
        }
    });
    if (indexVal > -1) {
        preVal[ageLabel] = [
            ...preVal[ageLabel].slice(0, indexVal),
            currentVal,
            ...preVal[ageLabel].slice(indexVal)
        ];
    } else {
        preVal[ageLabel].push(currentVal);
    }
    return preVal;
}, {});

console.log(sortByAge);