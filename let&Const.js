// var a = 1;
{
  let a = 1;
}

// Re declaration is not possible
// let c = 1;

// let c = 2

// Re assignement is possible
let b = 1;

b = 2;

console.log(b);

const pi = 3.14;

{
  const d = 1;
}

console.log(d);

//          Hoisting        Scoping         Redeclare       Reassign
// var          YES             No              Yes             Yes

// let          No              Yes             No              Yes

// const        No              Yes              No             No
