// Constructor function to create objects
function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
}

// Adding a method to the prototype
Car.prototype.displayInfo = function() {
    console.log(`This is a ${this.year} ${this.make} ${this.model}.`);
}

// Creating objects using the constructor function
const car1 = new Car('Toyota','Corolla','2020');
const car2 = new Car('Honda','Civic','2018');

// Calling the method of the objects
car1.displayInfo()
car2.displayInfo()