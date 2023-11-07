//tenary
// const umur = 22;

// const checkUmur = (umur) => {
//   return umur >= 18 ? "Dewasa" : "Remaja";
// };
// console.log(checkUmur(umur));

//null coalescing
function a() {
  console.log("a was called");
  return undefined;
}
function b() {
  console.log("b was called");
  return false;
}
function c() {
  console.log("c was called");
  return "foo";
}

console.log(a() ?? c());
// Logs "a was called" then "c was called" and then "foo"
// as a() returned undefined so both expressions are evaluated

console.log(b() ?? c());
// Logs "b was called" then "false"
// as b() returned false (and not null or undefined), the right
// hand side expression was not evaluated
console.log("zeke" ?? "return");

const person = {
  name: "Anggi",
  adress: {
    rt: null ?? "1",
  },
};

console.log(person.adress.rt);

// constructor
// class car {
//   constructor(name, cc) {
//     this.name = name;
//     this.cc = cc;
//   }

//   getCc() {
//     return this.cc;
//   }
// }

// volvo = new car("Volvo", 1000);
// console.log(volvo.getCc());

console.log(null ?? "s");

for (let i = 0; i <= 10; i++) {
  console.log(`Fuck ${i}`);
}

let x = 0;
do {
  x++;
  console.log(x);
} while (x < 4);
