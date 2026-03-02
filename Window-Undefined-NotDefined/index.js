// var a = 10 // global spave
function b (){ // global space
  var x = 20 // not in global space
  console.log(x); // not in global space
}

var a = 7

var b; // through out is its considered as undefined


var c;
console.log(c); // undefined

c = 10;
console.log(c); // 10

c = 'Rithika'
console.log(c)