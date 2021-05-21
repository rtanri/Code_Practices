// Given the following object, call the jump method

const person = {
    jump: () => {
        console.log('fly!');
    }
};

person.jump()

const generateCar = ()=>{
    return {
        objKey: "objectValue",

        // this is a literal shorthand
        // drive(){
        //     console.log("Vroom");
        // }

        drive: () => {
            console.log("Vroom");
        }
    }
}

generateCar().drive()

const account = {
    tweet: () => {
        return {
            message: "fun"
        }
    }
}

console.log(account.tweet().message)

// Log the second element in the array
const me = {
    foo: () =>{
        return {
            array: [2.5, 7, true]
        }
    }
}

console.log(me.foo().array[1])


// Create a data structure such that the following code logs "boat":

let baz = {
    foo: () => {
        return {
            matt: {
                travel: "boat"
            }
        }
    }
}

console.log(baz.foo().matt.travel);


// Create a data structure such that the following code executes without error:

let factory = {
    createCar: () => {
        return {
            startEngine: () => {
                console.log("start engine")
            }
        }
    }
}

factory.createCar().startEngine();


// Run the inner function:

const matt = {
    blink: () =>{
        return ()=>{
            console.log('hi')
        }
    }
}

let mattInnerFunc = matt.blink()

mattInnerFunc()

// matt.blink()()


// Call the funStuff() method:

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

list[3]().funStuff()


// Call the most inner function:

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

foo[4]()()

// print dog
console.log(foo[5].dog)

// Callbacks and methods

// Call the someMethod function, passing in myFunc. It should log About to invoke the callback and then I have been called!

const foo2 = {
    someMethod: (callback)=>{
        console.log('About to invoke the callback');
        callback();
    }
}

const myFunc = ()=>{
    console.log('I have been called!');
}

foo2.someMethod(myFunc)

// Alter the following code so that myFunc properly logs the height property of foo

// const foo3 = {
//     height:5,
//     someMethod: (callback)=>{
//         callback();
//     }
// }

// const myFunc = (param)=>{
//     console.log(param);
// }

// foo3.someMethod(myFunc)

const foo3 = {
    height: 5,
    someMethod: (callback) => {
        callback();
    }
};

const myFunc2 = (param) => {
    console.log(param.height);
};

myFunc2(foo3);

// Create a method called combineColor on the shirtColor object that combines all the elements of the color array into a string

const shirtColor = {
    color: ['red', 'blue', 'green', 'white', 'pink'],
    combineColor: (arr) => {
        let str = arr.reduce(
            (accm, currentValue) => {
                return accm += currentValue + ", "
            },
            ""
        )

        return str
    }
}

let colorStr = shirtColor.combineColor(shirtColor.color)
console.log(colorStr)

// More

// 3. Create an object that has a method that returns an object. Log a property of the inner object.
let obj = {
    someMethod: () => {
        return {
            dummy: "dummy"
        }
    }
}

console.log(obj.someMethod().dummy)

// 6. Create an object that has a method that returns an object that has another method. Call the inner method.
let obj2 = {
    someMethod: () => {
        return {
            anotherMethod: () => {
                console.log("dummy 2")
            }
        }
    }
}

obj2.someMethod().anotherMethod()

// 8. Create an array that has a function that returns an object that has a method. Call that method.
let arr = [
    () => {
        return {
            someMethod: () => {
                console.log("dummy 3")
            }
        }
    }
]

arr[0]().someMethod()

