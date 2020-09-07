
function secondGreatLow(arr) {

    var arr = process.argv[2];

    var tab = [];

    var max2;
    var min1;

    arr.sort(function(a, b){

        return a - b;
    });

    min1 = arr[1];
    max2 = arr[arr.length-2];

    console.log(min1, max2);
    return tab;

}
secondGreatLow();


/* resultat attendu

Input:1, 42, 42, 180

Output:“42 42”

Input:4, 90

Output:“90 4”


2 eme max et 2 eme min du tableau 

*/