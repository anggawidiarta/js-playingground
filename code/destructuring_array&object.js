//destructuring array
let names = ["a", "i", "u"];
[a, i, u] = names;
console.log(a);

//destructuring objeect
const person = {
  firstName: "angga",
  lastName: "Widiarta",
};

const { firstName, lastName } = person;
console.log(firstName);

//destructuring function with iife
(({ firstName, lastName }) => {
  console.log(`${firstName} ${lastName}`);
})(person);

//destructuring function
function sayName({ firstName, lastName }) {
  console.log(`${firstName} ${lastName}`);
}

sayName(person);
