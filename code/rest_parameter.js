// This function uses the rest parameter syntax to represent an indefinite number of arguments as an array.
function summation(...args) {
  // Initialize total to 0
  let total = 0;

  // Loop through each argument
  for (let arg of args) {
    // Add current argument to total
    total += arg;
  }

  // Return the total sum of all arguments
  return total;
}

// Logs the result of the summation function with 5 arguments to the console
console.log(summation(1, 2, 3, 4, 5));

// This function returns the value of 'wow' if it exists, otherwise it returns 'Test'
function test() {
  // Declare variable 'wow' without assigning a value
  let wow;

  // Return 'wow' if it exists, otherwise return 'Test'
  return wow ?? "Test";
}
console.log(test());

let arr = [1, 2, 3, 4, 5, 6, 7]; //rest parameter when using array

console.log(summation(...arr));
