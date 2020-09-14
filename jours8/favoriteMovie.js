var request = require("request")
var obj = require('./obj.json')
var nombreDepart = 1;
var nombreActuel = nombreDepart;
request.get(obj.url, function (err, res, body) {
    var json2 = JSON.parse(body);
request.get(obj.url2, function (err, res, body) {
    var json1 = JSON.parse(body);
    console.log(json1)
   /* console.log(nombreActuel++ + ".", "\n", "Title :" + " " + json1.Title, "\n", "Year :" + " " + json1.Year, "\n",
    "Genre :" + " " + json1.Genre, "\n", "Actors :" + " " + json1.Actors)// Fin du console.log
*/

            });
   
        });


        // code non fini 