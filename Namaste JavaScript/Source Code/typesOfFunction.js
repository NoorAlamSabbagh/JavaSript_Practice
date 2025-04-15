// 1. Function Declaration
// Uses the function keyword.
// Hoisted (can be called before its definition in the code).
// Syntax:
// function functionName(parameters) {
//     // Function body
// }
// //Code
// function add(a, b) {
//     return a + b;
// }
// console.log(add(2, 3)); // Output: 5

//
//(2). Function Expression
// A function is assigned to a variable.
// Not hoisted (cannot be called before its definition).
// Syntax:
// const functionName = function(parameters) {
//     // Function body
// };
// const add = function(a, b) {
//     return a + b;
// };
// console.log(add(2, 3)); // Output: 5

//
// (3). Arrow Function (ES6)
// A concise way to write functions using =>.
// Does not have its own this or arguments binding.
// Syntax
// const functionName = (parameters) => {
//     // Function body
// };
// If the function body is a single expression, you can omit the {} and return:
// const functionName = (parameters) => expression;
// const add = (a, b) => a + b;
// console.log(add(2, 3)); // Output: 5

//
// (4). Immediately Invoked Function Expression (IIFE)
// A function that is executed immediately after it is defined.
// Often used to create a private scope.
// Syntax:
// (function(parameters) {
//     // Function body
// })(arguments);
//
// (function(a, b) {
//     console.log(a + b); // Output: 5
// })(2, 3);

//
// (5)Generator Function (ES6)
// A function that can be paused and resumed using the yield keyword.
// Syntax:
// function* functionName(parameters) {
//     // Function body with yield
// }
// function* generateSequence() {
//     yield 1;
//     yield 2;
//     yield 3;
// }
// const generator = generateSequence();
// console.log(generator.next().value); // Output: 1

//
// (6) Async Function (ES7)
// A function that returns a promise and can use the await keyword.
// Syntax
// async function functionName(parameters) {
//     // Function body with await
// }
// async function fetchData() {
//     const response = await fetch('https://api.example.com/data');
//     const data = await response.json();
//     return data;
// }


//
// (7). Method (Function as an Object Property)
// A function defined as a property of an object.
// Syntax
// const obj = {
//     methodName(parameters) {
//         // Function body
//     }
// };
// const calculator = {
//     add(a, b) {
//         return a + b;
//     }
// };
// console.log(calculator.add(2, 3)); // Output: 5

//
// (8)Constructor Function
// Used to create objects with the new keyword.
// Syntax:
// function FunctionName(parameters) {
//     this.property = value;
// }
// function Person(name) {
//     this.name = name;
// }
// const person = new Person('John');
// console.log(person.name); // Output: John

//
// (9). Class Method (ES6)
// Functions defined inside a class.
// Syntax:
// class ClassName {
//     methodName(parameters) {
//         // Function body
//     }
// }
// class Calculator {
//     add(a, b) {
//         return a + b;
//     }
// }
// const calc = new Calculator();
// console.log(calc.add(2, 3)); // Output: 5

//
// (10). Callback Function
// A function passed as an argument to another function.
// Syntax
// function higherOrderFunction(callback) {
//     callback();
// }
// function greet() {
//     console.log('Hello!');
// }
// higherOrderFunction(greet); // Output: Hello!

//
// (11). Recursive Function
// A function that calls itself.
// Syntax:
// function functionName(parameters) {
//     if (baseCase) return result;
//     return functionName(modifiedParameters);
// }
// function factorial(n) {
//     if (n === 0) return 1;
//     return n * factorial(n - 1);
// }
// console.log(factorial(5)); // Output: 120

//
// (12). Higher-Order Function
// A function that takes one or more functions as arguments or returns a function.
// Example
// function higherOrderFunction(callback) {
//     return function() {
//         callback();
//     };
// }
// const greet = () => console.log('Hello!');
// const wrappedGreet = higherOrderFunction(greet);
// wrappedGreet(); // Output: Hello!

//
// Summary
// JavaScript provides many ways to define functions, each suited for different use cases. The most common are:
// (1)Function Declaration
// (2)Function Expression
// (3)Arrow Function
// (4)IIFE
// (5)Generator Function
// (6)Async Function
// (7)Method
// (8)Constructor Function
// (9)Class Method
// (10)Callback Function
// (11)Recursive Function
// (12)Higher-Order Function
// The choice of which to use depends on the context and requirements of your code









////////////////////////
// The choice of which function type to use in JavaScript depends on the specific use case, context, and requirements of your code. Each function type has its own strengths and weaknesses, and understanding these will help you decide which one to use in a given situation. Below is a detailed guide on **where to use each function type** and **which one is best suited for specific scenarios**:

// ---

// ### 1. **Function Declaration**
//    - **Use Case**:
//      - When you need a reusable function that can be called anywhere in your code (even before its definition, due to hoisting).
//      - For general-purpose functions.
//    - **Best For**:
//      - Main logic or core functionality.
//      - Functions that need to be hoisted.
//    - **Example**:
//      ```javascript
//      function calculateArea(width, height) {
//          return width * height;
//      }
//      ```

// ---

// ### 2. **Function Expression**
//    - **Use Case**:
//      - When you want to assign a function to a variable or pass it as an argument to another function.
//      - When you don’t need hoisting.
//    - **Best For**:
//      - Callback functions.
//      - Functions that are conditionally defined.
//    - **Example**:
//      ```javascript
//      const calculateArea = function(width, height) {
//          return width * height;
//      };
//      ```

