//object is collection of name value pair

// object: primitives, object property and function method

var person = new Object();
person["firstname"] = "Tony";
person["lastname"] = "Roberts";

var firstNameProperty = "firstname";

console.log(person);
console.log(person[firstNameProperty]);

// Object + Tony

console.log(person.firstname);

// Tony

person.address = new Object();
person.address.street = "111 Main St.";
person.address.city = "New York";
person.address.state = "NY";

console.log(person.address.street);
console.log(person.address.city);
console.log(person["address"]["state"]);

//what are other ways to define new Obj?

// finding property and methods using , or [] 
