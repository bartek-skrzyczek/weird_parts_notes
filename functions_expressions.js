// expression: a unit of code that results in a value
// variable doesnt need to be saved or stored!


// function statement does not result in a value

greet();

// function statement
function greet() {
  console.log('hi');
}

anonymousGreet(); //Uncaugh TypeError! variable is undefined!

// function expression
var anonymousGreet = function() {
  console.log('hi');
}

anonymousGreet(); //it works here!

function log(a) {
  console.log(a);
}

log(3);

log(function() {
  console.log('hi');
});
