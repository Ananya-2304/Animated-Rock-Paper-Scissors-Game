//To execute a rock ,paper, scissors game which executes upto Game point 3
//To execute the code as soon as the window loads.
function loopGame(){
    {
        game();
    }
}
window.onload = function(){
        loopGame()
};
//An overall function which is executed as the window is loaded.
function game(){
        let text=document.getElementById("resultText");
        let countOfPlayer=0;
        let countOfComp=0;
        let playerScore=document.getElementById("playerScore");
        let compScore=document.getElementById("compScore");
        //Finding out a Computer Choice using Random Generator
        function getComputerChoice(){
            const choices=["rock","paper","scissors"];
            const randomNumber= Math.floor(Math.random()*3);
            const computerChoice=choices[randomNumber];
            return computerChoice;
        }
    //To change the three images into two fists animating up and down
    function ReplacingImage(){ 
            let a = document.getElementById("rocks");
            a.src="assets/rockulta.png";
            a.classList.add("count-in");
            document.getElementById("papers").style.opacity=0;
            let b= document.getElementById("scissors");
            b.src="assets/rock.png";
            text.innerHTML="";
            b.classList.add("count-in");
        }
    //Function for all the 3 images to appear again and to remove the previous animations
    function revertTopage(){
            let a = document.getElementById("rocks");
            let b = document.getElementById("papers");
            let c= document.getElementById("scissors");
            a.classList.remove("count-in");
            c.classList.remove("count-in");
            a.src="assets/rock.png";
            b.style.opacity=1;
            c.src="assets/scissors.png";
            text.innerHTML="Choose an Option";
        }
    //Setting a delay
    function returnPageTimer(){
            setTimeout(revertTopage,2500);
        }
    //Final results of the Game . Also an if else statement which makes the 3 images to only reappear if the match is not at game point
    function declareWinner(){
              if(countOfComp == 3)
                text.innerHTML="Boo! You Lost the game!!";
             else if(countOfPlayer == 3)
                text.innerHTML="Awesome! you won the Game";
             else
                 returnPageTimer();
        }
    //If playerSelectiion is rock, paper, and scissors respectively
    function rock(){
            let playerSelection="rock";
            let playerHand = document.getElementById("rocks"); 
            let compHand=document.getElementById("scissors");
            playerHand.src="assets/rockulta.png"; 
            let computerSelection = getComputerChoice();
            if(computerSelection==="rock")
            {
                text.innerHTML="Uff! That's a tie ";
                compHand.src="assets/rock.png";
                playerScore.innerHTML=countOfPlayer;
                compScore.innerHTML=countOfComp;
            }
            else if(computerSelection==="paper")
            {
                text.innerHTML="Tough luck! You lost this round.";
                compHand.src="assets/paper.png";
                countOfComp++;
                playerScore.innerHTML=countOfPlayer;
                compScore.innerHTML=countOfComp;
            }
            else if(computerSelection==="scissors")
            {
                text.innerHTML="Good one.. You won this round";
                compHand.src="assets/scissors.png";
                countOfPlayer++;
                playerScore.innerHTML=countOfPlayer;
                compScore.innerHTML=countOfComp;
            }
            declareWinner();
            return playerSelection;
        }
    function rockTimer(){
            setTimeout(rock,2000);
        }
    function paper(){
            let playerSelection="paper";
            let compHand=document.getElementById("scissors");
            let playerHand = document.getElementById("rocks");  
            playerHand.src="assets/paperulta.png"; 
            let computerSelection = getComputerChoice();
            if(computerSelection==="paper")
            {
                text.innerHTML="Uff! That's a tie ";
                compHand.src="assets/paper.png";
                playerScore.innerHTML=countOfPlayer;
                compScore.innerHTML=countOfComp;
            }
            else if(computerSelection==="scissors")
            {
                text.innerHTML="Tough luck! You lost this round.";
                compHand.src="assets/scissors.png";
                countOfComp++;
                playerScore.innerHTML=countOfPlayer;
                compScore.innerHTML=countOfComp;
            }
            else if(computerSelection==="rock")
            {
                text.innerHTML="Good one.. You won this round";
                compHand.src="assets/rock.png";
                countOfPlayer++;
                playerScore.innerHTML=countOfPlayer;
                compScore.innerHTML=countOfComp;
            }
            declareWinner();
            return playerSelection;        
        }
    function paperTimer(){
            setTimeout(paper,2000);
        }
    function scissor(){
            let playerSelection="scissors";
            let playerHand = document.getElementById("rocks"); 
            let compHand=document.getElementById("scissors");
            playerHand.src="assets/scissors.png";
            let computerSelection = getComputerChoice();
            if(computerSelection==="scissors")
            {
                text.innerHTML="Uff! That's a tie ";
                compHand.src="assets/scissors.png";
                playerScore.innerHTML=countOfPlayer;
                compScore.innerHTML=countOfComp;
            }
            else if(computerSelection==="rock")
            {
                text.innerHTML="Tough luck! You lost this round.";
                compHand.src="assets/rock.png";
                countOfComp++;
                playerScore.innerHTML=countOfPlayer;
                compScore.innerHTML=countOfComp;
            }
            else if(computerSelection==="paper")
            {
                text.innerHTML="Good one.. You won this round";
                compHand.src="assets/paper.png";
                countOfPlayer++;
                playerScore.innerHTML=countOfPlayer;
                compScore.innerHTML=countOfComp;
            }
            declareWinner();
            return playerSelection;        
        }
    function scissorTimer(){
            setTimeout(scissor,2000);
        }  
    // Adding eventlisteners to activate various functions on click
    function playGame()
    {
            let options=document.getElementById("selections");
            let clickRocks=document.getElementById("rocks");
            let clickPapers=document.getElementById("papers");
            let clickScissors=document.getElementById("scissors");
            function selectingChoice(){
                options.addEventListener("click", ReplacingImage);
                clickRocks.addEventListener("click", rockTimer);
                clickPapers.addEventListener("click", paperTimer);
                clickScissors.addEventListener("click", scissorTimer);
            }
            selectingChoice();
        return 0;
    }
    playGame();
    }

