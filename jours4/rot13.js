function rot13(str) {

    var string = " ";

    for (var i = 0; i < str.length; i++) {

        var result = str[i].charCodeAt();


        if ((result >= 65 && result <= 77) || (result >= 97 && result <= 109)) {

            string += String.fromCharCode(result + 13);

        } else if ((result >= 78 && result <= 90) || (result >= 110 && result <= 122)) {

            string += String.fromCharCode(result - 13);

        }

    } return string;

} console.log(rot13('Ornella'));



// retiurne un string chaque index seras remplacer 
//par la 13 ème lettre
// variables sontenant un string et des lettres alphabet 

//var minAlph = fromCharCode(61-122);

//var MajAlph = fromCharCode(65 - 90 );
//console.log(MajAlph);