const users = [
    {id:1, name:"Yganaesh", gender:"male", age:33},
    {id:2, name:"Virat", gender:"male", age:28},
    {id:3, name:"Rohit", gender:"male", age:32},
    {id:4, name:"Alia", gender:"female", age:18},
    {id:5, name:"deepika", gender:"female", age:26},
    {id:6, name:"Priyanka", gender:"female", age:38},
    {id:7, name:"Tamiur", gender:"male", age:08},
    {id:8, name:"Amit", gender:"male", age:70},
    ]
    
    const usersProfession = users.map(x => {
    if(x.gender === "male") {
      return {...x, profession: "cricketer"}
    }
      return {...x, profession: "actor"}
    });
    
    console.log(usersProfession);
    
    const userPrefix = users.map(y =>{
    if(y.age >=30) {
    if(y.gender === "male") {
      return {...y, name: `Mr. ${y.name}`}
    } else {
      return {...y, name: `Ms. ${y.name}`}
    }
    } else {
      return {...y}
    }
    });
    
    console.log(userPrefix);