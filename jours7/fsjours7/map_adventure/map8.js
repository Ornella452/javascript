
var arr = [{
    firstName: 'Daniel',
    surname: 'Beckham'
}, {
    firstName: 'David',
    surname: 'Craig'
}]

var arr2 = arr.map(function (elem) {

   
   arr[0].fullName = elem.firstName + " " +elem.surname;
   arr[1].fullName = elem.firstName + " " +elem.surname;

    return  elem;
});

console.log(arr2);// afficher le tableau