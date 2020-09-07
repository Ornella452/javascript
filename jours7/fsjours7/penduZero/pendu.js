
var mots = require('./mots.json');
var wordMystere = mots[Math.floor(Math.random() * mots.length)].label;
console.log(wordMystere)
var coup = 10;
var affich = wordMystere.replace(/./gi, "*");

var stock = [];

var prompt = require('prompt');

    prompt.start();  // start the prompt

function displayPrompt() { 
    prompt.get({ name: 'letter', description: 'Quels lettre ?' }, function (err, result) {
   
        var s = result.letter;

        for (var i = 0; i < wordMystere.length; i++) {
                
                if(result.letter === wordMystere.charAt(i)){ 

                   
                    affich = affich.substring(0,i) + result.letter + affich.substring(i+ (result.letter).length)
                    //console.log("tu as trouver  la lettre " + s)
                    stock = wordMystere[i]
                    console.log(affich)
                    console.log("tu as trouver")

                }
        } if  (stock != result.letter){

            coup = coup - 1
            console.log("Tu n'as pas trouver ")
            console.log("Il te reste " ,coup, " coup ! ")
            if (coup === 0){

                console.log("Tu as perdu ")
                console.log("Le mot mystère était : " , wordMystere)
                return
            }
        
        }
         if(wordMystere == affich){ // si il à remplie toute les lettre

            console.log("Bravo tu as gagné")
            return

        }
      displayPrompt();
    console.log(' letters : ' + s);
  
});

}
displayPrompt();
//pseudo code 

//Je défini mon mot mysterieux (par example ROUGE)
//Je crée un mot de la même longuer mais avec des * pour chaque lettre (mot étoile) (si le mot est ROUGE alors: *****)
//Je défini combien le nombre de coups pour le jeu
//Je demande a l'utilisateur une lettre
    //Je parcours mon mot pour vérifie si la lettre est dans le mot mysterieux
        //Pour chaque lettre du mot mysterieux par laquel je passe, je vérifie si elle est pareil que la lettre introduite par l'utilisateur 
        //Si la condition au dessus s'est vérifie:
            //Je dévoile la lettre dans le mot étoile dans la même position qu'elle est dans mon mot mysterieux (je perds pas les lettres déjà dévoilés)
            //Je sauvegarde le fait que la lettre en question est dans le mot
    //Si la lettre n'est pas dans le mot
        //J'indique que la lettre se trouve pas dans le mot
        //Je diminue le nombre de coups
        //Si le nombre de coups est 0, je fini le jeu
    //Si mon mot mysterieux est égal à mon mot *
        //J'indique à l'utilisateur qu'il a gagné
    //Si non
        //J'indique à l'utilisateur le mot *
        //Je redemande une nouvelle lettre







































/*

var wordMystere = "bonjour";
console.log(wordMystere)
var coup = 10;
var affich = wordMystere.replace(/./gi, "*");

var stock = [];


//var sav = [""];

var prompt = require('prompt');
prompt.start();  // start the prompt


function displayPrompt() { 
prompt.get({ name: 'letter', description: 'Quels lettre ?' }, function (err, result) {
   
    var s;

    for (var i = 0; i < wordMystere.length; i++) {

        if (result.letter === wordMystere[i]){


           // s = result.letter[i + 1 ]

          // stock = i ++;
          //stock += result.letter;
         // wordMystere[i] = result.letter
         affich = affich.substring(0,i) + result.letter+affich.substring(i+ (result.letter).length)

          //affich = affich.replace(affich[i], result.letter); 
        // stock[i] = affich[i]

           
         // sav = stock
           
           console.log("tu as trouver  la lettre " + s)
           console.log(affich)
           //console.log(stock)
        }
    
    }
      displayPrompt();

    console.log(' letters : ' + s);  // log results
    //console.log('  Email: ' + result.email);
});
//return
}displayPrompt();




function onErr(err) {
    console.log(err);
    return 1;
}










    /*
    
    if  (result.letter != wordMystere[i]){

        stock = result.letter

        coup += coup - 1;
        console.log("Tu n'as pas trouvé et  il  te reste ", coup, "coup")
       
    }*/
    











































































// coode safia


      /*  console.log('                                Bienvenue dans le Pendu');
        var word ='ROUGE';
        var mot_myst = '';
        var mot_sec = '.....';
        //var word  = word.replace(/./gi,"*");
        console.log(word);
        var coup = 10;
        /*if(word= 'ROUGE'){
            mot_myst= '*****';
            console.log(mot_myst);
        }*//*
        function displayPrompt() {
            var prompt = require('prompt');
            prompt.start();
            prompt.get({ name: 'l' }, function (err, result) {
                for (var i = 0; i < word.length; i++) {
                    if ((word [i]=== result.l)&&((word = 'ROUGE'))) {
                       // mot_sec= '*****';
                       
                        mot_myst = mot_sec.replace(word[i]);
                        console.log(mot_myst);

                       // console.log('Bravo,tas trouvez');  
                  //  return;   
                   }
                
                }
               /* if (rword[i] !== result.l) {
                        console.log("tas pas trouvez!");
                        coup = coup - 1;
                        console.log('Il vous reste ,', coup, 'coups a jouer   ' );
                }
                 if (coup === 0){
                   console.log("le jeu est terminé, vous êtes perdu !!!");
                   return;
               } *//*
                 displayPrompt();
            });
        }
            displayPrompt();*/























