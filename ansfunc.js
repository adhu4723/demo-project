function toCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}

// Example usage:
console.log(toCelsius(100)); // Output: 37.77777777777778
console.log(toCelsius(32));  // Output: 0
console.log(toCelsius(0));   // Output: -17.77777777777778

function isEven(number) {
    return number % 2 === 0 ? "Even" : "Odd";
}

// Example usage:
console.log(isEven(10)); // Output: "Even"
console.log(isEven(7));  // Output: "Odd"
console.log(isEven(0));  // Output: "Even"
console.log(isEven(-3)); // Output: "Odd"


function sum(a, b) {
    return a + b;
}

// Example usage:
console.log(sum(5, 3));  // Output: 8
console.log(sum(-2, 10)); // Output: 8
console.log(sum(0, 0));  // Output: 0

