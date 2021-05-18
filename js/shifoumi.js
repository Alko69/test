var choice = ['rock', 'paper', 'scizzor']
var playerPoints = 0;
var computerPoints = 0;

document.querySelector(`[data-computerChoice="paper"]`).classList.add('none');
document.querySelector(`[data-computerChoice="rock"]`).classList.add('none');
document.querySelector(`[data-computerChoice="scizzor"]`).classList.add('none');

document.querySelector('#gameboard').addEventListener('click', (el) => {
    el = el.target;
    if (el.dataset.playerchoice){
        var num = Math.floor(Math.random() * 3);
        var computerChoice = choice[num];
        console.log(num);
        
        if (el.dataset.playerchoice === 'rock' && num === 0){
            document.querySelector('.block2').innerHTML = 'draw';
            document.querySelector(`[data-computerChoice="rock"]`).classList.remove('none');
            document.querySelector(`[data-computerChoice="paper"]`).classList.add('none');
            document.querySelector(`[data-computerChoice="scizzor"]`).classList.add('none');
            playerPoints++;            
        } else if(el.dataset.playerchoice === 'rock' && num === 1){
            document.querySelector('.block2').innerHTML = 'loss';
            document.querySelector(`[data-computerChoice="scizzor"]`).classList.add('none');
            document.querySelector(`[data-computerChoice="rock"]`).classList.add('none');
            document.querySelector(`[data-computerChoice="paper"]`).classList.remove('none');
            computerPoints++;
        } else if (el.dataset.playerchoice === 'rock' && num === 2){
            document.querySelector('.block2').innerHTML = 'win';
            document.querySelector(`[data-computerChoice="rock"]`).classList.add('none');
            document.querySelector(`[data-computerChoice="paper"]`).classList.add('none');
            document.querySelector(`[data-computerChoice="scizzor"]`).classList.remove('none');
        } else if(el.dataset.playerchoice === 'paper' && num === 0){
            document.querySelector('.block2').innerHTML = 'win';
            document.querySelector(`[data-computerChoice="scizzor"]`).classList.add('none');
            document.querySelector(`[data-computerChoice="paper"]`).classList.add('none');
            document.querySelector(`[data-computerChoice="rock"]`).classList.remove('none');
            playerPoints++;
        } else if(el.dataset.playerchoice === 'paper' && num === 1){
            document.querySelector('.block2').innerHTML = 'draw';
            document.querySelector(`[data-computerChoice="scizzor"]`).classList.add('none');
            document.querySelector(`[data-computerChoice="rock"]`).classList.add('none');
            document.querySelector(`[data-computerChoice="paper"]`).classList.remove('none');
        } else if(el.dataset.playerchoice === 'paper' && num === 2){
            document.querySelector('.block2').innerHTML = 'loss';
            document.querySelector(`[data-computerChoice="rock"]`).classList.add('none');
            document.querySelector(`[data-computerChoice="paper"]`).classList.add('none');
            document.querySelector(`[data-computerChoice="scizzor"]`).classList.remove('none');
            computerPoints++;
        } else if(el.dataset.playerchoice === 'scizzor' && num === 0){
            document.querySelector('.block2').innerHTML = 'loss';
            document.querySelector(`[data-computerChoice="scizzor"]`).classList.add('none');
            document.querySelector(`[data-computerChoice="paper"]`).classList.add('none');
            document.querySelector(`[data-computerChoice="rock"]`).classList.remove('none');
            computerPoints++;
        } else if(el.dataset.playerchoice === 'scizzor' && num === 1){
            document.querySelector('.block2').innerHTML = 'win';
            document.querySelector(`[data-computerChoice="scizzor"]`).classList.add('none');
            document.querySelector(`[data-computerChoice="rock"]`).classList.add('none');
            document.querySelector(`[data-computerChoice="paper"]`).classList.remove('none');
            playerPoints++;
        } else {
            document.querySelector('.block2').innerHTML = 'draw';
            document.querySelector(`[data-computerChoice="rock"]`).classList.add('none');
            document.querySelector(`[data-computerChoice="paper"]`).classList.add('none');
            document.querySelector(`[data-computerChoice="scizzor"]`).classList.remove('none');
        }
        document.querySelector('.score1').innerHTML = playerPoints;
        document.querySelector('.score2').innerHTML = computerPoints;
    }

})

