// Assign object method 
const Employee = {
  firstname: 'John',
  middlename: 'kal',
  lastname: 'Doe'
};
const Employeechange = {
  firstname: 'ram',
  lastname: 'shyam'
};
const doubleEmployeeChange = Object.assign(Employee, Employeechange);
console.log(Employee);

console.log(doubleEmployeeChange);

// Create Object methods

let person2 = {
  id: 2,
  name: 'Roshan',
  age: 24,
  Location: "Lucknow",
  details: function () {
    console.log('My name is ${this.name}. my age is ${this.age}. and my location is ${this.Location}');
  }
};

const obj1 = Object.create(person);
obj1.id = 4;
obj1.name = "Ravi";
obj1.age = 32;
obj1.Location = "varanasi";

obj1.details();

// Sealed
const user = {
  id: 34,
  name: "Rishabh"
}

console.log(Object.isSealed(user));

Object.seal(user);
console.log(Object.isSealed(user));

// Frozen
const person = {
  id: 34,
  name: "Rishabh"
}
console.log(Object.isFrozen(person));
Object.freeze(person);
console.log(Object.isFrozen(person));


// Freeze Objects Methods

const gamer = {
  id: 23,
  Name: "Shashank"
};

Object.freeze(gamer);
gamer.id = 33;
gamer.Name = "Rohan";

console.log(gamer.id);
console.log(gamer.Name);

// Entries
const users = {
  a: 'Gsoc',
  b: 41
};
for (const [key, value] of Object.entries(users)) {
  console.log(`${key}: ${value}`);
}

// Objects keys methods

const person1 = {
  name: "Shashank",
  age: 24,
  Location: "Varanasi",
  Area: "Vishwananath"
};

console.log(Object.keys(person));
console.log(Object.values(person));