//namespace = container for variables

var greet = 'Hello';
var greet = 'Hola';

console.log(greet);

// 1. greet = undefined;
// 2. Hello
// 3. Hola

var english = {};

//or

var english = {
  greetings: {
    basic: 'Hello!'
  }
};

var spanish = {};

//initializating empty object
// object as a container!

spanish.greet = 'Hola';

//english.greetings.greet = 'Hello!'; error! english.greetings = undefined


console.log(english);
