// for in
const person = {
  name: "king",
  adress: "mataram",
};

for (const property in person) {
  console.log(property);
}

// for of

cars = ["volvo", "bmw", "mercedes"];

for (const name of cars) {
  console.log(name);
}

with (person) {
  console.log(name);
  console.log(adress);
}
