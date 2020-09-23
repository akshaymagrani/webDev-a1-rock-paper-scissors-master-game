/* Programmer's Brain : 
    on selecting any one option, a copy to be generated in different page.
    random selection other than the selected value
    check situation and return won or loss
    remove any scripting from the selected buttons


*/


// getting reference for three options
var uSelected;




function displayRules() {
    const rulesForGame = document.querySelector("#rulesWrapper");
    const rulesBtn = document.querySelector("#ruleBtn");
    rulesForGame.style.display = "block";
    rulesBtn.style.display = "none";  
}

function closeRulesDiv() {
    const rulesForGame = document.querySelector("#rulesWrapper");
    const rulesBtn = document.querySelector("#ruleBtn");
    rulesForGame.style.display = "none";
    rulesBtn.style.display = "block";  
}

function theGame() {
    const rulesForGame = document.querySelector("#rulesWrapper");
    const rulesBtn = document.querySelector("#ruleBtn");
    const theGame = document.querySelector("#theGame");
    const selectionDiv = document.querySelector('.selectionDiv');
    rulesForGame.style.display = "none";
    theGame.style.display = "block";
    rulesBtn.style.display = "block"; 
    selectionDiv.style.display = "none"; 
    
    const userSelectedPaper = document.querySelector('.paperWrapper');
    userSelectedPaper.style.position = "static";
    userSelectedPaper.style.left = "0";
    userSelectedPaper.style.transform = "translate(-70%, 30%)";

    const userSelectedScissors = document.querySelector('.scissorsWrapper');
    userSelectedScissors.style.position = "static";
    userSelectedScissors.style.left = "0";
    userSelectedScissors.style.transform = "translate(70%, -70%)";

    const userSelectedRock = document.querySelector('.rockWrapper');
    userSelectedRock.style.position = "static";
    userSelectedRock.style.left = "0";
    userSelectedRock.style.transform = "translate(0%, -50%)";
}

var bunny = 0;

function selectionPaper() {
    const userSelectedPaper = document.querySelector('.paperWrapper');
    const userSelected = document.querySelector('.selected');
    const selectionDiv = document.querySelector('.selectionDiv');
    const theGame = document.querySelector("#theGame");
    
    //styling the Paper button to appear where I want it.
    userSelectedPaper.style.position = "absolute";
    userSelectedPaper.style.left = "50%";

    if (window.matchMedia("(min-width:576px)").matches) {
        userSelectedPaper.style.transform = "translate(-150%, -30px) scale(1)";
    }else {
        userSelectedPaper.style.transform = "translate(-110%, -30px) scale(0.8)";
    }
    
    
    const usersSelection = userSelectedPaper.cloneNode(true);
    
    //copying the Paper button to display after user clicks it.
    userSelected.appendChild(usersSelection);

    selectionDiv.style.display = "block";
    theGame.style.display = "none";

    //remove event listener from the R-P-S buttons
    userSelectedPaper.removeEventListener('click', selectionPaper);
    console.log(bunny);
    
    uSelected = "paper";
}

function selectionRock() {
    const userSelectedRock = document.querySelector('#clickedRock');
    const userSelected = document.querySelector('.selected');
    const selectionDiv = document.querySelector('.selectionDiv');
    const theGame = document.querySelector("#theGame");
    
    //styling the Paper button to appear where I want it.
    userSelectedRock.style.position = "absolute";
    userSelectedRock.style.left = "50%";

    if (window.matchMedia("(min-width:576px)").matches) {
        userSelectedRock.style.transform = "translate(-150%, -30px) scale(1)";
    }else {
        userSelectedRock.style.transform = "translate(-110%, -30px) scale(0.8)";
    }
    
    
    const usersSelection = userSelectedRock.cloneNode(true);
    
    //copying the Paper button to display after user clicks it.
    userSelected.appendChild(usersSelection);

    selectionDiv.style.display = "block";
    theGame.style.display = "none";

    //remove event listener from the R-P-S buttons
    userSelectedRock.removeEventListener('click', selectionRock);
    
    console.log(bunny);
    
    uSelected = "rock";
}

