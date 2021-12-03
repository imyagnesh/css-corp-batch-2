const users = [
  { id: 1, name: "Yagnesh", gender: 'male', age: 33 },
  { id: 2, name: "Virat", gender: 'male', age: 28 },
  { id: 3, name: "Rohit", gender: 'male', age: 32 },
  { id: 4, name: "Alia", gender: 'female', age: 18 },
  { id: 5, name: "dipeeka", gender: 'female', age: 26 },
  { id: 6, name: "Priyanka", gender: 'female', age: 38 },
  { id: 7, name: "Taimur", gender: 'male', age: 08 },
  { id: 8, name: "Amitabh", gender: 'male', age: 70 },
  { id: 9, name: "Dinesh", gender: 'male', age: 33 },
]

// Reduce method - to replace for find method
var recordsWithY = users.find(record => record.name.charAt(0) === 'Y');
console.log(recordsWithY);

var recordsWithReduce = users.reduce((previousValue, currentValue) => {
  if (currentValue.name.charAt(0) === 'Y') {
    return currentValue
  }
  return previousValue;
}, "undefined")
console.log(recordsWithReduce);

// Group data based on age

// {
//     // "00-09": [],
//     "10-19": [],
//     "20-29": [],
// }
const groupByAge = users.reduce((previousValue, currentValue) => {
  const age = Math.floor(currentValue.age / 10);
  const ageIndex = `${age}0` + "-" + `${age}`+9;
  (previousValue[ageIndex] = previousValue[ageIndex] || []).push(currentValue)
  return previousValue;
}, {});
console.log(groupByAge);

// Group data based on age and sort the records
const groupByAge1 = users.reduce((previousValue, currentValue) => {
  const age = Math.floor(currentValue.age / 10);
  const ageIndex = `${age}0` + "-" + `${age}`+9;
  previousValue[ageIndex] = previousValue[ageIndex] || [];
  const currentArray = previousValue[ageIndex];
  const index = currentArray.findIndex(x => {
    return x.age > currentValue.age;
  });
  if (index > -1) {
    // If index was found, then merge the new data at appropriate index
    previousValue[ageIndex] = [
      ...currentArray.slice(0, index),
      currentValue,
      ...currentArray.slice(index)
    ];
  } else {
    // if index was not found, then push the new data
    currentArray.push(currentValue);
  }
  return previousValue;
}, {});
console.log(groupByAge1);
