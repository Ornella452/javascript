var sJoueur = 0;

var sBanque = Math.floor(Math.random() * (21 - 16) + 16)


var prompt = require('prompt');

prompt.start();

function displayPrompt() {
  prompt.get({ name: 'q', description: 'Card ?' }, function (err, result) {

    if (result.q === 'y' || result.q === 'yes') {
      var card = Math.floor(Math.random() * (11 - 1) + 1)
      sJoueur += card
      console.log("Score du joueur : " + sJoueur)
      console.log("Tu as tiret la carte " + card)

    } else if ((result.q == 'passed' || result.q == 'p') && (sJoueur > 16)) {

      if (sJoueur > sBanque) {

        console.log('Bravo tu as gagné')
        console.log("Your score is " + sJoueur + ", bank is " + sBanque)
        return

      }

      if (sJoueur < sBanque) {

        console.log("Perdu ")
        console.log("Your score is " + sJoueur + ", bank is " + sBanque)

        return
      }


    }
    if ((sJoueur > 21) || (sJoueur === sBanque)) {

      console.log('Tu as perdu')

      console.log("Your score is " + sJoueur + ", bank is " + sBanque)
      return
    }

    if (sJoueur === 21) {

      console.log('Bravo tu as fait un BlackJack !')
      console.log("Your score is " + sJoueur + ", bank is " + sBanque)
      return
    }

    displayPrompt()

  });
}

displayPrompt();

// Jeux du black 


/*
var scorejoueur = 0;
var scorebanque = Math.floor(Math.random() * (21 - 16) + 16)
//var card = Math.floor(Math.random() * (11 - 1) + 1)
//console.log(card)
var prompt = require('prompt');
prompt.start();
function displayPrompt() {
  prompt.get({ name: 'q', description: 'Card?' }, function (err, result) {
    if ((result.q == 'Y' || result.q == 'YES') || (result.q == 'y' || result.q == 'yes')) {

      var card = Math.floor(Math.random() * (11 - 1) + 1)
      scorejoueur = scorejoueur + card
      console.log("scorejoueur " + scorejoueur);
      console.log("Your score is " + scorejoueur + ", bank is " + scorebanque)

    }
    else if (result.q === 'p' || result.q === 'pass') {
      //console.log("gagne")
      console.log("Your score is " + scorejoueur + ", bank is " + scorebanque)

      if ((scorejoueur > scorebanque) && (scorejoueur < 21)) {

        console.log("le joueur gagne.")
        console.log("Your score is " + scorejoueur + ", bank is " + scorebanque)
        return
      }
      if (scorejoueur < scorebanque) {
        console.log("le joueur perd.")
        console.log("Your score is " + scorejoueur + ", bank is " + scorebanque)
        return
      }


      //return;
    }
    if (scorejoueur === 21) {
      console.log("Black Jack et gagne")
      return
    }
    if (scorejoueur > 21) {
      console.log("tu es perdu")
      console.log("Your score is " + scorejoueur + ", bank is " + scorebanque)
      return
    }  if (scorejoueur === scorebanque) {
      console.log("le joueur perd.")
      console.log("Your score is " + scorejoueur + ", bank is " + scorebanque)
      return
    }
    displayPrompt();
  });
}
displayPrompt();*/