const person = {
  name: "rohit",
  job: "developer",
};

with(person){
    console.log(name + job);
}