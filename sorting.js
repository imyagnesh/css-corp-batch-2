

const arr = [...Array(1000).keys()];
// 


console.time("some")
const is25Exist = arr.some(x => x === 25);
console.timeEnd("some")

console.time("indexOf")
arr.indexOf(25)
console.timeEnd("indexOf")

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

// nagative 0 positive
// O(N)
const sortedData = users.sort((a, b) => {
    const nameA = a.name.toUpperCase()
    const nameB = b.name.toUpperCase()
    if(nameA < nameB) {
        return -1
    }
    if(nameA > nameB) {
        return 1
    }
    return 0;

});

console.log(sortedData);

const obj1 = {a: 1}
const obj2 = {a: 1}

console.log(obj1 === obj2);

// iterators
const set = new Set(users);

console.log(set.size);

const weakSet = new WeakSet();

const obj = { a: 1};

weakSet.add(obj)

console.log(weakSet.has(obj)); 

weakSet.delete(obj)

console.log(weakSet.has(obj)); 




console.time("has")
set.has(25);
console.timeEnd("has")


// set.add(1);
// set.add(2);
// set.add(3);
// set.add(3);
// set.add(4);

console.log(set.size);
