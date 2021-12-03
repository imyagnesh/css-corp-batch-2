// object is undefined

const obj = {
    a: 1,
    b: {
        c: 2,
        d: {
            e: 5
        }
    }
};

// console.log(obj.b?.f?.e);



// ?? | ||

// if(obj.b && obj.b.f && obj.b.f.e) {
//     console.log(obj.b.f.e);
// } else {
//     console.log("something is wrong");
// }

