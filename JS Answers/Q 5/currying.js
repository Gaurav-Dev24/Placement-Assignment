// Currying 

function multiply(a) {
    return function(b) {
      return a * b;
    };
  }
  
  const multiplyByTwo = multiply(2);
  console.log(multiplyByTwo(5)); // Output: 10
  