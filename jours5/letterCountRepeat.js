function letterCountRepeat(str) {
  var mot = '-1';
  //var letter = [];
  var result = " ";
  var string = str.split(' ');
  var count = 0;

  for (var i = 0; i < string.length; i++) {// parcourir la phrase

    for (var j = 0; j < string[i].length; j++) {// parcourir chaque lettre

      var count = 0;
      for (var k = j + 1; k < string[i].length; k++) {// pour compter les memes lettres

        if (string[i][j] === string[i][k]) {

          count = count + 1;

        } if (count > result) {

          result = count;

          mot = string[i]
        }
      }
    }
  }

  return mot;
} console.log(letterCountRepeat("No words"));





/*

Créer un fichier letterCountRepeat.js.

 créer une fonction letterCountRepeat(str)qui prend en paramètre str
  et qui retournera le premier mot avec le plus de lettres répétées.
   Par exemple : Today, is the greatest day ever! 
   devrait retourner greatest parce qu’il a un nombre répété de lettres
    avec 2 e (et 2 t) et il est devant ever qui a aussi 2 e.
     Si il n’y a pas d’autres mot qui ont des lettres répétés, l
     a fonction retournera -1. Les mots seront séparés par des espaces.

Echantillon de tests
Input:“Hello apple pie”

Output:“Hello”

Input:“No words”

Output:-1
*/