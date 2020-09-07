

 /*

function firstReverse(str) {

    var mot = "";


 for(var i = 0; i <= str.length; i--)   {
    mot = str[i] + mot;

 }
 return str;


}*/

function firstReverse(str) {
    var mot = "";
    for (var i = str.length - 1; i >= 0; i--) {
        mot += str[i];
    }
    return mot; 
}

console.log(firstReverse("Hello World and Coders")); 