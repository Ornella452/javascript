var num    = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

function passwordGen(num) {
    
    var result = "";
  
   for ( var i = 6; i <= 15; i++ ) {

      result += num.charAt(Math.floor(Math.random() * num.length));
   }
   return result;
}

console.log(passwordGen(num));

/*
générer 8 charactère 

Input: 8

Output:

DFKJUNAQ

*/