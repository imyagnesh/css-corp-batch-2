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
const userMale = users.map(x => {
        if(x.gender ==='male') {
            return {...x,profession:'cricketer'}
        }else {
            return {...x,profession:'actor'}
        }
    }
);
console.log(userMale);
// 2. if user is female add profession: 'actor'
const userFemale = users.map(x => {
        if(x.gender ==='female') {
            return {...x,profession:'actor'}
        }else {
            return {...x,profession:'cricket'}
        }
    }
);
console.log(userFemale);



// update the user name whose age is > 30;
// if male is there then Mr. name
// if female then Ms. name

const age30 = users.map(x => {
        if(x.age >30) {
            if(x.gender ==='male') {
                return {...x, name:`Mr.${x.name}`}
            }else {
                return {...x, name:`Ms.${x.name}`}
            }
        }else {
            return {...x}
        }
    }
);
console.log(age30);