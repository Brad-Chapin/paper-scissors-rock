let computerScore = 0;
let humanScore = 0;
let humanChoice = "";

const getComputerChoice = function () {
   let rnd = Math.floor(Math.random() * 3) +1;
   if (rnd === 1){
    return "paper";
   }
   else if (rnd === 2) {
    return "scissors";
   }
   else {
    return "rock";
   }
};

const playRound = function (fcomputer, fhuman) {
    let human = humanChoice;
    let computer = getComputerChoice();
    if (human === computer) {
        currentScore.textContent = "Computer: " + computerScore + ", " + "User: " + humanScore;
        return result.textContent = "Computer chose " + computer +". You chose " + human
        + ". It's a tie."
    }
    else if (human === "rock" && computer === "scissors") {
        ++humanScore;
        currentScore.textContent= "Computer: " + computerScore + ", " + "User: " + humanScore;
        return result.textContent = "Rock beats scissors! You win!";
    }
    else if (human === "paper" && computer === "rock") {
        ++humanScore;
        currentScore.textContent = "Computer: " + computerScore + ", " + "User: " + humanScore;
        return result.textContent = "Paper beats rock! You win!";
    }
    else if (human === "scissors" && computer === "paper") {
        ++humanScore;
        currentScore.textContent = "Computer: " + computerScore + ", " + "User: " + humanScore;    
        return result.textContent = "Scissors beats paper! You win!";
    }
    else {
        ++computerScore;
        currentScore.textContent = "Computer: " +computerScore + ", " + "User: " + humanScore;
       return result.textContent = "Computer chose " + computer + ". You chose " 
       + human + ". Computer wins."
    }
};

// const playGame = function  ()
// {
//     for (let i = 1; i <=5; i++){
//         playRound();
//     }
//     if (humanScore === computerScore) {
//         return "It's a tie! Final score is Computer: " + computerScore + ", " 
//         + "User: " + humanScore;
//     }
//     if (humanScore > computerScore){
//         console.log(score);
//         return "You win the game! Final score is Computer: " + computerScore + ", " 
//         + "User: " + humanScore;
//     }
//     else {
//         console.log(score);
//         return "Sorry, the computer wins. Final score is Computer: " + computerScore + ", " 
//         + "User: " + humanScore;
//     }
// };
const currentScore = document.querySelector("#currentScore");
const result = document.querySelector("#result");
const winner = document.querySelector("#winner");

result.textContent = "";
currentScore.textContent = "";
winner.textContent = "";

const buttons = document.querySelector("#buttons");
buttons.addEventListener("click", (event) => {
    let target = event.target;

    switch(target.id){
        case "paper":
            humanChoice = "paper";
            break;

        case "scissors":
            humanChoice = "scissors";
            break;

        case "rock":
            humanChoice = "rock";
            break;
    };
    while (computerScore <5 && humanScore <5){
        playRound();
    }
    if (computerScore === 5){
        winner.textContent = "The computer wins the game."
    }
    else if (humanScore === 5) {
        winner.textContent = "You win the game!"
    }
})
