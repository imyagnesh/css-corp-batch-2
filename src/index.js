// new javascript syntax
// import * as test from './app';
// old javascript syntax
// const app= require('./app');
import abc, { a, b, c } from './app';

console.log(abc(1, 2));
// same variable present means import {a as aa} from './app'
// console.log(aa);
console.log(a);
console.log(b);
console.log(c);
const d = 'hello world from d';
console.log(d);
console.log('hello world');
console.log('how are you');
