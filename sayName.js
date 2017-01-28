//Create a Person constructor that accepts name and age as parameters and sets those properties accordingly in the Constructor.

  //code here

const Person = function (name,age) {
  this.name = name;
  this.age = age;
}

//Now create three instances of Person with data you make up

  //code here

let william = new Person ("William", 25);
let robert = new Person ("Robert", 53);
let james = new Person ("James", 12);

//Now add a sayName method on your Person class that will alert the name of whatever Person instance called it.

  //code here

// console.log(william);

Person.prototype.sayName = function() {
  alert(this.name);
}
