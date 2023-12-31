// let json = '{ "name": "Yoda", "age": 20 }';

// try {
//   let user = JSON.parse(json);

//   console.log(user.name);
//   console.log(user.age);
// } catch (error) {
//   console.log(error.name);
//   console.log(error.message);
// }

class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = "ValidationError";
  }
}

function validateNumberInput(a, b, c) {
  if (typeof a != "number") {
    throw new ValidationError("Argumen pertama harus number");
  } else if (typeof b != "number") {
    throw new ValidationError("Argumen kedua harus number");
  } else if (typeof c != "number") {
    throw new ValidationError("Argumen ketiga harus number");
  }
}
const detectTriangle = (a, b, c) => {
  try {
    validateNumberInput(a, b, c);
  } catch (error) {
    return `${error.message}`;
  }
  if (a === b && b === c) {
    return "Segitiga sama sisi";
  }

  if (a === b || a === c || b === c) {
    return "Segitiga sama kaki";
  }

  return "Segitiga sembarang";
};

console.log(detectTriangle(2, "2", 3));
