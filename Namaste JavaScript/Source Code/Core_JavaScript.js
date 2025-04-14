//<===============Lecture 1: Pollyfill for bind method ===========>
// A polyfill is a piece of code that provides modern functionality on older browsers that do not natively support it. 
// It allows developers to use new JavaScript features or web platform APIs in outdated environments,
// ensuring code consistency across different browsers.
//
//Thats how below code show traditional bind method work
// let name = {
//     firstname: "Noor",
//     lastname:  "Alam"
// }

// let printName = function(){
//     console.log(this.firstname + " " + this.lastname);
// };

// let printMyName = printName.bind(name);
// printMyName();


//
//######### Writing our own bind method
// let name = {
//     firstname: "Noor",
//     lastname:  "Alam"
// }

// let printName = function(){
//     console.log(this.firstname + " " + this.lastname);
// };

// let printMyName = printName.bind(name);
// printMyName();

// //my own bind method
// //step1
// // Function.prototype.mybind = function(){
// //     // this-->printName//this refer to printName method
// //     // take this as variable
// //     let obj = this
// //     return function(){
// //         printName()//printName refere to this so I have assign a variable for this as obj
// //     }
// // }
// //     
// // let printMyName2 = printName.mybind(name);
// // printMyName2();


// //step2
// Function.prototype.mybind = function(...args){
//     // this-->printName//this refer to printName method
//     // take this as variable
//     let obj = this
//     return function(){
//         // printName()//printName refere to this so I have assign a variable for this as obj
//     //    obj.call(name);
//        obj.call(args[0]);
//     }
// }
// let printMyName2 = printName.mybind(name);
// printMyName2();


///
// let name = {
//     firstname: "Noor",
//     lastname:  "Alam"
// }

// let printName = function(hometown){
//     console.log(this.firstname + " " + this.lastname + " , " + hometown);
// };

// let printMyName = printName.bind(name, "Delhi");
// printMyName();

// //my own bind method
// // Function.prototype.mybind = function(...args){
// //     let obj = this
// //     return function(){
// //        obj.call(args[0]);
// //     }
// // }
// // let printMyName2 = printName.mybind(name, "Dehradun");
// // printMyName2();

// Function.prototype.mybind = function(...args){
//     let obj = this
//     params = args.slice(1);
//     return function(){
//     //    obj.call(args[0]);
//        obj.apply(args[0], params);
//     }
// }
// let printMyName2 = printName.mybind(name, "Dehradun");
// printMyName2();

//
// let name = {
//     firstname: "Noor",
//     lastname:  "Alam"
// }

// let printName = function(hometown, state){
//     console.log(this.firstname + " " + this.lastname + " , " + hometown + " , " + state);
// };

// let printMyName = printName.bind(name, "Delhi");
// printMyName("Uttar Pradesh");

// //my own bind method
// Function.prototype.mybind = function(...args){
//     let obj = this
//     params = args.slice(1);
//     return function(...args2){//args2 array for Uttar Pradesh
//     //    obj.call(args[0]);
//     //    obj.apply(args[0], params);
//        obj.apply(args[0], [...params, ...args2]);//ES6 syntax for [...params, ...args2]
//     }
// }
// let printMyName2 = printName.mybind(name, "Dehradun");
// printMyName2("Uttar Pradesh");

//
// let name = {
//     firstname: "Noor",
//     lastname:  "Alam"
// }

// let printName = function(hometown, state, country){
//     console.log(this.firstname + " " + this.lastname + " , " + hometown + " , " + state + " , " + country);
// };

// let printMyName = printName.bind(name, "Delhi");
// printMyName("Uttar Pradesh", "India");

// //my own bind method
// Function.prototype.mybind = function(...args){
//     let obj = this
//     params = args.slice(1);
//     return function(...args2){//args2 array for Uttar Pradesh
//     //    obj.call(args[0]);
//     //    obj.apply(args[0], params);
//        obj.apply(args[0], [...params, ...args2]);//ES6 syntax for [...params, ...args2]
//     }
// }
// let printMyName2 = printName.mybind(name, "Dehradun");
// printMyName2("Colombo", "Sri Lanka");


//
// let name = {
//     firstname: "Noor",
//     lastname:  "Alam"
// }

// let printName = function(hometown, state, country){
//     console.log(this.firstname + " " + this.lastname + " , " + hometown + " , " + state + " , " + country);
// };

// let printMyName = printName.bind(name, "Delhi", "Uttar Pradesh",);
// printMyName("India");//check this point

