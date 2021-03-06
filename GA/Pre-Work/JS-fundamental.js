
// array and Object
const cheese = ["Aged British", "Aggiano", "American", "Applewood Smoked"];

cheese.push("Singapore");

cheese.pop();
cheese.pop();
cheese.pop();

cheese.length;


/*================= Solving with IF LOOP ======================================*/ 

// Lapis, Papyrus, Scalpellus project with array and IF (Control Flow)
// Create object with properties that can be changed
const player = {
    currentChoice : null
};

const computer = {
    currentChoice : null
}

const choices = ["Lapis", "Papyrus", "Scalpellus"];
const randomIndex = Math.floor (Math.random() * choices.length);

computer.currentChoice = choices[randomIndex];

player.currentChoice = choices[0];

if (computer.currentChoice === player.currentChoice){
    console.log("it is a tie");
    // we settle whenever they have same answer, give tie results
    } else if (computer.currentChoice === choices[0]){
        if (player.currentChoice === choices[1]){
            console.log("player win");
        } else {
            console.log("Computer win");
    } else if (computer.currentChoice === choices [1]){
        if (player.currentChoice === choices[2]){
            console.log("Player win");
        } else {
            console.log("Computer win")
        }
    }
        } else {
            console.log ("Computer win");
    } else if (player.currentChoice === choice[2]){
        if (player.currentChoice === choices[0] ){
            console.log("Player win");
        } else {
            console.log("Computer win");   
        }
    }