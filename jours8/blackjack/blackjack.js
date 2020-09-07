var sJoueur = 0;

var sBanque = Math.floor(Math.random() * Math.floor(21 - 16) + 16)
var card = Math.floor(Math.random() * Math.floor(11 - 1) + 1)
console.log(card)
console.log(sJoueur)
var prompt = require('prompt');

prompt.start();

function displayPrompt() {
  prompt.get({ name: 'q', description: 'Card ?' }, function (err,result) {

    if (result.q === 'y' || result.q === 'yes') {
       
            sJoueur += card
            console.log("Score du joueur : " + sJoueur)
    
        
        }else if(result.q == 'passed' || result.q == 'p'){

          console.log('Game overs : Fin de la partie ')
          return;
    }
    displayPrompt() 

  });
}

displayPrompt();