var arr = [1, 'a', 2, 'b'];

var arr2 = arr.filter(function (elem) {

    return typeof elem == 'string';


})
console.log(arr2);
// resultat attendu ['a', 'b']