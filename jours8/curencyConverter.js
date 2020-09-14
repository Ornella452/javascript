var request = require('request');

request("http://data.fixer.io/api/latest?access_key=b3bf580f476dd1fa3e6d1ca802615008", function (err, res, body) {



function convertiseur(arg1, arg2, arg3) {

var arg1 = (process.argv[2]);
var arg2 = (process.argv[3]);
var arg3 = parseInt(process.argv[4]);
var argument1 = arg1.toUpperCase();
var argument2 = arg2.toUpperCase();


var json = JSON.parse(body);

var a1 = json.rates[argument1];
var a2 = json.rates[argument2];

if (a1 && a2) {
    var result = a1 * arg3 // arg1 EUR=1   * 35
    var result2 = result * a2 // arg2 USD = 1.183865 * res(35)
    console.log(result2)
    return

}else if (a1 !== json.rates || a2 !== json.rates) { 

    console.log('Error')
    return
}

      } convertiseur()


})


