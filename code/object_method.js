// object method with arrow function
const person = {
  name: "Angga",
  adress: "Mataram",
  setName: function (name) {
    this.name = name;
  },
};
console.log(person.name);
person.setName("messi");
console.log(person.name) ;
 