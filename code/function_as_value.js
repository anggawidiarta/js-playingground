function sayHello(name) {
  console.log(name);
}

sayHello("budi");
say = sayHello;
say("fuck");

//function in parameter
function giveName(callback, name) {
  callback(name);
}

giveName(sayHello, "hallo");
