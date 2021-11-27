//Challenge 1
const a = 1; const b = 2; const c = 3;

(function firstFunction () {
  const b = 5; const c = 6;

  (function secondFunction () {
    const b = 8;
    // solution
    console.log(`a: ${a}, b: ${b}, c: ${c}`);
    (function thirdFunction () {
      const a = 7; const c = 9;

      (function fourthFunction () {
        const a = 1; const c = 8;
      })()
    })()
  })()
})()


// Challenge 2 - Bert loves his Pidgeons
// Solution 1
var bird = 'Pidgeons';
( function () {
    if ( typeof bird === 'undefined' ){
        bird = 'Rubber Duck';
        console.log('Ernie loves his ' + bird );
    } else {
        console.log('Bert loves his ' + bird );
    }
}() );

// Solution 2
( function () {
    var bird = 'Pidgeons';
    if ( typeof bird === 'undefined' ){
        bird = 'Rubber Duck';
        console.log('Ernie loves his ' + bird );
    } else {
        console.log('Bert loves his ' + bird );
    }
}() );