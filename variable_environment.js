function b() {
  var myVar; //undefined, because it is creating a new variable!
}

function a() {
  var myVar = 2;
  b();
}

var myVar = 1;
a();
