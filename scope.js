//challenge1
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

//challenge2
( function () {
    var bird = 'Pidgeons'; //this is moved inside the funtion definition.
    if ( typeof bird === 'undefined' ){
        var bird = 'Rubber Duck';
        console.log('Ernie loves his ' + bird );
    } else {
        console.log('Bert loves his ' + bird );
    }
}() );