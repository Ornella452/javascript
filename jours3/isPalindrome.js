function isPalindrome(str) {

    var phrase = str.length;

    for  (var i = 0; i < phrase / 2; i++) {

      if(str[i] !== str[phrase - 1 - i]){

          return false;
      }else{

        return true;
      }
       
    }
   
}console.log(isPalindrome("never odd or even"));

///////// Resultat attendue 


/*
Input:“never odd or even”

Output: true

Input:“eye”

Output: true

créer une fonction isPalindrome(str) qui prend le paramètre str et retourne 
true sur le le paramètre est un palindrome (un texte qui se lit pareil à l’endroit comme à l’envers), 
autrement la fonction retourne false. Par exemple : racecar donne racecar à l’envers. 
Les ponctuations, les espaces et les nombres ne seront pas considérés.

*/