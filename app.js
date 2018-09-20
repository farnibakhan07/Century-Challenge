/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls once. Each result get added to his score
- There is one danger points, which has been chosen randomly if the score of the player is equal to the danger point, then his score gets lost. After that, it's the next player's turn. 
- The first player to reach 100 points wins the game

*/
//create global variables
var scores, activePlayer, gamePlaying, winningScore, dangerPoint;
init();


//generate random number
document.querySelector('.btn-roll').addEventListener('click',function(){
   if(gamePlaying){
    //1. Random number
      var dice1 = Math.floor(Math.random()*6)+1;
    //2. Display the result
      document.getElementById('dice-1').style.display = "block";
      document.getElementById('dice-1').src = 'dice-' +dice1 + '.png';
      if(scores[activePlayer] !== dangerPoint){
              scores[activePlayer] += dice1; 
              document.querySelector('#score-'+activePlayer).textContent = scores[activePlayer];  
              if(scores[activePlayer]>= winningScore){
                    document.querySelector('#name-' +activePlayer).textContent = 'Winner!';
                    document.getElementById('dice-1').style.display = "block";
                    document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
                    gamePlaying = false;
              }
              nextPlayer();
      }
     else {
        scores[activePlayer] = 0;
        document.querySelector('#score-'+activePlayer).textContent = scores[activePlayer];  
        nextPlayer();
     }
    }
});

function nextPlayer(){
    activePlayer == 0? activePlayer=1 : activePlayer=0;
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
    document.getElementById('dice-1').style.display = "block";
}
//start a new game
document.querySelector('.btn-new').addEventListener('click', init);

//initialization of game
function init(){
   scores = [0,0];
   winningScore = 100;
   activePlayer = 0;
   gamePlaying = true;
   dangerPoint = Math.floor(Math.random()*100);
   document.querySelector('.danger-point').textContent = "Danger point at " +dangerPoint;
   

   document.getElementById('dice-1').style.display = "none";
   document.getElementById('score-0').textContent = '0';
   document.getElementById('score-1').textContent = '0';
   document.getElementById('name-0').textContent = 'Player 1';
   document.getElementById('name-1').textContent = 'Player 2';
   document.querySelector('.player-0-panel').classList.remove('winner');
   document.querySelector('.player-1-panel').classList.remove('winner');
   document.querySelector('.player-0-panel').classList.remove('active');
   document.querySelector('.player-0-panel').classList.remove('winner');
   document.querySelector('.player-1-panel').classList.remove('active');
   document.querySelector('.player-0-panel').classList.add('active');
}

