function outerFunction() {
    const message = 'Hello';
  
    function innerFunction() {
      console.log(message);
    }
  
    return innerFunction;
  }
  
  const closure = outerFunction();
  closure(); // Output: Hello
  