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
const age30 = users.map(x =>
    {
        if(x.age >30){
            if(x.gender ==='male'){
                return {...x, name:`Mr.${x.name}`}
            }else{
                return {...x, name:`Ms.${x.name}`}
            }
        }else{
            return {...x}
        }
    }
);
console.log(age30);