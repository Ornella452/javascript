function exOh(str) {
    
    var compteurX = 0;
    var compteurO = 0;

    for(var i = 0; i < str.length; i++){

        if (str[i] === "o") {

           compteurO = compteurO + 1;
           
        }else if (str[i] === "x"){

            compteurX = compteurX +1;

        }

    }
        
        if(compteurX === compteurO){

               return true;

            }else{

                return false;
            }
      


}console.log(exOh("xoxo"));



/////// Resultat attendu



/*

Input:“xooxxo”

Output:“true”

Input:“x”

Output:“false”

*/