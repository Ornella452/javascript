
function LetterChanges(str) { 
    var newString = '';
    var newCode = 0;
    var len = str.length;
    var i = 0;
  
    for (; i < len; i++){
    if (str.charCodeAt(i) >= 97 && str.charCodeAt(i) <= 121) {
 
        newCode = str.charCodeAt(i) + 1;
 
        if (newCode == 101) {
            newString += String.fromCharCode(69);
        } else if (newCode == 105) {
            newString += String.fromCharCode(73);
        } else if (newCode == 111) {
            newString += String.fromCharCode(79);
        } else if (newCode == 117) {
            newString += String.fromCharCode(85);
        } else {
            newString += String.fromCharCode(newCode);
        }
  
    } else if (str.charCodeAt(i) == 122){
        newString += String.fromCharCode(65);
   
    } else {
        newString += str[i];
    }
   }
  return newString; 
  
  }console.log(LetterChanges('hello*3'));


  /* resultat attendu 

  Input:“hello*3”

Output:“Ifmmp*3”

Input:“fun times!”

Output:“gvO Ujnft!”


*/