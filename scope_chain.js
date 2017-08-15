/*function b() {
  console.log(myVar);//it refers to outer environment
}

function a() {
  var myVar = 2;
  b();
}

var myVar = 1;
a();

*/


function a() {

  function b() {
    console.log(myVar);

    var myVar = 2;
    b();
  }
}

var myVar = 1;
a();

//global => a =>b
//scope chain b=> a=> global
