function greet(name){
  name = name || '<your name here>'
  console.log('Hello ' + name);
}

greet('Tony');
greet();

//Hello <your name here>?

// undefined || "hello" -> "hello", because it can be returned to true
