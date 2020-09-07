

function ageCalculator(date) {
    var d= new Date()
    
    var aaaa = String(d.getUTCFullYear());
    var timestamp = new Date('January 31, 1989 11:20:00');

    var timestamp = Math.abs(date = new Date(timestamp).getFullYear() -aaaa);
    console.log(timestamp)
}
ageCalculator();


/*

resultat attendue :

 si la date est le January 31, 1980 11:20:00, 
 supposons que nous sommes le 14 janvier 2019, 
 alors le résultat sera 38.


*/ 

