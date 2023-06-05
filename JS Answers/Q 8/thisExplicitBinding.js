function greet() {
    console.log('Hello, ' + this.name);
  }
  
  const person = {
    name: 'John',
  };
  
  greet.call(person); // Output: Hello, John
  