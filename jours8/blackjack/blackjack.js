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


      if (sJoueur === sBanque) {

        console.log('Tu as perdu')
  
        console.log("Your score is " + sJoueur + ", bank is " + sBanque)
        return
      }


    } // Fin de la condition si je mets passed
    if (sJoueur > 21) {

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

  });// fin de la condition si je met y ou yes
}

displayPrompt();

// Jeux du black 

