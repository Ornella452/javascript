

var getTime = require('./getTimePassed.js');
console.log(getTime.getTimePassed());

/*
Le fichier index.js appellera le module getTimePassed qui retournera une fonction. La fonction getTimePassed() du module prend deux arguments : date1 et date2 et qui retournera le nombre de jour et les minutes entre les deux dates. Les arguments seront des Date au format string.

Echantillon de tests
node index.js "December 27, 1987 11:20:00" "December 28, 1987 11:20:00"
devrait retourner

Days passed: 1, minutes passed: 0
Indice
Les concepts de Date, modulo, argv et Math vous seront utiles. Faites attention aux erreurs où la date1 est après la date2. */