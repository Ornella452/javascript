const request = require('request');
//const obj = require('./obj.json');

var obj = {

    "url": "http://www.omdbapi.com/?t=titanic&plot=full&apikey=69764082",
    "url1": "http://www.omdbapi.com/?t=violetta&plot=full&apikey=69764082",
    "url2": "http://www.omdbapi.com/?t=twilight&plot=full&apikey=69764082",
    "url3": "http://www.omdbapi.com/?t=avatar&plot=full&apikey=69764082",
}

request.get(obj.url, {json: true }, (err, res, body) => {
    if (err) {
        return console.log(err);
    }
    function user() {
        
            console.log(" 1.                    ")
        console.log("Nom : " + body.Title)
        console.log("Année : " +body.Year)
        console.log("Genre : " + body.Genre)
        console.log("Acteurs : " + body.Actors)
        
    } user()
});


request.get(obj.url1, {json: true }, (err, res, body) => {
     
    if (err) {
        return console.log(err);
    }
    function user() {
        setTimeout(function() {
            console.log(" 2.                    ")
            console.log("Nom : " + body.Title)
            console.log("Année : " +body.Year)
            console.log("Genre : " + body.Genre)
            console.log("Acteurs : " + body.Actors)
          }, 100);
        
        
    } user()
    
});


request.get(obj.url2, {json: true }, (err, res, body) => {
     
    if (err) {
        return console.log(err);
    }
    function user() {
       
        
        setTimeout(function() {
            console.log(" 3.                    ")
            console.log("Nom : " + body.Title)
            console.log("Année : " +body.Year)
            console.log("Genre : " + body.Genre)
            console.log("Acteurs : " + body.Actors)
          }, 150);
        
    } user()
    
});

request.get(obj.url3, {json: true }, (err, res, body) => {
     
    if (err) {
        return console.log(err);
    }

    function user() {
        setTimeout(function() {
            console.log(" 4.                    ")
            console.log("Nom : " + body.Title)
            console.log("Année : " +body.Year)
            console.log("Genre : " + body.Genre)
            console.log("Acteurs : " + body.Actors)
          }, 200);
        
    }user()
    
});
