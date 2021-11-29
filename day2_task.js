const users = [
    { id: 1, name: "Yagnesh", gender: 'male', age: 33 },
    { id: 2, name: "Virat", gender: 'male', age: 28 },
    { id: 3, name: "Rohit", gender: 'male', age: 32 },
    { id: 4, name: "Alia", gender: 'female', age: 18 },
    { id: 5, name: "dipeeka", gender: 'female', age: 26 },
    { id: 6, name: "Priyanka", gender: 'female', age: 38 },
    { id: 7, name: "Taimur", gender: 'male', age: 08 },
    { id: 8, name: "Amitabh", gender: 'male', age: 70 },
  ];
  
  // challange1: Adding profession according to gender
  
const updateUser1 =users.map(x =>
    {
        if (x.gender === 'male') {
            return {...x, profession: 'Cricketer'}
        }
        return {...x, profession: 'Actor'}
    });
console.log(updateUser1);
  
  //challange2 : Prefix with Mr or Ms
  
const updateUser2 = users.map(x =>
    {
        if (x.age >=30) {
            if (x.gender === 'female') {
                return {...x, name: `Ms.  ${x.name}`}
            }
            else {
                return {...x, name: `Mr. ${x.name}`}
            }
            } else {
                return {...x}
            }
  
    });
console.log(updateUser2); 
  