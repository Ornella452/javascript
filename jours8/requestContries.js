var request = require('request');

request.get("https://restcountries.eu/rest/v1/all", function (err, data, body) {
    /*if (err){
        console.log(err);
        return;
    }
    */
    var json = JSON.parse(body);

    for (var i = 0; i <= json.length - 1; i++) {

        console.log(json[i].name + " - ")

    }

})