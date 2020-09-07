function vowelCount(str) {

    var chaine = str.length;
    var conteur = 0;

    for (var i = 0; i < chaine.length; i++) {

        if (str[i] == "a" || str[i] == "i" || str[i] == "o" || str[i] == "u" || str[i] == "y") {

         conteur = conteur + 1;
        }
    }
    return conteur;

}console.log(vowelCount("Les roses sont rouges"));
/*
resultat attendu 

fonction vowelCount(str) qui prend en paramètre la variable str et retourne 
le nombre de voyelles dans un string
 (ex : “Les roses sont rouges” devrait retourner 7).


Input:“hello”

Output:2

Input:“konexio”

Output:4
*/