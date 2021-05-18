var choices = ['paper', 'rock', 'scizzor'];
var playerScore = 0;
var computerScore = 0;

document.querySelector('#gameboard').addEventListener('click', (el) => {
    el = el.target;
    if (el.dataset.playerchoice) {
        document.querySelector(`[data-computerChoice="paper"]`).classList.add('none');
        document.querySelector(`[data-computerChoice="scizzor"]`).classList.add('none');
        document.querySelector(`[data-computerChoice="rock"]`).classList.add('none');
        var playerChoice = el.dataset.playerchoice;
        var num = Math.floor(Math.random()*3);
        var computerChoice = choices[num];
        document.querySelector(`[data-computerChoice="${computerChoice}"]`).classList.remove('none')
        if (playerChoice === computerChoice) {
            document.querySelector('#result').innerHTML = '<p>Égalité</p>';
        } else if (playerChoice == 'scizzor' && computerChoice == 'rock' || playerChoice == 'rock' && computerChoice == 'paper' || playerChoice == 'paper' && computerChoice == 'scizzor') {
            document.querySelector('#result').innerHTML = '<p>Vous avez perdu cette manche</p>';
            computerScore++;
            document.querySelector('#computerScore').innerHTML = computerScore;
        } else {
            document.querySelector('#result').innerHTML = '<p>Vous avez gagné cette manche</p>';
            playerScore++;
            document.querySelector('#playerScore').innerHTML = playerScore;
        }
    }
})