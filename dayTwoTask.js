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

// Add user profession based on gender
const addProfession = users.map(item => {
    if (item.gender === "male") {
        return ({...item, profession: "Cricketer" })
    } else {
        return ({...item, profession: "Actor" });
    }
});

// update the user name whoes age is > 30;
const userName = users.map(item => {
    if (item.age > 30) {
        return ({...item, name: "Jaya" });
    }
});

// add Mr and Ms based on gender
const genderName = users.map(item => {
    if (item.gender === "male") {
        return ({...item, name: `Mr. ${item.name}` });
    } else {
        return ({...item, name: `Ms. ${item.name}` });
    }
});