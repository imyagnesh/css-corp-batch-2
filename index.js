import defaultVariable, { app as a } from './app';

// import * as app from './app';

// const app =  require('./app');

const index = 'This is a index.js file';

console.log(index);

const index2 = 'This is a index2 variable';

console.log(index2);

console.log(a);

console.log(defaultVariable);

const x = 1 ?? 2;
console.log(x);
