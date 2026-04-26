let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorepara =document.querySelector("#user-score");
const compScorepara =document.querySelector("#comp-score");

const genComChoice = () => {
    const option = ["rock", "paper", "scissors"];
    const random = Math.floor(Math.random() * 3);
    return option[random]
}
const drawGame =() => {
    msg.innerText="Game was Draw. Play again.";
    msg.style.background="#081031";
};
const showWinner = (userWin,userChoice,compChoice) => {
    if(userWin){
        
        userScore++;
    userScorepara.innerText = userScore;       
        msg.innerText=`you win! Your ${userChoice} beats ${compChoice}`;
        msg.style.background="green";
    }else{
        compScore++;
    compScorepara.innerText = compScore;
        msg.innerText=`you lose ${compChoice} beats Your ${userChoice}`;
        msg.style.background="red";
    }

}
const playGame = (userChoice) => {
    console.log("user choice = ", userChoice);
    //Generate computer 
    const compChoice = genComChoice();
    console.log("comp choice=", compChoice);
    if (userChoice === compChoice) {
        drawGame();
        return;
    } else{
        let userWin;
    if (userChoice === "rock") {
        userWin = compChoice === "paper" ? false:true;
    }else if(userChoice === "paper"){
        userWin = compChoice === "scissors"? false:true;
    }else{
        userWin = compChoice === "rock"? false:true;
    }
    showWinner(userWin,userChoice,compChoice);
}};
choices.forEach((choice) => {

    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});


