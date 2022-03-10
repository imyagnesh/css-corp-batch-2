// Challenge 1
const b = 5
const obj = {
    a: 1,
    b: 2,
    c: 3
}
const key = "b";

// 1. Add two new Property d: 10, e: 12
// 2. delete c, b property
// 3. read the dynamic property using destructuring

const ans1 = {...obj, d: 10, e:12};
const {b:bb, c, ...ans2} = obj; 
const {[key]:ans3} = obj;

console.log(ans1);
console.log(ans2);
console.log(ans3);



// Challenge 2
const names = [
    "yagnesh",
    "virat",
    "rohit",
    "alia",
    "priyanka"
];

// -> add dipeeka above alia
// -> replace virat with hardik
// -> remove yagnsh from array

const nameArr = [...names]

// Answer 1
const addDipeeka = [...nameArr.slice(0,3), 'dipeeka', ...nameArr.slice(3)];
console.log(addDipeeka);

// Answer 2
const replaceVirat = [...nameArr.slice(0,1), 'hardik', ...nameArr.slice(2)];
console.log(replaceVirat);

// Answer 3
const removeYagnesh = nameArr.slice(1);
console.log(removeYagnesh);



// Challege 3
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

// 1. find the record whoes name start with Y
// 2. give all the records whoes age is b/2 30-40
// 3. check whether we have user who is male and age 32

const isStartWithY = users.find(user => (user.name.charAt(0) === 'Y'));
console.log(isStartWithY);

const isBetween30to40 = users.filter(user => (user.age > 29 && user.age < 41));
console.log(isBetween30to40);

const hasMaleAnd32 = users.some(user => (user.gender === 'male' && user.age === 32));
console.log(hasMaleAnd32 ? 'Yes' : 'No');



// Challenge 4
const users1 = [
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

const updatedArr = users1.map(user => {
    if (user.gender === 'male') {
        user = {...user, profession: 'cricketer'};
        if (user.age > 30) {
            user = {...user, name: 'Mr. ' + user.name};
        }
    }
    else {
        user = {...user, profession: 'actress'};
        if (user.age > 30) {
            user = {...user, name: 'Mrs. ' + user.name};
        }
    }
    return user;
});

console.log(updatedArr);