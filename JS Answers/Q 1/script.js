// Variable Hoisting

console.log(x); // Output: undefined
var x = 5;


// Function Hoisting

sayHello(); // Output: "Hello!"

function sayHello() {
  console.log("Hello!");
}
