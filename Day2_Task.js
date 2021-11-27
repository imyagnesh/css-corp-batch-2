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

// 1. if user male then add profession: 'cricketer'
// 2. if user is female add profession 'actor'

// #Method 1
const updateProfession = users.map(data => {
    if(data.gender === "male") {
        data.profession = "cricketer"
    } else {
        data.profession = "actor"
    }
})
console.log(users);

// #Method 2
const index = users.filter(item => {
    if (item.gender === "male") {
        item.profession = "cricketer"
    } else {
        item.profession = "actor"
    }
});

// Day 2 Task

// update the user name whoes age is > 30;

const userAge = users.filter(data => {
    if (data.age > 30) {
        data.name = "Akshaya";
        console.log(data.age);
        console.log(data)
    }
});

// if male is there then Mr. name
// if female then Ms. name
const maleNames = users.filter(item => {
    if (item.gender === "male") {
        item.name = "Mr." + item.name;
        console.log(item.name)
    } else {
        item.name = "Ms." + item.name;
        console.log(item.name);
    }
});