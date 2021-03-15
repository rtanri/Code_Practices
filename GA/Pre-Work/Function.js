// PROBLEM 1
// Write a function that accepts one parameter - a name - and logs "Hello I am _____"
// Fill in the blank with the name given to the function

function inputName (name) {
    console.log ("hello i am " + name);
  };
  inputName(Revin);
  
  // PROBLEM 2
  // Modify this function to accept two parameters, representing two numbers you want to multiply.
  // Then, add a code block that will multiply the two parameters and return the output.
  // The code block below the function is meant to check your work for the arguments 2 and 2.
  function multiply(a, b){
    //your code here
    return (a*b);
  }
  
  const four = multiply(2, 2);
  if(four === 4){
    console.log("The multiply function works!");
  }else{
    console.log("Something's wrong with the multiply function!")
  }
  
  
  // PROBLEM 3
  // Write a function that accepts an array as a parameter.
  // The function should loop through the given array and console.log each element in the array.
  // Create your own array to test your work.
  fruits = ["apple", "banana", "mango", "orange"];
  for (i = 0; i < fruits.length; i++){
    console.log (fruits[i]);
  }
  
  
  // PROBLEM 4
  // Write a function that finds the maximum number in a given array.
  // Loop through the array and keep track of the biggest number seen so far.
  // Once the loop is over, return the biggest number in the array.
  numbers = [12,25,54,12,81,21,11,9,4,25];
  
  let maxNumber = numbers[0];
  
  function biggestNumber (){
    for (i=0; i<numbers.length; i++){
      if (number[i] > maxNumber) {
        maxNumber === number[i];
      }
    }
    return maxNumber;
  }
  


/*======================== Solving with Function ===============================*/ 


const player = {
    currentChoice: null
  }
  const computer = {
    currentChoice: null
  }
  const choices = ["Lapis", "Papyrus", "Scalpellus"];
  
  const computerChooses = () => {
    const randomIndex = Math.floor(Math.random() * choices.length);
    return randomIndex
    // It is better to so stop in randomIndex
  }

  // so that we have different random value
  let pcRandomChoice = computerChooses()

  computer.currentChoice = choices[pcRandomChoice]
  player.currentChoice = choices[0];
  
  // function to compare 2 choices
  // Put in the parameter will be better to avoid error in case player.currentChoice got changed 
  const compareChoices = (player.currentChoice) => {
    computerChooses();
    
  // Here, we're accounting out a tie scenario - if the randomIndex that was generated matches the player's choice.
  if(computer.currentChoice === player.currentChoice){
    console.log("It's a tie! The computer and player both chose " + computer.currentChoice);
  
  // Now, we write a conditional chain for each of the 3 random choices the computer could make. Inside each conditional, we'll nest an "if...else" statement that compares the player's choice to the computer's choice and determines a winner.
  }else if(computer.currentChoice === choices[0]){
    if(player.currentChoice === choices[1]){
      console.log("The player wins! The computer chose " + computer.currentChoice + " and the player chose " + player.currentChoice);
    }else{
      console.log("The computer wins! The computer chose " + computer.currentChoice + " and the player chose " + player.currentChoice);
    }
  }else if(computer.currentChoice === choices[1]){
    if(player.currentChoice === choices[2]){
      console.log("The player wins! The computer chose " + computer.currentChoice + " and the player chose " + player.currentChoice);
    }else{
      console.log("The computer wins! The computer chose " + computer.currentChoice + " and the player chose " + player.currentChoice);
    }
  }else if(computer.currentChoice === choices[2]){
    if(player.currentChoice === choices[0]){
      console.log("The player wins! The computer chose " + computer.currentChoice + " and the player chose " + player.currentChoice);
    }else{
      console.log("The computer wins! The computer chose " + computer.currentChoice + " and the player chose " + player.currentChoice);
    }
  }
  }