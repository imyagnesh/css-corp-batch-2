const obj = {
    a: 1,
    b: 2,
    c: 3
}

const {c, b, a,...rest} = obj;

// console.log(c);
console.log(rest);