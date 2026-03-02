getName() // namaste JS
console.log(x) // undefined

console.log(getName) // it prints the function itself

var x = 7

//assigned as a function
function getName(){
  console.log("Namaste JS")
}

// assigned as a variable
var getName1 = function(){
  console.log("Name")
}

// assigned as a variable
var getName = () => {
  console.log("Name")
}

getName() // namaste JS
console.log(x) // 7

console.log(getName)
//it prints the function itself