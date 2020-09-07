/*function timeConvert(num){

    var h;
    var m;
    var s;

    if (num === 61){

        h = num / 60;
        s = num / 60;


        console.log(h +":"+m+":");
    }else if (num =){
         console.log();

    }
}num();*/

function timeConvert(num) {

    
    var heure = Math.floor(num / (60 * 60));
    var minutesModulo = num % (60 * 60);

    var minutes = Math.floor(minutesModulo / 60);
    var secondModulo = minutesModulo % 60; 
    var seconde = Math.ceil(secondModulo);

    return heure + ":" + minutes + ":" + seconde;

    }
    
    console.log(timeConvert(3700));