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

// update the user name whoes age is > 30;
// if male is there then Mr. name
// if female then Ms. name


const index = users.findIndex(x => x.name === "Rohit");

console.log(index);

console.log(users[index]);

const updatedUsers = [
    ...users.slice(0, index),
    {...users[index], age: 31 },
    ...users.slice(index + 1)
];

const updatedUsers2 = [
    ...users.slice(0, index),
    ...users.slice(index + 1)
];

const updatedUsers3 = users.filter(x => x.name !== "Rohit")

console.log(updatedUsers2);

console.log(updatedUsers);


const updatedUsers1 = users.map(x => {
    if(x.name === "Rohit") {
        return {...x, age: 31}
    }
    return x;
})

console.log(updatedUsers1);


