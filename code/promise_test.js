/**
 * This function returns a new Promise that resolves to a greeting for the provided name.
 * @param {string} name - The name to greet.
 * @returns {Promise<string>} A promise that resolves to a greeting.
 */
async function sayHello(name) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (name.toLowerCase() == "angga") {
        resolve(`Hello, ${name}`);
      } else {
        reject("Wrong Name");
      }
    }, 3000);
  });
}

(async () => {
  try {
    /**
     * This is where we call the async function and handle the promise it returns.
     */
    const greeting = await sayHello("Angga");
    console.log(greeting);
  } catch (error) {
    console.error(error);
  }
})();

console.log("Hello");
//without async await method
// const sayHello = (name) => {
//     return new Promise(function (resolve, reject) {
//       setTimeout(() => {
//         if (name == "angga") {
//           resolve(name);
//         } else {
//           reject("Wrong Name");
//         }
//       }, 3000);
//     });
//   };

//   sayHello("Angga")
//     .then((resolve) => resolve)
//     .catch((error) => console.error(error));

//   console.log("Hello");
