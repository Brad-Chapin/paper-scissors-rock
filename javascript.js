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
    console.log(humanChoice);
    return humanChoice;
}



getHumanChoice();