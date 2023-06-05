// call()

const person = {
    name: 'John',
    greet: function (message) {
      console.log(`${message}, ${this.name}!`);
    },
  };
  
  const anotherPerson = {
    name: 'Jane',
  };
  
  person.greet.call(anotherPerson, 'Hello');
  // Output: "Hello, Jane!"
 