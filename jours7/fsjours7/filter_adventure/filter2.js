var arr = ['a', 'b', 'a', 'c', 'a', 'd'];

var arr2 = arr.filter(function (elem) {

    return elem != "a";


})
console.log(arr2);

// résultat attendu ['b', 'c', 'd']
