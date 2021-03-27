const person = {
    jump: () => {
        console.log('fly!');
    }
};

person.jump();

const generateCar = ()=>{
    return {
        drive(){
            console.log("Vroom");
        }
    }
}

generateCar().drive();

const account = {
    tweet: () => {
        return {
            message: "fun"
        }
    }
}

console.log(account.tweet().message);


// object - function - object - array Index 1
const me = {
    foo: () =>{
        return {
            array: [2.5, 7, true]
        }
    }
}

console.log(me.foo().array[1]);


// object - function - object - object
const baz = {
    foo:()=> {
        return {
            matt: {
                travel: "boat"
            }
        }
    }
}

console.log(baz.foo().matt.travel);


// object - function - object - function
const factory = {
    createCar: () => {
            return {
                startEngine(){
                    console.log("Brrmm")
                }
            }
        }
}


factory.createCar().startEngine();


// Run inner function
// object - function - function
const matt = {
    blink: () =>{
        return ()=>{
            console.log('hi')
        }
    }
}

matt.blink()()


// call the Fun Stuff Method
// array index 3 - function - object - function 

const list = [
    'dogs',
    false,
    3.5,
    ()=>{
        return {
            funStuff: ()=>{
                console.log('yaaassss');
            }
        }
    }
];

list[3]().funStuff();


// Call the most inner function
// array index 4 - function - function 

const foo = [
    'asdfasdf',
    'matt',
    false,
    6,
    ()=>{
        return ()=>{
            console.log('yes!');
        }
    },
    {
        dog:'blue'
    }
];

foo[4]()();


// Callback exercise

const foo1 = {
    someMethod: (callback)=>{
        console.log('About to invoke the callback');
        callback();
    }
}

const myFunc = ()=>{
    console.log('I have been called!');
}

foo1.someMethod(myFunc);


// callback exercise 2
const foo2 = {
    height:5,
    someMethod: (callback)=>{
        callback();
    }
}

const myFunction = (param)=>{
    console.log(param);
}

myFunction(foo2.height);

// Combine array into a string

const shirtColor = {
    color: ['red', 'blue', 'green', 'white', 'pink'],
  }

console.log(shirtColor.color.join(", "));