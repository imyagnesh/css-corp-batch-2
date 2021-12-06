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
    
    // 1. if user male then add profession: 'cricketer'
    // 2. if user is female add profession 'actor'
    
    var updateProfession = users.map(index => {
      if(index.gender === 'male') {
        index.profession = "Cricketer";
      }
      else if (index.gender === 'female') {
        index.profession = "Actor";
      }
      return index;
    });
    
    // update the user name whoes age is > 30;
    // if male is there then Mr. name
    // if female then Ms. name
    var updateName = users.map(index => {
      if(index.age > 30 ) {
        if(index.gender === 'male') {
      index.name= `Mr.${index.name}`;
        } else if (index.gender === 'female') {
          index.name= `Ms.${index.name}`;
        }
        return index;
      } else {
          return index;
      }
    });
    
    console.log(users);