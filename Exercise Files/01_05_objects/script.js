var car = {
   make: "Honda",
   model: "Fit",
   year: 2012,
   honk: function() { alert("Beep beep"); }, //function attached to object= METHOD
   driver: { name: "Andrew", license: "CA" } //Objects within Objects
}

// Dot Notation
console.log(car.make);
console.log(car.driver.name);
console.log(car.year);
console.log(typeof car.driver)
console.log(typeof car.honk)
