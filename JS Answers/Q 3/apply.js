
//   apply()

const person = {
    name: 'John',
    greet: function (message) {
      console.log(`${message}, ${this.name}!`);
    },
  };
  
  const anotherPerson = {
    name: 'Jane',
  };
  
  person.greet.apply(anotherPerson, ['Hello']);
  // Output: "Hello, Jane!"