// //my own bind method
// Function.prototype.mybind = function(...args){
//     let obj = this
//     params = args.slice(1);
//     return function(...args2){//args2 array for Uttar Pradesh
//     //    obj.call(args[0]);
//     //    obj.apply(args[0], params);
//        obj.apply(args[0], [...params, ...args2]);//ES6 syntax for [...params, ...args2]
//     }
// }
// let printMyName2 = printName.mybind(name, "Dehradun", "Colombo",);
// printMyName2("Sri Lanka");


// <===============================Lecture 2: Debouncing And Throttling==================>
// Debouncing Ensures that a function is executed only after a certain delay has passed since the last time it was called.
//Debouncing limit the execution of function call
//     Example Use Cases:
// ✅ Search bar suggestions (wait for user to stop typing).
// ✅ Window resizing event (wait for user to finish resizing).

// Implementation of Debouncing:
// function debounce(func, delay) {
//     let timer;
//     return function (...args) {
//         clearTimeout(timer);
//         timer = setTimeout(() => func.apply(this, args), delay);
//     };
// }

// // Example: Search bar input handling
// function searchHandler(event) {
//     console.log("Fetching search results for:", event.target.value);
// }

// const debouncedSearch = debounce(searchHandler, 500);
// document.getElementById("searchInput").addEventListener("input", debouncedSearch);
// 💡 How It Works?
// Every time the event fires, it cancels the previous timer and sets a new one.
// The function executes only after the user stops triggering the event for delay milliseconds.

/////////////////////////
///Throttling
// Ensures that a function is executed only after a certain delay has passed since the last time it was called.
// Example Use Cases:
// ✅ Handling scroll events (limit execution to once every X ms).
// ✅ Handling window resize efficiently.
// ✅ Limiting button clicks (e.g., preventing multiple submissions).

// Implementation of Throttling:

// function throttle(func, limit) {
//     let inThrottle;
//     return function (...args) {
//         if (!inThrottle) {
//             func.apply(this, args);
//             inThrottle = true;
//             setTimeout(() => (inThrottle = false), limit);
//         }
//     };
// }

// // Example: Scroll event handling
// function onScroll() {
//     console.log("User is scrolling...");
// }

// const throttledScroll = throttle(onScroll, 1000);

// window.addEventListener("scroll", throttledScroll);
// 💡 How It Works?

// The function executes immediately on the first event.
// Further calls within the limit time are ignored.
// After the limit time passes, the function can execute again.


// Key Differences 
// Feature	    Debouncing 🕒	                                                   Throttling 🚀
// Definition	Executes after a delay when no further calls are made.	            Executes at most once in a given time interval.
// Use Cases	Search box, window resize, form validation.	                        Scroll events, button clicks, API rate limiting.
// Execution   Style	Waits and delays execution until inactivity.	            Ensures execution happens at regular intervals.
// Control	    Controls frequency of function calls.	                            Controls rate of function calls.

// Key Difference
// Debouncing	                                                                Throttling
// Waits for a certain amount of time after the last event before executing.	Executes the function at most once in a specified time interval.
// Resets the timer every time a new event occurs.	Does not reset the timer;   it strictly limits the rate of execution.
// Best for actions that should happen after inactivity (e.g., search input).	Best for actions that should happen at a controlled rate (e.g., scrolling).


//<===============Lecture3: Call, Apply, bind method===============>
//     call(), apply(), and bind() in JavaScript
// These methods allow us to explicitly set the value of this in a function.

//
// 1. call()
// 👉 Calls a function with a given this value and arguments passed individually.
// function greet(name, age) {
//     console.log(`Hello, my name is ${name} and I am ${age} years old.`);
// }

// greet.call(null, "Alice", 25); // Output: Hello, my name is Alice and I am 25 years old.
// ✅ Key Points:

// The first argument is the this context (use null if not needed).
// Other arguments are passed individually (comma-separated).

// 2. apply()
// 👉 Similar to call(), but arguments are passed as an array.

// javascript
// Copy
// Edit
// greet.apply(null, ["Bob", 30]); // Output: Hello, my name is Bob and I am 30 years old.
// ✅ Key Points:

// The first argument is the this context.
// The second argument is an array of arguments.
// 3. bind()
// 👉 Returns a new function with this bound to a specific object.

// const boundGreet = greet.bind(null, "Charlie", 40);
// boundGreet(); // Output: Hello, my name is Charlie and I am 40 years old.
// ✅ Key Points:

// Unlike call() and apply(), bind() does not immediately invoke the function.
// It returns a new function that can be called later.
// Comparison Table
// Method	Execution	Argument Format	            Returns a New Function?
// call()	Immediate	Comma-separated values	    ❌ No
// apply()	Immediate	Arguments as an array	    ❌ No
// bind()	Delayed	    Comma-separated values	    ✅ Yes

//
// Example Use Case: Borrowing Methods
// const person1 = { name: "Alice" };
// const person2 = { name: "Bob" };

