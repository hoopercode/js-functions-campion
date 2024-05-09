// Topic 1: Introduction to Functions

// Example of a simple function without parameters
function greet() {
  console.log("Hello, world!");
}

// Calling the function
greet();




// Topic 2: Writing Basic Functions

// Define a function to print a custom message
function printMessage(message) {
  console.log(message);
}

// Calling the function with different messages
printMessage("Welcome to JavaScript functions!");
printMessage("Functions are awesome!");

function greetPerson(name) {
  console.log("Hello, " + name + "!");
}
greetPerson("Alice"); // Output: Hello, Alice!
greetPerson("Bob");   // Output: Hello, Bob!



// Topic 3: Function with Parameters

// Function to calculate the sum of two numbers
function add(num1, num2) {
  return num1 + num2;
}

// Calling the function with different arguments
let sum1 = add(5, 3);
let sum2 = add(10, -2);
console.log("Sum 1:", sum1); // Output: 8
console.log("Sum 2:", sum2); // Output: 8


function calculateTriangleArea(base, height) {
    return 0.5 * base * height;
  }
  console.log(calculateTriangleArea(4, 3));   // Output: 6
  console.log(calculateTriangleArea(5, 8));   // Output: 20



// Topic 4: Return Statements

// Function to multiply two numbers
function multiply(num1, num2) {
  return num1 * num2;
}

// Calling the function with different arguments
let product1 = multiply(5, 3);
let product2 = multiply(10, -2);
console.log("Product 1:", product1); // Output: 15
console.log("Product 2:", product2); // Output: -20

// Function to divide two numbers
function divide(num1, num2) {
  if (num2 !== 0) {
    return num1 / num2;
  } else {
    return "Cannot divide by zero!";
  }
}



// Calling the function with different arguments
let output1 = divide(10, 2);
let output2 = divide(5, 0);
console.log("output 1:", output1); // Output: 5
console.log("output 2:", output2); // Output: "Cannot divide by zero!"

function checkNumberSign(num) {
    if (num > 0) {
      return "Positive";
    } else if (num < 0) {
      return "Negative";
    } else {
      return "Zero";
    }
  }
  console.log(checkNumberSign(5));   // Output: Positive
  console.log(checkNumberSign(-2));  // Output: Negative
  console.log(checkNumberSign(0));   // Output: Zero

// Function to calculate the average of numbers in an array
function average(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum / numbers.length;
}

// Calling the function with different arrays of numbers
let arr1 = [1, 2, 3, 4, 5];
let arr2 = [10, 20, 30];
console.log("Average 1:", average(arr1)); // Output: 3
console.log("Average 2:", average(arr2)); // Output: 20
