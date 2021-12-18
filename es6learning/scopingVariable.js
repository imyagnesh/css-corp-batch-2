//Block Scope Variables

/*
* "let" has block scope
* Not hoisted to beginning of enclosing block, so references before declaration are errors
* Most uses of "var" can be replace with "let" (not if they depend on hoisting)
* When a "let" variable is accessed out of its scope, a ReferenceError is thrown with message "name is not defined"
* "let" can not be declared more than once - Uncaught SyntaxError: Identifier 'x' has already been declared
*/

let divider = (num = 3)=>console.log("-".repeat(50));

var x = 0;
{
    var x =2; 
    console.log(x);
}
console.log(x);
divider();

var x1 = 10;
{
    let x1 =12;
    console.log(x1);
}
console.log(x1);
divider();

let x2 = 20;
{
    let x2 =22;
    console.log(x2);
}
console.log(x2);
divider();

let x3 = 30;
{
    //var x3 =33; //Uncaught SyntaxError: Identifier 'x3' has already been declared
    //console.log(x3);
}
console.log(x3);
divider();

let x4 = 40;
{
    let _x4 =44;        
}
//console.log(_x4); //Uncaught ReferenceError: x4 is not defined
console.log(x4);
divider();


let scope=10 
{let scope =100
    {let scope =1000
        {let scope=50000
        console.log('inner most',scope) }
    console.log('inner',scope) }
console.log('outer',scope)}
console.log('outer most',scope)
divider();

//Block Function
outerFn=()=>console.log(`I'm in Outer Func`);
{
    innerFn=()=>console.log(`I'm in Inner Func`);
    outerFn();
    innerFn();
}
outerFn();
innerFn();
divider(); 

var a=[1,2,3,4,5]
for(var i=0, n=5; i<n;i++){
    var nomnom = a[i];
    setTimeout(function(){
       console.log('Set Time : ',nomnom); //error
    },500*(i) ) //step by step printing
} 
 
for(var i=0, n=5; i<n;i++){
    var nomnom = a[i];
    setTimeout(function(){
        console.log("var", nomnom, ' ' , i); //error
    },500 )
} 
  
for(var i=0, n=5; i<n;i++){
    let nomnom = a[i];
    var varnomnom = a[i];
    setTimeout(function(){
        //console.log("var", varnomnom , ' ' , i); //error
        console.log("let",nomnom , ' ' , i); //error
    },500)
}

var t0 = performance.now(); 
for(var i=0, n=10; i<n;i++){ 
        console.log("var",   i);  
} 
  
var t1 = performance.now();
console.log("Call to doSomething took " + (t1 - t0) + " milliseconds.")

var t2 = performance.now(); 
for(let i=0, n=10; i<n;i++){ 
        console.log("let",   i);  
}   
var t3 = performance.now();
console.log("Call to doSomething took " + (t3 - t2) + " milliseconds.")
