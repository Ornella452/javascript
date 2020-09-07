

function dashInsert(str) {


    //.split pour séparer le string
    var arr = str.toString().split('');// retounant une chaine de caractere representant l'obj number 
    for (i = 0; i < arr.length; i++) {

        if (arr[i] % 2 == 1 && arr[i + 1] % 2 == 1) {

            arr[i] = arr[i] + "-";

        }
    }
    return arr.join("");// pour afficher en horrisontale comme pour un array


} console.log(dashInsert(56730));