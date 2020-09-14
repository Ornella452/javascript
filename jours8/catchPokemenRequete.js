

var request = require('request');
function catchPokemon(result) {
   
    request.get("https://pokeapi.co/api/v2/pokemon/" + result, function (err, res, body) {
        var json = JSON.parse(body);
   
     console.log('ID : ' + json.id)
     console.log('Nom : ' + json.name)
     console.log('Taille : ' + json.height)
     console.log('Poids : ' + json.weight)
     console.log('Attaque : ' + json.weight)
    
     

    })
} catchPokemon(1);
