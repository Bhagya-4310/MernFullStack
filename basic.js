// // Variables

// // Menu -> Run -> Run With out Debugging

// let message = "Hello, World!";
// const PI = 3.14;

// // // Function
// // function greet(name) {
// //   return `Hello, ${name}!`;
// // }

// // Output
// console.log(greet("Bhagi")); // Hello, Bhagi!

// //function expression
// // const greet =function (name) {
// //   return `Hello, ${name}!`;
// // }

// // Output
// console.log(greet("Bhagi")); // Hello, Bhagi!


// //arrow functions
// const greet = (name) => 'hello, ${name}!';
// console.log(greet(bhagi));
 
// //IIFE
// (function(){
  console.log("hi kalyan");
// })();

// //call back function
// const greetFn =(name) => {
//   console.log(`Hello, ${name}!`);
// }
// function processName(callback){
//   const name="Mr NBT";
//   callback(name);

// }
// processName(greetFn);


// //Array
// let students=["vinny","rani","bhagi"];
// students.forEach(students => console.log(students));
// //push
// //pop
// //unshift
// //shift
// students.pop();
// students.forEach(students => console.log(students));
// //same declaration for all the methods

// //objects
let person={
  name:"bhagi",
  age:21,
  greet:function(name){
    return `Hello, ${this.name}`;
  },
  };
console.log(person.name);
console.log(person.greet());
//ended


// //event listeners
// button.addEventListener("click",() =>{
//   heading.textContent="button clicked";
// })

// //dom(document,object ,model)
// heading.textContent="button clicked";
// heading.style.color="red";
