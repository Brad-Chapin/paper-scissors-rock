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

console.log(getComputerChoice());