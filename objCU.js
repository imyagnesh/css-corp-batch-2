const obj = {
    a: 1,
    b: 2,
    c: 3,
}

const xyz = {
    x: 1,
    y: 2,
    z: 3
}

const newObj = Object.assign({}, obj);

console.log(obj);
console.log(newObj);

// Spread Operator
const newObj1 = { ...obj, ...xyz, c: 4};

console.log(newObj1);

// on Update Propety fist use spread operator and then add property
const updateObj = { ...obj, c: 4}
console.log(updateObj);


const addProp = { d: 4, ...obj};

console.log(addProp);
