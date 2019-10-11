/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window binding is on the global scope. This will be the window.
* 2. Implicit Binding is whatever is called before the dot.
* 3. creates a new object and saves it as "this."
* 4. call, apply, bind - allows us to explicitly state what the this keyword will be.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
console.log(this);

// Principle 2

// code example for Implicit Binding

const mySelf = {
   name: 'Bret',
   age: 31,
   sayHello: function() {
       console.log(`Hello, my name is ${this.name}!`);
   } 
}

mySelf.sayHello();

// Principle 3

// code example for New Binding

const Person = function(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
};

const barb = new Person('Barb', '43', 'F');

console.log(barb);

// Principle 4

// code example for Explicit Binding

const introMe = function (param1, param2) {
    console.log(`Hello, my name is ${this.name} and I like`, param1 + ' and', param2);
}

const me = {
    name: 'Bret',
};

const favThings = ['coding', 'guitars'];

introMe.apply(me, favThings);