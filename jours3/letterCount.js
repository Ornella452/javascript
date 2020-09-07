function letterCount(str, search) {
 var phrase= str.toLowerCase("");
    var compteur = 0;

    for (var i = 0; i < phrase.length; i ++) {

        if(phrase.charAt(i) === search){

            compteur += 1

        }


    }return compteur;


}console.log(letterCount("Bonjour comment ça vA", "a"));


/*
créer une fonction letterCount(str, search)qui prend en paramètre str un string et search un string d’une lettre et qui retournera le nombre de fois que la lettre search sera dans la phrase. Par exemple :

str = Super Nintendo, Sega Genesis, when I was dead broke man, I couldn’t picture this
search = ‘i’
devrait retourner 6 parce qu’il y a 6 lettres i dans la phrase.


Input:

str = “Hello apple pie”
search = o
Output: 1

Input:

str = “Hello apple pie”
search = p
Output: 3




*/