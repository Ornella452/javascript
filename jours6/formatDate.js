
function formatDate(date) {

    var dates = new Date(date);

    var jj = String(dates.getDate());
    var mm = String(dates.getMonth() + 1);
    var aaaa = String(dates.getUTCFullYear());


    if (mm.length < 2){

        mm = '0' + mm;

    } 
    if (jj.length < 2) {

        jj = '0' + jj;
    }
  


    return jj + "/" + mm + "/" + aaaa;
}
console.log(formatDate('1986-07-03'));







/*
Challenge

Créer un fichier formatDate.js.

En utilisant JavaScript, créer une fonction formatDate(date) qui prend en paramètre date qui est un string au format aaaa-mm-jj et retourne la même date au format jj/mm/aaaa.

Samples


Resultat attendu -

Input : '2018-11-17'

Output : '17/11/2018'

Input : '1986-07-03'

Output : '03/07/1986'

Input : '1993-02-02'

Output : '02/02/1993
*/





/*

https://stackoverflow.com/questions/13459866/javascript-change-date-into-format-of-dd-mm-yyyy/13460045


*/ 