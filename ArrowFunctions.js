// Arrow functions

// 1. Modern Syntax
// 2. Solve OLD JS issues
// 3. Light weighted(Occupy less memory)(Class)
// 4. Arrow function does not have this pointer

// ES6+ removed "function" keyword

// C# lamda method expression
const add = (a, b) => a + b;

console.log(add(1, 2));

// For Single parameter no need to write round brackets with paremeter
const greet = (name) => `Hello, ${name}`;

console.log(greet("Yagnesh"));
