// Q1
let yanXi = () => {
    console.log("I don't understand the appeal of Yanxi Palace")
}
yanXi();


// Q2
let printWord = (words, number) => {
    let arr = [];
    for (let i=0; i<number; i++){
        arr.push(words);
        // console.log(words);
    }
    return arr
}

let newArray = printWord("facebook", 5);
console.log(newArray);


// Q3
let area = (length,width) => {
    return length*width
}

let z = area(100,5);
console.log(z);


// Q4 - calculating dividend
let divReturn = (capital, dividendRate) => {
    return capital + (capital*dividendRate);
}

let DBS = divReturn(10000, 0.0622);
let Singtel = divReturn(10000, 0.044);
let JonJonHotDogBun = divReturn(10000, 0.3);

console.log (`Dividend Return for DBS: ${DBS}`);
console.log (`Dividend Return for Singtel: ${Singtel}`);
console.log (`Dividend Return for JonJonHotDogBun: ${JonJonHotDogBun}`);


// Q4.2 - Answer from teacher
let calcDividendReturn = (capital, divPercentRate) => {
    if (divPercentRate < 0 || divPercentRate > 100){
        return -1 //giving -1 as return "false"
    }
    return capital * (divPercentRate/100)
}

let DBS = calcDividendReturn(10000, -0.12);
let Singtel = calcDividendReturn(10000, 0.044);
let JonJonHotDogBun = calcDividendReturn(10000, 0.3);

console.log (`Dividend Return for DBS: ${DBS}`);
console.log (`Dividend Return for Singtel: ${Singtel}`);
console.log (`Dividend Return for JonJonHotDogBun: ${JonJonHotDogBun}`);





// Q5 - Item Exists in array
let haysack = ["coffee machine", "capsule", "cup", "nespresso", "pikachu", "sugar"];

let finder = (item) => {
    let itemFound = false;
    for (let i = 0; i<haysack.length; i++){
        if (item === haysack[i]){
            console.log("Yes, we found the item");
            itemFound = true;
        }
    }
    if (itemFound === false){
        console.log("item not found")
    }
}

// Q5.2 - Teacher Answer
let itemExists = (arr, item) => {
    for(let i = 0; i < arr.length; i++){
        if (item === arr[i]){
            return true
        } 
    }
    return false
}



finder("water")
finder("capsule")
finder("salt")
finder("tea")
finder("milktea")
finder("sugar")