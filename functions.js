// Entire Function Hoisted
// Named Function
// function add(a, b) {
//     return a + b;
// }

(function () {
  var a = 1;

  console.log(a);
})();

// Anonimous Function

const add = function (a, b) {
  return a + b;
};

// var add = function() {
//     return 'hacked...'
// }

console.log(add(1, 2));

// Hoisted
// function add() {
//     return "Hacked..."
// }