// function sayHello() {
//     console.log(`Hello, my name is ${this.name}`);
// }

// sayHello.call(person1); // Hello, my name is Alice
// sayHello.apply(person2); // Hello, my name is Bob

// const boundFunction = sayHello.bind(person1);
// boundFunction(); // Hello, my name is Alice
// 💡 When to Use?

// call() → When you need to invoke a function immediately with individual arguments.
// apply() → When arguments are in an array.
// bind() → When you need a function with a preset this value for later execution.


//
// let name = {
//     firstname: "Noor",
//     lastName: "Alam",
//     printFullName: function(){
//         // console.log("name2", name2)
//         console.log(this.firstname + " " + this.lastName)
//     }
// }
// // name.printFullName();

// let name2 = {
//     firstname: "Sachin",
//     lastName: "Tendulkar"
// }
// //Function borrowing
// //call
// name.printFullName.call(name2);


//
// let name = {
// firstName: "Noor",
// lastName: "Alam",
// }

// let printFullName = function(hometown, state){
//     console.log(this.firstName + " " + this.lastName + " from " + hometown + " , " + state);
// }
// printFullName.call(name, "Lucknow", "UttarPradesh");

// let name2 = {
//     firstName: "Sachin",
//     lastName: "Tendulkar"
// }
// //Function borrowing
// //call
// printFullName.call(name2, "Mumbai", "Maharastra");
// // The only Difference between call and applly is a way to pass argument
// printFullName.apply(name2, ["Mumbai", "Maharastra"]);
// //Bind method exactly look same as call method but the difference is that instead of directly calling the call method,
// //  bind method bind this method printFullName with object and return the copy of that method
// let printMyName = printFullName.bind(name2, "Patna", "Bihar")
// console.log(printMyName)
// printMyName();

//
// Call method which is used to invoked a function directly by passing in the refference which points to this variable inside the method
//Apply is exactly the same as call method but the difference is it take second argument as the array list of the parameter which need to
// passed the printfullName function
//Bind Method does not directly invoked the method but give the copy of exactly same method which can be invoked later 


//
//<===================Lec4: Currying==================>
// Currying is a technique where a function that takes multiple arguments is transformed into a sequence of functions, 
// each taking one argument
// function calculatePrice(price) {
//     return function(discount) {
//         return function(tax) {
//             return (price - discount) + (price * tax);
//         };
//     };
// }

// const regular = calculatePrice(100)(5); // 5% discount
// console.log(regular(0.1)); // 105

//
// let multiply = function(x, y){
// console.log(x*y);
// }
// let multiplyByTwo = multiply.bind(this, 2);

//
// let multiply = function(x, y){
//     console.log(x*y);
//     }
// let multiplyByTwoo= function(y){
//     let x = 2;
//     console.log(x*y);
// }
// let multiplyByTwo = multiply.bind(this, 2);

//
// let multiply = function(x, y){
//     console.log(x*y);
//     }
// let multiplyByTwo = multiply.bind(this, 2);
// multiplyByTwo(5);

//
// let multiply = function(x, y){
//     console.log(x*y);
//     }
// let multiplyByTwo = multiply.bind(this, 2, 3,);
// multiplyByTwo(5);

//
// let multiply = function(x, y){
//     console.log(x*y);
//     }
// let multiplyByTwo = multiply.bind(this);
// multiplyByTwo(5,2)

//
//Using function closures
// let multiply = function (x) {
//     return function (y) {
//         console.log(x * y);
//     }
// }
// let multiplyByTwo = multiply(5);
// multiplyByTwo(2);

//<===============Lec5: Async vs deffer attribute in javaScript==================>
// Async vs Defer in JavaScript
// The async and defer attributes in JavaScript are used to load external scripts asynchronously.
// Async Attribute
// 👉 The async attribute downloads the script asynchronously while the HTML document continues to load.
// 👉 The script executes immediately after downloading, regardless of the order
// 👉 Best for non-dependent scripts (e.g., Google Analytics).
// Example:
// <script async src="script.js"></script>
// Defer Attribute
// 👉 The defer attribute downloads the script asynchronously while the HTML document continues to load.
// 👉 The script executes only after the HTML document has been fully parsed.
// 👉 Best for dependent scripts (e.g., jQuery).
// Example:
// <script defer src="script.js"></script>
// 💡 Key Differences
// async → Downloads and executes the script asynchronously.
// defer → Downloads the script asynchronously but executes it after the HTML document is fully parsed.
// When to Use?
// async → For non-dependent scripts that can execute independently.
// defer → For scripts that depend on the DOM or other scripts.
// Example Use Cases
// async → Google Analytics, social media widgets.
// defer → jQuery, custom scripts that depend on the DOM.

