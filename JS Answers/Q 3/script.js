// call()

// const person = {
//     name: 'John',
//     greet: function (message) {
//       console.log(`${message}, ${this.name}!`);
//     },
//   };
  
//   const anotherPerson = {
//     name: 'Jane',
//   };
  
//   person.greet.call(anotherPerson, 'Hello');
  // Output: "Hello, Jane!"

//   apply()

// const person = {
//     name: 'John',
//     greet: function (message) {
//       console.log(`${message}, ${this.name}!`);
//     },
//   };
  
//   const anotherPerson = {
//     name: 'Jane',
//   };
  
//   person.greet.apply(anotherPerson, ['Hello']);
  // Output: "Hello, Jane!"

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
  