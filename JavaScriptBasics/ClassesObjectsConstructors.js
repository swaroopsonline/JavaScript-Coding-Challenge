//Defining a Class named 'Person'
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }


//Method to greet
greet() {
    console.log(`Hello my name is ${this.name} and I am ${this.age} years`)
}

}

//Creating an object of class Person
const person1 = new Person('Hajir', 40);
const person2 = new Person('John', 23);

person1.greet();
person2.greet();

console.log('--------------------------------------------------------------')