// const { timeout } = require("async");

// async function fetchData() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       console.log("Data fetched");
//       resolve();
//     }, 1000);
//   });
// }

// async function fetchDataAndDoSomething() {
//   await fetchData();
//   console.log("Async/Await done");
// }

function sayHello(name, callback) {
  setTimeout(() => {
    console.log(`Hello My Name Is ${name}`);
    callback();
  }, 3000);
}
 
function sayHello2(name, callback) {
  setTimeout(() => {
    console.log(`Hello My Name Is ${name}`);
    callback();
  }, 1000);
}

sayHello("Anggi", () => {
  console.log(`Callback Executed`);
});

sayHello2("Angga", () => {
  console.log(`Callback Executed`);
});
