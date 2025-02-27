// Synchronous Function (Blocking)
// Executes line by line.
// The next line waits for the current one to complete.
// Slows down execution if a function takes time (e.g., reading a file or making an API call).


// example 1
// function add(a, b) {
//     return a + b;
// }

// console.log("Before calling add");
// console.log(add(5, 3)); // Output: 8
// console.log("After calling add");


// example 2
// function greet(name) {
//     console.log("Hello, " + name);
// }

// greet("Alice");



// Asynchronous Function (Non-Blocking)
// Uses async and await (or callbacks/promises).
// Does NOT block other code from running.
// Useful for network requests, file reading, database operations, timers, etc.


// example 1
// async function add(a, b) {
//     return a + b;
// }

// console.log("Before calling add");
// add(5, 3).then(result => console.log(result)); // Output: 8
// console.log("After calling add"); 

// // example 2
// function greet(name, callback) {
//     setTimeout(() => {
//         console.log("Hello, " + name);
//         callback(); // Calling the callback after greeting
//     }, 2000); // 2-second delay
// }

// function done() {
//     console.log("Greeting finished!");
// }

// // Calling the function with a callback
// greet("Alice", done);


// function sayHello(callback) {
//     console.log("Hello!");
//     callback(); // Call the callback function
// }

// function bye() {
//     console.log("Goodbye!");
// }

// // Calling the function with a callback
// sayHello(bye);