//<=================Lec6: Event Bubbling and Event Capturing in JavaScript==================>
// Event Bubbling and Event Capturing in JavaScript
// Event propagation in JavaScript occurs in two phases: capturing and bubbling.    
// Event Capturing
// 👉 The event starts from the top element and trickles down to the target element.
// 👉 Use addEventListener() with the third parameter set to true.  
// Example:
// element.addEventListener("click", myFunction, true);
// Event Bubbling
// 👉 The event starts from the target element and bubbles up to the top element.
// 👉 Use addEventListener() with the third parameter set to false (default).
// Example:
// element.addEventListener("click", myFunction);
// 💡 Key Differences
// Capturing → Top-down event propagation.
// Bubbling → Bottom-up event propagation.
// When to Use?
// Capturing → For event delegation and handling events at the top level.
// Bubbling → For handling events on specific elements.
// Example Use Cases
// Capturing → Event delegation, global event handling.
// Bubbling → Click events, form submissions.

//<=================Lec7: Event Delegation in JavaScript==================>
// Event Delegation in JavaScript
// Event delegation is a technique where a single event listener is attached to a parent element
// instead of attaching it to multiple child elements. This improves performance and simplifies code.   
// Example: 
// <ul id="parent">
//     <li>Item 1</li>
//     <li>Item 2</li>
//     <li>Item 3</li>
// </ul>    
// const parent = document.getElementById("parent");
// parent.addEventListener("click", function(event) {
//     if (event.target.tagName === "LI") {
//         console.log("Clicked on:", event.target.textContent);
//     }
// });
// });
// 💡 Key Benefits
// Improved performance by reducing the number of event listeners.
// Simplified code by handling events at a higher level.
// Dynamic elements can be added without needing to attach new event listeners.
// Example Use Cases
// Dynamic lists, menus, and forms.
// Handling events for dynamically added elements.
// Handling events for multiple child elements efficiently.

//
// document.querySelector("#category").addEventListener("click", function(event) {
//     console.log("Clicked on:", event.target.id);
//     window.location.href = "/" + event.target.id;
// });


//
// document.querySelector('#form').addEventListener('submit', function(event) {
//     console.log(e);
//     if(event.target.dataset.uppercase != undefined) {
//         event.target.value = event.target.value.toUpperCase();
//     }
// })


//<=================Lec8: Prototype and inheritance in JavaScript==================>
// Prototypes and Inheritance in JavaScript
//  Prototype:	A way to share properties/methods across objects via a hidden link	
// Inheritance: A mechanism by which one object (child) gets access to another (parent)
// Prototypes are a fundamental concept in JavaScript that allows for inheritance and sharing of properties and methods.
// Every JavaScript object has a prototype, which is another object from which it can inherit properties and methods.
// This allows for efficient memory usage and code reuse.
// Example:
// let arr = ["Akshay", "Alok", "Amit"];
// let object = {
//     name: "Noor",
//     city: "Delhi",
//     getIntro: function(){
//         console.log(this.name + " from " + this.city);
//     }
// }

// let object2 = {
//     name: "Aditya",
//     city: "Hyderabad"
// }

// object.getIntro(); 
//Never do this
// object2._proto_= object;


//<=============== Lecture9: Throttling in JavaScript =========>
// Throttling in JavaScript
// Throttling is a technique used to limit the number of times a function can be executed over time.
// It ensures that a function is called at most once in a specified time interval.
// This is useful for performance optimization, especially in scenarios like scrolling, resizing, or API calls.

// Debounce Example (Wait and Fire Once)
// function debounce(fn, delay) {
//     let timeoutId;
//     return function(...args) {
//         clearTimeout(timeoutId);
//         timeoutId = setTimeout(() => fn.apply(this, args), delay);
//     };
// }

// const onInput = debounce(() => {
//     console.log("Search triggered");
// }, 300);

// // Imagine this is triggered on input keypress

// //
// // Throttle Example (Fire at Intervals)
// function throttle(fn, limit) {
//     let lastCall = 0;
//     return function(...args) {
//         const now = Date.now();
//         if (now - lastCall >= limit) {
//             lastCall = now;
//             fn.apply(this, args);
//         }
//     };
// }

// const onScroll = throttle(() => {
//     console.log("Scroll event");
// }, 500);
// Triggered on scroll


//Debouncing vs Throttling
// Feature	      Debounce	                                                    Throttle
// Definition	  Delays the function call until                                Ensures the function is called at
//               after a certain time has passed since the last call	        most once every specified time interval
// Use Case	  Typing in a search box, resize events	                        Scrolling, mouse movement, API polling
// Behavior	  Executes function once after user stops triggering for X ms	Executes function every X ms, no matter how frequently it's triggered
// Control	      Controls the burst of events	                                Controls the rate of events