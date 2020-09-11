//const request = require('request');
/*
request = new XMLHttpRequest();
const obj = require("./obj.json")




request(obj, function(err, res, body) {
    if (err) {
         console.log(err);
         return
    }
    var json = JSON.parse(body)
    function user() {
        
            console.log(" 1.")
        console.log("Nom : " + json.Title)
        console.log("Année : " +json.Year)
        console.log("Genre : " + json.Genre)
        console.log("Acteurs : " + json.Actors)
        
    } user()
});
*/
/*

const async = require('async');
const request = require('request');

function httpGet(url, callback) {
    const options = {
        url: url,
        json: true
    };
    request(options,
        function (err, res, body) {

            console.log("Nom : " + body.Title)
            console.log("Année : " + body.Year)
            console.log("Genre : " + body.Genre)
            console.log("Acteurs : " + body.Actors)

        });
}

const urls = [
    "http://www.omdbapi.com/?t=titanic&plot=full&apikey=69764082",
    "http://www.omdbapi.com/?t=violetta&plot=full&apikey=69764082",
    "http://www.omdbapi.com/?t=twilight&plot=full&apikey=69764082",
    "http://www.omdbapi.com/?t=avatar&plot=full&apikey=69764082"
];

async.map(urls, httpGet, function (err, res) {
    if (err) return console.log(err);
    //  console.log(res);

});*/
/*
var request = require("request")
const urls = [
    "http://www.omdbapi.com/?t=titanic&plot=full&apikey=69764082",
    "http://www.omdbapi.com/?t=violetta&plot=full&apikey=69764082",
    "http://www.omdbapi.com/?t=twilight&plot=full&apikey=69764082",
    "http://www.omdbapi.com/?t=avatar&plot=full&apikey=69764082"
    
];

 
var nombreDepart = 1;
var nombreActuel = nombreDepart;

for (var i = 0; i <= urls.length - 1; i++) {
  
        request.get(urls[i], function(err, res, body){
            
            if (err) {
                return console.log(err);
            } 
            
            var json = JSON.parse(body)
           
            function user() {
                
                   console.log(nombreActuel++ + ".")
                    console.log("Title :" + " " + json.Title)
                    console.log("Year :" + " " + json.Year)
                    console.log("Genre :" + " " + json.Genre)
                    console.log("Actors :" + " " + json.Actors)
                
           
            }user()
        
        })
           
    }
    
 */
//var request = require('request');



/*
request.get(obj, function (err, data, body) {
    /*if (err){
        console.log(err);
        return;
    }
    *//*
var json = JSON.parse(body);

for (var i = 0; i <= json.length - 1; i++) {

console.log(json[i].name + " - ")

}

})
*

request.get({




"url": "http://www.omdbapi.com/?t=titanic&plot=full&apikey=69764082",
"url1": "http://www.omdbapi.com/?t=violetta&plot=full&apikey=69764082",
"url2": "http://www.omdbapi.com/?t=twilight&plot=full&apikey=69764082",
"url3": "http://www.omdbapi.com/?t=avatar&plot=full&apikey=69764082"
 
 


console.log("Title :" + " " + firstCountry[0].Title)
console.log("Year :" + " " + firstCountry[0].Year)
console.log("Genre :" + " " + firstCountry[0].Genre)
console.log("Actors :" + " " + firstCountry[0].Actors)

 

});
*/



//var url = require('./obj.json');
/*
const options = {

   url: "http://www.omdbapi.com/?t=titanic&plot=full&apikey=69764082",
   url: "http://www.omdbapi.com/?t=violetta&plot=full&apikey=69764082",
   url: "http://www.omdbapi.com/?t=twilight&plot=full&apikey=69764082",
   url: "http://www.omdbapi.com/?t=avatar&plot=full&apikey=69764082",

 /*headers: {
   'User-Agent': 'request'
 }*/
