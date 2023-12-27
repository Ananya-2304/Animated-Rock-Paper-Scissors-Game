
function getComputerChoice(){
    const choices=["rock","paper","scissors"];
    const randomNumber= Math.floor(Math.random()*3);
    const computerChoice=choices[randomNumber];
    return computerChoice;
}
function playRound(playerSelection,computerSelection){
    if((playerSelection === "rock"&& computerSelection ==="scissors")||(playerSelection ==="scissors" && computerSelection==="paper")||(playerSelection==="paper" && computerSelection==="rock"))
       {
        countOfPlayer++
        return;
       }
    else if(playerSelection===computerSelection)
       {
        countOfComp++;
        countOfPlayer++;
        return;
       }
       else
       {
        countOfComp++;
        return;
       }
    }
function game(){
    for(i=0;i<5;i++){
        const computerSelection = getComputerChoice(); 
        const input = prompt("Enter your choice");
        const playerSelection= input.toLowerCase();
        playRound(playerSelection,computerSelection);
        console.log("Computer choice is:" + computerSelection);
        console.log("The scoreboard is : Computer: "+countOfComp+ " and Player: "+ countOfPlayer);
    }
    if(countOfPlayer>countOfComp)
        console.log("Wohoo,You won");
    else if(countOfPlayer===countOfComp)
        console.log("Good Try, but its a tie");
    else
        console.log("Tough luck!Better luck next time");
}
let countOfPlayer=0;
let countOfComp=0;
game();
