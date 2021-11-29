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

// Day 2 Task

// update the user name whoes age is > 30;

const userNames = users.map(item => {
    if (item.age > 30) {
        console.log({...item, name: "Akshaya"}); 
    }
});

// if male is there then Mr. name
// if female then Ms. name

const genNames = users.map(item => {
    if (item.gender === "male") {
        console.log({...item, name: `Mr. ${item.name}`});
    } else {
        console.log({...item, name: `Ms. ${item.name}`});
    }
});