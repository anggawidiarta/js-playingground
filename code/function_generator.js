// function* createCars() {
//   yield "volvo";
//   yield "bmw";
//   yield "ferarri";
// }
// const cars = createCars();
// for (const name of cars) {
//   console.info(name);
// }

function* checkNumber(number) {
  for (i = 0; i <= number; i++) {
    if (i % 2 === 0) {
      yield `Bilangan Genap: ${i}`;
    } else {
      yield `Bilangan Ganjil: ${i}`;
    }
  }
}

const check = checkNumber(50);
for (const num of check) {
  console.log(num);
}

function giveMeRock(callback, name) {
  return callback(name);
}

console.log(
  giveMeRock(function (name) {
    return `Hello ${name}`;
  }, "ARLONG")
);
