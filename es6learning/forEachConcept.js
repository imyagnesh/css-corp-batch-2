/*
arr.forEach(callback[, thisArg]);
ParametersSection
callback : Function to execute for each element, taking three arguments:
    currentValue : The value of the current element being processed in the array.
    indexOptional : The index of the current element being processed in the array.
    arrayOptional : The array that forEach() is being applied to.
thisArg Optional : Value to use as this (i.e the reference Object) when executing callback.
Return valueSection : undefined.
*/
//arrayHelperFunctions - forEach  
let divider = (str='-',num = 50)=>console.log(str.repeat(num));

let colors = ['red','blue','green','pink'];
let printforEach = (val) => console.log(val);

// Regular
colors.forEach( printforEach );  divider();

// Inline
colors.forEach( printforEach = (val) => console.log(`Inline ${val}`) ); divider();

// Optimized
colors.forEach( val => console.log(`Optimized ${val}`) ); divider();

// with available paramenters
colors.forEach( (val,index,array) => console.log(val, index, array) ); divider();

// with template string
colors.forEach( (val,index,array) => console.log(`${val} ${index} ${array}`) ); divider(); 

// with additional paramenter
colors.forEach( printforEach = (val,index,array,str='custom string') => console.log(`${val} with ${str}`) ); divider();

// Copy array
const items = ['item1', 'item2', 'item3'], copy = [];
items.forEach( (item) => copy.push(item));
console.table(copy);

//Using thisArg in function
function Counter() { //create objects using the Constructor function
    this.sum = 0;
    this.count = 0;
    this.myFun = function(){
        return `Sum of ${this.count} elemets is ${this.sum}`;
    }
}
Counter.prototype.add = function(array){
    array.forEach(function(entry) { this.sum += entry; ++this.count; }, this);
};
Counter.prototype.addConcise = function(array){
    array.forEach((entry)=>{ this.sum += entry;  ++this.count;});
    //If passing the function argument using an arrow function expression the thisArg parameter can be omitted as arrow functions lexically bind the this value
};
const obj = new Counter();
obj.add([2, 5, 9]);
obj.addConcise([2, 5, 9]);
console.log(`Count : ${obj.count}`); // 3 
console.log(`Sum : ${obj.sum}`); // 16
console.log(obj.myFun()); // 3 
divider(); 

//using Object
let myObject = {
    name : ['a','b','c','d'],
    balance : '10000',
    currBalance : function(){
        this.name.forEach((x,y,z)=>console.log(`Current Balance : ${x} ${y} ${z}balance is ${this.balance}`));
    },
    currBalanceConcise : ()=>{
        myObject.name.forEach((x)=>console.log(`Current Balance (concise) : ${x} balance is ${myObject.balance}`));
    },
}
myObject.currBalance();
myObject.currBalanceConcise();
divider(); 

//shift function
var words = ['one', 'two', 'three', 'four'];
words.forEach((word,index,arr) => {
    word === 'one' ? words.shift() : '';
    console.log(words);
    console.log(word); 
    console.log(index);
    console.log(arr);
 });

divider('*'); 