

function longestWord(str) {

    var mot;
    var sss = str.split(" ");
    var longest = 0;


    for(var i = 0; i < sss.length; i++) {


        if (longest < sss[i].length) {

            longest = sss[i].length;
            mot = sss[i];

        }

    }return mot;

}console.log(longestWord("Bonjour ou salut"));
/* resultat attendu 

Input:“fun&!! time”

Output:“time”

Input:“I love dogs”

Output:“love”

*/

