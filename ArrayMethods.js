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



// FindIndex

// O(logN) -> best case scenario -> found record
// O(N) -> work case scenario -> record not found

// if record found then output will be index >= 0
// else -1
const index = users.findIndex(item => item.name === "Rohit")

console.log(index);

// O(logN) -> best case scenario -> found record
// O(N) -> work case scenario -> record not found

// if record found then output will be data
// else undefined

const rohit = users.find(item => item.name === "Rohit")

console.log(rohit);


// O(N)
// if record found it will return array of data
// else []

const maleRecords = users.filter(x => x.gender === 'male' && x.age > 30);

console.log(maleRecords);


// O(logN) -> best case scenario -> one of record is false
// O(N) -> work case scenario -> every record is true
const isEveryAdult = users.every(x => x.age >= 18);

console.log(isEveryAdult);

// O(logN) -> best case scenario -> found record
// O(N) -> work case scenario -> not found record
const hasChild = users.some(x => x.age < 18);

// O(logN) -> best case scenario -> one of record is false
// O(N) -> work case scenario -> every record is true
const hasSeniorCitizen = users.some(x => x.age > 58);

console.log(hasChild);
console.log(hasSeniorCitizen);

console.log(users);



