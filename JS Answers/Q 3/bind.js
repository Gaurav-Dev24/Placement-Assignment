//   bind()

const person = {
    name: 'John',
    greet: function (message) {
      console.log(`${message}, ${this.name}!`);
    },
  };
  
  const anotherPerson = {
    name: 'Jane',
  };
  
  const greetJane = person.greet.bind(anotherPerson);
  greetJane('Hello');
  // Output: "Hello, Jane!"