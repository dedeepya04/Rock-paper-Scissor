let userScore =0;
let compScore=0;
let tie = document.querySelector(".tie");
let us=document.querySelector("#user_score");
let cs=document.querySelector("#comp_score");

const choices= document.querySelectorAll(".choice");

const genCompChoice = () => {
    const options=["rock","paper","scissors"];
    const rand= Math.floor(Math.random() *3);
    return options[rand];
    
}

const playGame = (userChoice) => {
    const compchoice= genCompChoice();
    if (compchoice===userChoice)
    {
        tie.classList.remove("tie");
    }
    else if(((compchoice==="rock") && (userChoice==="paper")) || ((compchoice==="paper") && (userChoice==="scissors")) || ((compchoice==="scissors") && (userChoice==="rock")))
    {
        userScore++;
        us.innerText=userScore;
        tie.classList.add("tie");
    }
    else
    {
        compScore++;
        cs.innerText=compScore;
        tie.classList.add("tie");
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click",() => {
        const userChoice= choice.getAttribute("id");
        playGame(userChoice);
    });
});