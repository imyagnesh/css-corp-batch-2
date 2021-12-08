{
  var a = 1;
}

// Old Javascript scoping is only working with functions
function greet() {
  var b = 2;
  console.log(b);
}

// greet()

// IIFE (intermediate invoke function expression) // self calling function

(function () {
  var c = 1;
  console.log(c);
})();

console.log(c);
