// This is a comment in JS
console.log("Hello JS World");
// Variable declaration
// let name='Marwan';
// console.log(name);
// Variables can't be reserved keyword
// let if = 23;
// They can't start with a number
// let 1we='34';
// Can't contain a space or hyphen (-)
// let w-er=23;
// Are case-sensitive
// let fristname;
// let firstName; //Camel Notation
// let firstName="Marwan", lastName="Radwan";
// console.log(firstName);
// firstName="Mohammed";
// console.log(firstName);
// const age=34;
// age=50;
// Primitive Data Types (String, Number, Boolean, Undefined, Null, Simple-ES6)

let name = "Marwan";
let age = 50;
let isApproved = false;
let firstname = undefined; //not initialised
let selectedColor = null; //Clear the value of the variable

// Static vs Dynamic Language
// variable type can't change vs variable type changes during run time
// typeof variableName;

// Reference Types (Object, Array and Functions))
// objects have attributes/properties=Keys and Values and behavior functions
let person = {
  name: "Marwan",
  age: 50,
};
// Dot Notation
console.log(person);
console.log(person.name);
// Bracket Notation
person["name"] = "Mary";
console.log(person.name);

// Array
// let selectedColors=[]; // Empty Array
let selectedColors = ["red", "blue", "white"];
console.log(selectedColors[2]);
selectedColors[4] = "grey";
console.log(selectedColors);
// Array Size is Dynamic (Length) and Types of objects
selectedColors[5] = 56;
console.log(selectedColors);

// array is an object and can be accessed as object (typeof arrayname)
console.log(selectedColors.length);

// Functions [Fundemental Building Block] (No Parameters)
function greet() {
  //Function Body
  console.log("Hello World from within a Function ");
}
greet();

// Using inputs (Parameters) to change how functions behave
function greet2(name) {
  console.log("Hello " + name);
}
// Adding the Argument
greet2('Marwan');
greet2('Mary');
// Adding new Parameter
function greet3(firstName,lastName) {
    console.log("Hello " + firstName+' '+lastName);
  }
  greet3('Marwan','Radwan');

  // Types of Functions calling parameters or calling other functions
  function square(number) {
    return number*number;
  }
  let s=square(2);
  console.log(s);
  console.log(square(2));