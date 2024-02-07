class Car {
    constructor(make, model) {
        this._make = make;
        this._model = model;
    }

    get model() { // Getter method
        return this._model;
    }

    set model(newModel) { // Setter method
        this._model = newModel;
    }


    get make() { // Getter method
        return this._make;
    }

    set make(newMake) { // Setter method
        this._make = newMake;
    }

    displayInfo() {
        console.log(`This is a ${this.make} ${this.model}`);
    }
}

const myCar = new Car('Toyota', 'Corolla');
console.log(myCar.make);

myCar.displayInfo();

myCar.make = 'Honda';

console.log(myCar.make);
myCar.model = 'Civic'

myCar.displayInfo();

