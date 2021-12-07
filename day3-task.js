const users = [
    { id: 1, name: 'Yagnesh', gender: 'Male', age: 33},
    { id: 2, name: 'Virat', gender: 'Male', age: 30},
    { id: 3, name: 'Salman', gender: 'Male', age: 37},
    { id: 4, name: 'Soniya', gender: 'Female', age: 11},
    { id: 5, name: 'Rohit', gender: 'Male', age: 28},
    { id: 6, name: 'Taimur', gender: 'Male', age: 08},
    { id: 7, name: 'Alia', gender: 'Female', age: 18},
    { id: 8, name: 'Dipeeka', gender: 'Female', age: 24},
    { id: 9, name: 'Priyanka', gender: 'Female', age: 38},
    { id: 10, name: 'Aamir', gender: 'Male', age: 03},
];

// {
//     "00-09": [],
//     "10-19": [],
//     "20-29": [],
//     "30-39": []
// }


const groupByAge = users.reduce((p, c) => {
const ageGroup = Math.floor(c.age/10);
console.log(ageGroup)
const Key  =`${ageGroup}0-${ageGroup}9`;
if(c.name>p.name){
    (p[Key] = p [Key]  || []).push(c);
}
(p[Key] = p [Key]  || []).unshift(c);
     return p;
 }, {})

console.log(groupByAge)