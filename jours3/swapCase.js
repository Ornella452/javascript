
 function swapCase(str){
    var string = "";
    for(var i = 0; i<str.length; i++){

        if(str[i] ==str[i].toLowerCase()){
            string += str[i].toUpperCase();// majuscule
        }else {
            string += str[i].toLowerCase();// minuscule
        }
    }
    console.log(string);
    return string;
}
var text = 'Merci Lydia Lina et Safia et la Princesse Ornella';

var result = swapCase(text); 

/*
Resultat attendu

Input:“Hello-LOL”

Output:“hELLO-lol”

Input:“Konexio Developer!”

Output:“kONEXIO dEVELOPER!”



*/