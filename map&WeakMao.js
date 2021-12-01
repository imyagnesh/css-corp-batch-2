

const map = new Map();

map.set("yagnesh", {
    name: "Yagnesh",
    age: 30,
    gender: 'Male'
})

map.set("virat", {
    name: "Virat",
    age:  32,
    gender: "Male",
    runs: 10000
})



console.log(map.get("virat"));

const prevValue = map.get("virat");

map.set("virat", {...prevValue, age: 30, profession: "Cricketer", runs: prevValue.runs + 50})

console.log(map.has("yagnesh"));
// console.log(map.delete("yagnesh"));

console.log(map.has("yagnesh"));

for (const [key, value] of map) {
    console.log(key);
    console.log(value);
}

const weakMap = new WeakMap();

const abc = { a: 1 };
const pqr = { p: 1 };

weakMap.set(abc, 1);
weakMap.set(abc, 2);
weakMap.set(pqr, 2);
// weakMap.set({ a: 1 }, 2);

console.log(weakMap.get(abc));
console.log(weakMap.get(pqr));

console.log(weakMap.has(abc));
console.log(weakMap.delete(abc));
console.log(weakMap.has(abc));









