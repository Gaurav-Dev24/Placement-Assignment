// Currying with multiple arguments

function add(a) {
    return function(b) {
      return function(c) {
        return a + b + c;
      };
    };
  }
  
  const addToFive = add(5);
  const addToFiveAndTwo = addToFive(2);
  console.log(addToFiveAndTwo(3)); // Output: 10
  