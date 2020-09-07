
      
       var number = Math.floor(Math.random() * 100) + 1; // ordinateur

       function displayPrompt() {
       
           var prompt = require('prompt');
           prompt.start();
       
           prompt.get({ name: 'q', description: 'Do you like prompt?'}, function (err, result) {
       
       
               if (number < parseInt(result.q)) {
                   console.log("C'est moins !")
               }
               else if (number > parseInt(result.q)) {
                   console.log("C'est plus !!")
       
               } else if (parseInt(result.q) === number) {
                   console.log("Bravo, vous avez trouve le nombre mystère !!!");
                   return;
               }
       
               displayPrompt();
               //return err;
       
           });
       
       }displayPrompt();

       /*Resultat attendu 
       
       Quel est le nombre ? 50
C'est plus !
Quel est le nombre ? 75
C'est plus !
Quel est le nombre ? 85
C'est moins !
Quel est le nombre ? 80
C'est plus !
Quel est le nombre ? 83
C'est moins !
Quel est le nombre ? 82
Bravo, vous avez trouve le nombre mystère !!!


       */