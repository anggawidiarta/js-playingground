function factorial(value) {
  let result = 1;
  for (i = 1; i <= value; i++) {
    result *= i;
  }
  return result;
}

console.log(factorial(4));

function factorial_recursive(value) {
  if (value === 1) {
    return 1;
  } else {
    return value * factorial_recursive(value - 1);
  }
}
console.log(factorial_recursive(10));

// function recursive_loop(number) {
//   let arr = [];
//   if (number === 1) {
//     return arr.push(1);
//   }else{
//     return arr.push(5)
//   }
//   return arr
// }
// console.log(recursive_loop(5));
