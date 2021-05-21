class Person {
    constructor(name, age, gender) {
      this.name = name
      this.age = age
      this.gender = gender
    }
  
    speak(words) {
      console.log(words)
    }
  
    greet() {
      console.log('Hi! My name is ' + this.name)
    }
}

class Superman extends Person {
    heroAttire = ""

    constructor(name, age, gender, attire) {
        // executing parent's class's constructor
        // Person(name, age, gender)
        super(name, age, gender)

        this.heroAttire = attire
    }

    fly () {
      console.log('Up up and away!');
    }

    // method over-riding
    greet() {
        console.log('Look at me fly peasants.')
    }
}
  
let superman = new Superman('Tony Stark', 99, 'm', "cape")
  
// Superman can do all things a normal Person can do
// superman.speak("mcscpicy")
// superman.greet()
  
// Superman can do his own unique ability
// superman.fly()
  
// Superman can do things differently than a normal Person
// method over-riding

// We can use JS keyword super in a child class to reference attributes and functionalities of parent class
  
// Superman has his own unique attributes
console.log(superman.name)
console.log(superman.age)
console.log(superman.gender)
console.log(superman.heroAttire)

  
  