document.addEventListener("DOMContentLoaded", function(){
    let buttons = document.getElementsByTagName("button");
    
          for (let button of buttons){
             button.addEventListener("click", function(){
                 if (this,this.getAttribute("data-type") === "submit")  { 
                 alert("you clicked submit!");
            } else {
                let gameType = this.getAttribute("data-type")
                alert(`You clicked ${gameType}`);
        }

            
        })
    }
})

/**
 * the main game "loop", called when the script is first loaded
 * and after the users answer has processed
 */
function runGame() {
    let num1 = math.floor(math.random() *25) +1;
    let num2 = math.floor(math.random() *25) +1;

}

function checkAnswer() {

}

function calculateCorrectAnswer() {

}

function incrementScore() {

}

function incrementWrongAnswer() {

}

function displayAdditionQuestion() {

}

function displaySubtractQuestion() {

}

function displayMultiplyQuestion() {
    
}