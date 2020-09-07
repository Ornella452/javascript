var arr = [{
    firstName: 'David',
    surname: 'Beckham',
    job: 'footballer'
}, {
    firstName: 'James',
    surname: 'Corden',
    job: 'tv host'
}, {
    firstName: 'Daniel',
    surname: 'Craig',
    job: 'actor'
}, {
    firstName: 'Graham',
    surname: 'Norton',
    job: 'tv host'
}]


var arr2 = arr.filter(function (elem) {

    return elem.job == "tv host";

})
console.log(arr2);

// résultat attendu 
/*
[{
    firstName: 'James',
    surname: 'Corden',
    job: 'tv host'
}, {
    firstName: 'Graham',
    surname: 'Norton',
    job: 'tv host'
}]

*/
