

// Clousures

//( a(done) operator1(done) b(done)) operator2 (x(done) operator1(done) y(done))

// (1 + 5) * ( 2 + 6)
// (1 - 5) * ( 2 - 6)

const mul = (a, b) => a * b;
const add = (a, b) => a + b;
const sub = (a, b) => a - b;


const calc = (a, b) => {
    return (operator1) => {
        const result1 = operator1(a, b);
        return (x, y) => {
            const result2 = operator1(x, y);
            return (operator2) => {
                return operator2(result1, result2)
            }
        }
    }
}

console.log(calc(1, 5)(sub)(2, 6)(mul));





// const calc = (a, b) => {
//     return (operator) => {
//         return operator(a, b)
//     }
// }



// console.log(calc(1,2)(add));
// console.log(calc(1,2)(sub));
// console.log(calc(1,2)(mul));

// console.log(add(1, 4));

// const calc = (a, b, operator) => {
//     if(operator === '*') {
//         return a * b;
//     }
//     if(operator === '+') {
//         return a + b;
//     }
//     if(operator === '-') {
//         return a - b;
//     }
//     return 0;
// }

// console.log(calc(1,2,'+'));
// console.log(calc(1,2,'-'));
// console.log(calc(1,2,'*'));