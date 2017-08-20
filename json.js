var objectLiteral = {
  firstname: 'Mary',
  isAProgrammer: true
}

console.log(objectLiteral);

<object>
  <firstname>Mary</firstname>
  <isAProgrammer>Mary</isAProgrammer>
</object>

//JSON:
// json is a subset of such notation



// string to JSON
console.log(JSON.stringify(objectLiteral));

{
  "firstname": "Mary",
  "isAProgrammer": "true"
}

//JSON to string
var jsonValue = JSON.parse('{ "firstname": "Mary", "isAProgrammer": true }');

console.log(jsonValue);
