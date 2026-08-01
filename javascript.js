let computerScore = 0;
let humanScore = 0;
let score = "Computer: " +computerScore + "," + "User: " + humanScore;

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

const getHumanChoice = function () {
    let humanChoice = prompt("please select paper, scissors, or rock");
    humanChoice = humanChoice.toLowerCase();
    return humanChoice;
};

const playRound = function (fcomputer, fhuman) {
    let human = getHumanChoice();
    let computer = getComputerChoice();
    if (human === computer) {
        console.log(score);
        return "It's a tie!"
    }
    else if (human === "rock" && computer === "scissors") {
        ++humanScore;
        score = "Computer: " +computerScore + "," + "User: " + humanScore;
        console.log(score);
        return "Rock beats scissors! You win!";
    }
    else if (human === "paper" && computer === "rock") {
        ++humanScore;
        score = "Computer: " +computerScore + "," + "User: " + humanScore;
        console.log(score);
        return "Paper beats rock! You win!";
    }
    else if (human === "scissors" && computer === "paper") {
        ++humanScore;
        score = "Computer: " +computerScore + "," + "User: " + humanScore;
        console.log(score);
        return"Scissors beats paper! You win!";
    }
    else {
        ++computerScore;
        score = "Computer: " +computerScore + "," + "User: " + humanScore;
        console.log(score);
        console.log("Computer wins!");
    }
};



console.log(playRound(), score);