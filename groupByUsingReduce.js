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


const groupByGender = users.reduce((previousValue, currentValue) => {
    (currentValue.age>=00 && currentValue.age<=09) ? (previousValue["00-09"] = previousValue[currentValue.age] || []).push(currentValue) : [];
    (currentValue.age>=10 && currentValue.age<=19) ? (previousValue["10-19"] = previousValue[currentValue.age] || []).push(currentValue) : [];
    (currentValue.age>=20 && currentValue.age<=29) ? (previousValue["20-29"] = previousValue[currentValue.age] || []).push(currentValue) : [];
    (currentValue.age>=30 && currentValue.age<=39) ? (previousValue["30-39"] = previousValue[currentValue.age] || []).push(currentValue) : [];
    (currentValue.age>=40 && currentValue.age<=49) ? (previousValue["40-49"] = previousValue[currentValue.age] || []).push(currentValue) : [];
    (currentValue.age>=50 && currentValue.age<=59) ? (previousValue["50-59"] = previousValue[currentValue.age] || []).push(currentValue) : [];
    (currentValue.age>=60 && currentValue.age<=69) ? (previousValue["60-69"] = previousValue[currentValue.age] || []).push(currentValue) : [];
    (currentValue.age>=70 && currentValue.age<=79) ? (previousValue["70-79"] = previousValue[currentValue.age] || []).push(currentValue) : [];
    return previousValue;
}, {});
console.log(groupByGender)