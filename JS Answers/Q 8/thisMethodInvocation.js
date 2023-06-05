const person = {
    name: 'John',
    greet: function() {
      console.log('Hello, ' + this.name);
    }
  };
  
  person.greet(); // Output: Hello, John
  