var arr = [{
    firstName: 'David',
    surname: 'Beckham'
}, {
    firstName: 'James',
    surname: 'Corden'
}, {
    firstName: 'Daniel',
    surname: 'Craig'
}, {
    firstName: 'Graham',
    surname: 'Norton'
}];


var arr2 = arr.filter(function (elem) {


    var result = String.substr(0, 1);
    if (result == "D") {
        return elem
    }
    console.log(result)

})

/* resultat attendue 

[{
    firstName: 'David',
    surname: 'Beckham'
}, {
    firstName: 'Daniel',
    surname: 'Craig'
}]



*/