//};/*
//
//var request = require('request')
/*
request({ uri: 'http://www.omdbapi.com/?t=titanic&plot=full&apikey=69764082' }, function (err, response, body) {
 
    request({ uri: 'http://www.omdbapi.com/?t=violetta&plot=full&apikey=69764082' }, function (err, response, body) {
        
        request({ uri: 'http://www.omdbapi.com/?t=twilight&plot=full&apikey=69764082' }, function (err, response, body) {
            var json = JSON.parse(body)

            console.log("Title :" + " " + json.Title)
            console.log("Year :" + " " + json.Year)
            console.log("Genre :" + " " + json.Genre)
            console.log("Actors :" + " " + json.Actors)
        })
    })/
})*//*
var request = require("request")
var nombreDepart = 1;
var nombreActuel = nombreDepart;

request.get('http://www.omdbapi.com/?t=titanic&plot=full&apikey=69764082', function (err, res, body) {

    var json1 = JSON.parse(body);

    request.get('http://www.omdbapi.com/?t=violetta&plot=full&apikey=69764082', function (err, res, body) {

        var json2 = JSON.parse(body);

        request.get("http://www.omdbapi.com/?t=twilight&plot=full&apikey=69764082", function (err, res, body) {

            var json3 = JSON.parse(body);

            request.get("http://www.omdbapi.com/?t=avatar&plot=full&apikey=69764082", function (err, res, body) {

                var json4 = JSON.parse(body);

               console.log(nombreActuel++ + ".")

                console.log("Title :" + " " + json1.Title)
                console.log("Year :" + " " + json1.Year)
                console.log("Genre :" + " " + json1.Genre)
                console.log("Actors :" + " " + json1.Actors)

                console.log(nombreActuel++ + ".")

                console.log("Title :" + " " + json2.Title)
                console.log("Year :" + " " + json2.Year)
                console.log("Genre :" + " " + json2.Genre)
                console.log("Actors :" + " " + json2.Actors)

                console.log(nombreActuel++ + ".")

                console.log("Title :" + " " + json3.Title)
                console.log("Year :" + " " + json3.Year)
                console.log("Genre :" + " " + json3.Genre)
                console.log("Actors :" + " " + json3.Actors)

                console.log(nombreActuel++ + ".")

                console.log("Title :" + " " + json4.Title)
                console.log("Year :" + " " + json4.Year)
                console.log("Genre :" + " " + json4.Genre)
                console.log("Actors :" + " " + json4.Actors)
              

            });

        });

    });

});*/
/*
var request = require("request")
var nombreDepart = 1;
var nombreActuel = nombreDepart;

request.get('http://www.omdbapi.com/?t=titanic&plot=full&apikey=69764082', function (err, res, body) {

    var json1 = JSON.parse(body);

    request.get('http://www.omdbapi.com/?t=violetta&plot=full&apikey=69764082', function (err, res, body) {

        var json2 = JSON.parse(body);

        request.get("http://www.omdbapi.com/?t=twilight&plot=full&apikey=69764082", function (err, res, body) {

            var json3 = JSON.parse(body);

            request.get("http://www.omdbapi.com/?t=avatar&plot=full&apikey=69764082", function (err, res, body) {

                var json4 = JSON.parse(body);

               console.log(nombreActuel++ + ".")

                console.log("Title :" + " " + json1.Title)
                console.log("Year :" + " " + json1.Year)
                console.log("Genre :" + " " + json1.Genre)
                console.log("Actors :" + " " + json1.Actors)

                console.log(nombreActuel++ + ".")

                console.log("Title :" + " " + json2.Title)
                console.log("Year :" + " " + json2.Year)
                console.log("Genre :" + " " + json2.Genre)
                console.log("Actors :" + " " + json2.Actors)

                console.log(nombreActuel++ + ".")

                console.log("Title :" + " " + json3.Title)
                console.log("Year :" + " " + json3.Year)
                console.log("Genre :" + " " + json3.Genre)
                console.log("Actors :" + " " + json3.Actors)

                console.log(nombreActuel++ + ".")

                console.log("Title :" + " " + json4.Title)
                console.log("Year :" + " " + json4.Year)
                console.log("Genre :" + " " + json4.Genre)
                console.log("Actors :" + " " + json4.Actors)
              

            });

        });

    });

});
*/

var request = require("request")
var nombreDepart = 1;
var nombreActuel = nombreDepart;

request.get('http://www.omdbapi.com/?t=titanic&plot=full&apikey=69764082', function (err, res, body) {
    var json1 = JSON.parse(body);
    request.get("http://www.omdbapi.com/?t=violetta&plot=full&apikey=69764082", function (err, res, body) {
        var json2 = JSON.parse(body);
        request.get("http://www.omdbapi.com/?t=twilight&plot=full&apikey=69764082", function (err, res, body) {
            var json3 = JSON.parse(body);
            request.get("http://www.omdbapi.com/?t=avatar&plot=full&apikey=69764082", function (err, res, body) {

                var json4 = JSON.parse(body);




                console.log(nombreActuel++ + ".", "\n", "Title :" + " " + json1.Title, "\n", "Year :" + " " + json1.Year, "\n",
                 "Genre :" + " " + json1.Genre, "\n", "Actors :" + " " + json1.Actors
                    , "\n", nombreActuel++ + ".", "\n", "Title :" + " " + json2.Title, "\n", "Year :" + " " + json2.Year, "\n", 
                    "Genre :" + " " + json2.Genre, "\n", "Actors :" + " " + json2.Actors
                    , "\n", nombreActuel++ + ".", "\n", "Title :" + " " + json3.Title, "\n", "Year :" + " " + json3.Year, "\n", 
                    "Genre :" + " " + json3.Genre, "\n", "Actors :" + " " + json3.Actors
                    , "\n", nombreActuel++ + ".", "\n", "Title :" + " " + json4.Title, "\n", "Year :" + " " + json4.Year, "\n",
                     "Genre :" + " " + json4.Genre, "\n", "Actors :" + " " + json4.Actors
                )// Fin du console.log
            });
        });

    });

});

