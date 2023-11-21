// const { timeout } = require("async");

// This function fetches data asynchronously
// It returns a promise that resolves after a delay of 1 second
const fetchData = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      // Log a message when data is fetched
      console.log("Data fetched");
      // Resolve the promise
      resolve();
    }, 10000);
  });
};

// This function fetches data and then does something with it
// It uses the async/await syntax to wait for the data to be fetched before proceeding
async function fetchDataAndDoSomething() {
  // Wait for the data to be fetched
  await fetchData();
  // Log a message when the async/await operation is done
  console.log("Async/Await done");
}

function sayHello(name, callback) {
  // Function to say hello with a delay of 3000ms
  setTimeout(() => {
    // Log the message with the name provided
    console.log(`Hello My Name Is ${name}`);
    // Execute the callback function after the delay
    callback();
  }, 3000);
}

// Function to say hello with a delay of 1000ms
function sayHello2(name, callback) {
  setTimeout(() => {
    // Log the message with the name provided
    console.log(`Hello My Name Is ${name}`);
    // Execute the callback function after the delay
    callback();
  }, 1000);
}

fetchDataAndDoSomething();

// Call the sayHello function with the name "Anggi" and a callback function to log a message
sayHello("Anggi", () => {
  console.log(`Callback Executed`);
});

// Call the sayHello2 function with the name "Angga" and a callback function to log a message
sayHello2("Angga", () => {
  console.log(`Callback Executed`);
});
