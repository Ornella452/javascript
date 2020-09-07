
  function doop(arg1, arg2, arg3) {
    var arg1 = parseInt(process.argv[2]);
    var arg2 = process.argv[3];
    var arg3 = parseInt(process.argv[4]);

    var args = process.argv.slice(2);
    if (args.length === 3){
    if(arg2 == '+'){
    result = arg1 + arg3;

    } 
    else if (arg2 == '*') {
        result = arg1  * arg3;
    }
    else if (arg2 == '/') {
        result = arg1  / arg3;
    }
    else if (arg2 == '%') {
        result = arg1  % arg3;
    }
    else if (arg2 == '-') {
        result = arg1 % arg3;
    }
}
else {
    return 'error';
}

return result;
}
console.log(doop());
    
/*


resultat attendu 

node doop.js 5 + 4
retournera 9.

node doop.js 9 "*" 2 (garder les guillemets autour de l'étoile)
retournera 18.

node doop.js 11 + 4
retournera 15.

*/

