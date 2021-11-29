// Challenge-1
const a = 1; const b = 2; const c = 3;

(function firstFunction () {
  const b = 5; const c = 6;
  
  (function secondFunction () {
    const b = 8;
     console.log(`a: ${a}, b: ${b}, c: ${c}`);
    (function thirdFunction () {
      const a = 7; const c = 9;

      (function fourthFunction () {
        const a = 1; const c = 8;
      })()
    })()
  })()
})()

// Challenge-2 
var bird = 'Pidgeons';
( function () {
    if ( typeof bird === 'undefined' ){
        const bird = 'Rubber Duck';
        console.log('Ernie loves his ' + bird );
    } else {
        console.log('Bert loves his ' + bird );
    }
}() );



