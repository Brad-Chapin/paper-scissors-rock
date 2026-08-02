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
    console.log("You chose " + humanChoice);
    return humanChoice;
};

const playRound = function (fcomputer, fhuman) {
    let human = getHumanChoice();
    let computer = getComputerChoice();
    if (human === computer) {
        console.log("Computer chose " + computer + ". It's a tie!");
        return "It's a tie!"
    }
    else if (human === "rock" && computer === "scissors") {
        ++humanScore;
        score = "Computer: " + computerScore + ", " + "User: " + humanScore;
        console.log("Computer chose " + computer + ". You win.")
        console.log(score);
        return "Rock beats scissors! You win!";
    }
    else if (human === "paper" && computer === "rock") {
        ++humanScore;
        score = "Computer: " + computerScore + ", " + "User: " + humanScore;
        console.log("Computer chose " + computer + ". You win.")
        console.log(score);
        return "Paper beats rock! You win!";
    }
    else if (human === "scissors" && computer === "paper") {
        ++humanScore;
        score = "Computer: " + computerScore + ", " + "User: " + humanScore;
        console.log("Computer chose " + computer + ". You win.")
        console.log(score);
        return"Scissors beats paper! You win!";
    }
    else {
        ++computerScore;
        score = "Computer: " +computerScore + ", " + "User: " + humanScore;
        console.log(score);
        console.log("Computer chose " + computer + ". Computer wins!");
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

const buttons = document.querySelector("#buttons");
buttons.addEventListener("click", (event) => {
    let target = event.target;

    switch(target.id){
        case "paper":
            alert("paper");
            break;

        case "scissors":
            alert("scissors");
            break;

        case "rock":
            alert("rock");
            break;
    };
})
