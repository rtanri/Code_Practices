"use strict"

function sayHello() {
        this.desc = "Logger"
        console.log(this)
}

new sayHello()

let a = 5
console.log(++a)

let x = 0
let y = x ? "one" : "two" //false
console.log(y)