// ---

// ### 3. **Arrow Function**
//    - **Use Case**:
//      - When you need a concise syntax for short functions.
//      - When you want to preserve the lexical `this` (e.g., in event handlers or callbacks).
//    - **Best For**:
//      - Callback functions (e.g., in `map`, `filter`, `reduce`).
//      - Short, one-liner functions.
//    - **Example**:
//      ```javascript
//      const calculateArea = (width, height) => width * height;
//      ```

// ---

// ### 4. **IIFE (Immediately Invoked Function Expression)**
//    - **Use Case**:
//      - When you need to create a private scope and execute a function immediately.
//      - To avoid polluting the global namespace.
//    - **Best For**:
//      - Initialization code.
//      - Module patterns (before ES6 modules).
//    - **Example**:
//      ```javascript
//      (function() {
//          const message = "Hello, World!";
//          console.log(message);
//      })();
//      ```

// ---

// ### 5. **Generator Function**
//    - **Use Case**:
//      - When you need a function that can pause and resume execution (e.g., for lazy evaluation or iterators).
//    - **Best For**:
//      - Generating sequences or handling asynchronous operations in a synchronous style.
//    - **Example**:
//      ```javascript
//      function* generateSequence() {
//          yield 1;
//          yield 2;
//          yield 3;
//      }
//      ```

// ---

// ### 6. **Async Function**
//    - **Use Case**:
//      - When working with asynchronous code (e.g., API calls, file I/O).
//      - When you want to use `await` to handle promises in a synchronous-like manner.
//    - **Best For**:
//      - Asynchronous operations.
//      - Simplifying promise-based code.
//    - **Example**:
//      ```javascript
//      async function fetchData() {
//          const response = await fetch('https://api.example.com/data');
//          const data = await response.json();
//          return data;
//      }
//      ```

// ---

// ### 7. **Method (Function as an Object Property)**
//    - **Use Case**:
//      - When defining functions that belong to an object.
//    - **Best For**:
//      - Object-oriented programming.
//      - Encapsulating behavior within objects.
//    - **Example**:
//      ```javascript
//      const calculator = {
//          add(a, b) {
//              return a + b;
//          }
//      };
//      ```

// ---

// ### 8. **Constructor Function**
//    - **Use Case**:
//      - When creating multiple objects with the same properties and methods.
//    - **Best For**:
//      - Object creation (before ES6 classes).
//    - **Example**:
//      ```javascript
//      function Person(name) {
//          this.name = name;
//      }
//      const person = new Person('John');
//      ```

// ---

// ### 9. **Class Method (ES6)**
//    - **Use Case**:
//      - When working with ES6 classes and object-oriented programming.
//    - **Best For**:
//      - Modern object-oriented JavaScript.
//    - **Example**:
//      ```javascript
//      class Calculator {
//          add(a, b) {
//              return a + b;
//          }
//      }
//      ```

// ---

// ### 10. **Callback Function**
//    - **Use Case**:
//      - When passing a function as an argument to another function (e.g., event handlers, array methods).
//    - **Best For**:
//      - Asynchronous operations (before promises and async/await).
//      - Higher-order functions.
//    - **Example**:
//      ```javascript
//      function greet(callback) {
//          callback();
//      }
//      greet(() => console.log('Hello!'));
//      ```

// ---

// ### 11. **Recursive Function**
//    - **Use Case**:
//      - When solving problems that can be broken down into smaller, similar subproblems (e.g., factorial, tree traversal).
//    - **Best For**:
//      - Algorithms like divide-and-conquer.
//    - **Example**:
//      ```javascript
//      function factorial(n) {
//          if (n === 0) return 1;
//          return n * factorial(n - 1);
//      }
//      ```

// ---

// ### 12. **Higher-Order Function**
//    - **Use Case**:
//      - When a function needs to operate on other functions (e.g., take them as arguments or return them).
//    - **Best For**:
//      - Functional programming.
//      - Creating utility functions (e.g., `map`, `filter`, `reduce`).
//    - **Example**:
//      ```javascript
//      function higherOrderFunction(callback) {
//          return function() {
//              callback();
//          };
//      }
//      ```

// ---

// ### **Which Function is Best to Use?**
// | **Scenario**                              | **Best Function Type**               |
// |-------------------------------------------|--------------------------------------|
// | General-purpose functions                 | Function Declaration                |
// | Callback functions                        | Arrow Function or Function Expression |
// | Asynchronous code                         | Async Function                      |
// | Object methods                            | Method (in objects or classes)      |
// | Object creation                           | Constructor Function or Class       |
// | Private scope or initialization           | IIFE                                |
// | Iterators or lazy evaluation              | Generator Function                  |
// | Recursive algorithms                      | Recursive Function                  |
// | Functional programming (e.g., `map`)      | Higher-Order Function               |
// | Concise, one-liner functions              | Arrow Function                      |

// ---

// ### **General Recommendations**
// 1. **Use Arrow Functions** for short, concise functions and callbacks.
// 2. **Use Function Declarations** for general-purpose, reusable functions.
// 3. **Use Async Functions** for asynchronous code.
// 4. **Use Classes and Methods** for object-oriented programming.
// 5. **Use IIFE** for initialization or to avoid polluting the global scope.
// 6. **Use Recursive Functions** for problems that can be broken into smaller subproblems.

// By understanding the strengths of each function type, you can write cleaner, more efficient, and more maintainable code.