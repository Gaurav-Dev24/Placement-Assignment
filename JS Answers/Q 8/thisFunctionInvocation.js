const person = {
    name: 'John',
    greet: function() {
      console.log(this.name);
    }
  };
  
  person.greet(); // Output: John
  