function selectionScissors() {
    const userSelectedScissors = document.querySelector('#clickedScissors');
    const userSelected = document.querySelector('.selected');
    const selectionDiv = document.querySelector('.selectionDiv');
    const theGame = document.querySelector("#theGame");
    
    //styling the Paper button to appear where I want it.
    userSelectedScissors.style.position = "absolute";
    userSelectedScissors.style.left = "50%";

    if (window.matchMedia("(min-width:576px)").matches) {
        userSelectedScissors.style.transform = "translate(-150%, -30px) scale(1)";
    }else {
        userSelectedScissors.style.transform = "translate(-110%, -30px) scale(0.8)";
    }
    
    
    const usersSelection = userSelectedScissors.cloneNode(true);
    
    //copying the Paper button to display after user clicks it.
    userSelected.appendChild(usersSelection);

    selectionDiv.style.display = "block";
    theGame.style.display = "none";

    //remove event listener from the R-P-S buttons
    userSelectedScissors.removeEventListener('click', selectionScissors);
    console.log(bunny);
    uSelected = "scissors";
}
function userChose() {
        let houseChoose = Math.floor((Math.random () * 3));
        let choices = ['paper', 'rock', 'scissors'];
        console.log(choices[houseChoose]);

        const win = ['paper rock','rock scissors','scissors paper'];
        console.log(win.length);
        let case1 = uSelected + ' ' + choices[houseChoose];
        console.log(case1);
        
        
        if(case1 == win[0] | case1 == win[1] | case1 == win[2]){
            document.getElementById("winOrLose").innerHTML = "Win";
            document.getElementById("winOrLose").style.color = "green";
            document.getElementById("winOrLose").style.fontSize = "1.5em";
            bunny++;
            document.getElementById('scoreDiv1').innerHTML = bunny;
        }else{
            document.getElementById("winOrLose").innerHTML = "Lose";
            document.getElementById("winOrLose").style.color = "red";
            document.getElementById("winOrLose").style.fontSize = "1.5em";
        }
            
        if(uSelected == choices[houseChoose]){
            document.getElementById("winOrLose").innerHTML = "Draw";
            document.getElementById("winOrLose").style.color = "yellow";
            document.getElementById("winOrLose").style.fontSize = "1.5em";
        }

        if(choices[houseChoose] === 'paper'){
            const userSelectedPaper = document.querySelector('.paperWrapper');
            const userSelected = document.querySelector('.selected');
            
            //styling the Paper button to appear where I want it.
            userSelectedPaper.style.position = "absolute";
            userSelectedPaper.style.left = "50%";

            if (window.matchMedia("(min-width:576px)").matches) {
                userSelectedPaper.style.transform = "translate(52%, -30px) scale(1)";
            }else {
                userSelectedPaper.style.transform = "translate(12%, -30px) scale(0.8)";
            }
            
            
            const usersSelection = userSelectedPaper.cloneNode(true);
            
            //copying the Paper button to display after user clicks it.
            userSelected.appendChild(usersSelection);
        }else if(choices[houseChoose] == 'scissors') {
            const userSelectedScissors = document.querySelector('.scissorsWrapper');
            const userSelected = document.querySelector('.selected');

            
            //styling the Paper button to appear where I want it.
            userSelectedScissors.style.position = "absolute";
            userSelectedScissors.style.left = "50%";

            if (window.matchMedia("(min-width:576px)").matches) {
                userSelectedScissors.style.transform = "translate(52%, -30px) scale(1)";
            }else {
                userSelectedScissors.style.transform = "translate(12%, -30px) scale(0.8)";
            }
            
            
            const usersSelection = userSelectedScissors.cloneNode(true);
            
            //copying the Paper button to display after user clicks it.
            userSelected.appendChild(usersSelection);
        }else{
            const userSelectedRock = document.querySelector('.rockWrapper');
            const userSelected = document.querySelector('.selected');
            
            //styling the Paper button to appear where I want it.
            userSelectedRock.style.position = "absolute";
            userSelectedRock.style.left = "50%";

            if (window.matchMedia("(min-width:576px)").matches) {
                userSelectedRock.style.transform = "translate(52%, -30px) scale(1)";
            }else {
                userSelectedRock.style.transform = "translate(12%, -30px) scale(0.8)";
            }
            
            
            const usersSelection = userSelectedRock.cloneNode(true);
            
            //copying the Paper button to display after user clicks it.
            userSelected.appendChild(usersSelection);

        }
}

function removeBtn() {
    
}
