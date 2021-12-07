// Task 1

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
const newObj = {...obj, d: 10, e: 12};
console.log(newObj);

const {c, b:bb, ...rest} = newObj;
console.log(rest) 

const {[key]:newKey} = newObj;
console.log(newKey)

// Task 2

const names = [
  "yagnesh",
  "virat",
  "rohit",
  "alia",
  "priyanka"
]

// -> add dipeeka above alia

// -> replace virat with hardik

// -> remove yagnsh from array
const addedDipeeks = [...names.slice(0, 3), "dipeeka", ...names.slice(3)];
console.log(addedDipeeks);

const replacedArr = [...addedDipeeks.slice(0, 1), "hardik", ...addedDipeeks.slice(2)];
console.log(replacedArr);

const removedArr = [...replacedArr.slice(1)];
console.log(removedArr);


console.log(replacedArr.slice(1)); 


// Task 3
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
var recordsWithY = users.find(record => record.name.charAt(0) === 'Y');
console.log(recordsWithY);

var recordsWithAge = users.filter(record => record.age > 30 && record.age <= 40);
console.log(recordsWithAge);

var recordsAvailability = users.some(record => record.gender === 'male' && record.age === 32);
console.log(recordsAvailability);

// Task 4
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
var recordsWithMale = users.map(record => {
  let salutation;
  if (record.gender === 'male') {
    if (record.age > 30) {
      salutation = {
        name: 'Mr.' + record.name
      }
    }
    return {
      ...record, 
      profession: 'cricker',
      ...salutation
    }
  } else if (record.gender === 'female') {
    if (record.age > 30) {
      salutation = {
        name: 'Ms.' + record.name
      }
    }
    return {
      ...record, 
      profession: 'actor',
      ...salutation
    }
  }
});
console.log(recordsWithMale);
