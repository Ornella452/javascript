/*function letterCapitalize(sentence) {

    var sentence = "bring your umbrella";

    sentence.substr()




}*/


function letterCapitalize(sentence) {
    var phrase = sentence.toLowerCase().split(' ');
    for (var i = 0; i < phrase.length; i++) {
    
        phrase[i] = phrase[i].charAt(0).toUpperCase() + phrase[i].substring(1);     
    }
    
    return phrase.join(' '); 
 }
 
 console.log(letterCapitalize("bring your umbrella"));
