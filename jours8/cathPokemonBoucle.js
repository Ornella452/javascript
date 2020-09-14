var request = require('request');
function catchPokemon(result) {
   
    request.get("https://pokeapi.co/api/v2/pokemon/" + result, function (err, res, body) {
        var json = JSON.parse(body);
        var attacks = json.moves
        var stocks = []
      
     for (var i = 0; i <= attacks.length - 1; i++){
      var attaque =  attacks[i].move.name;
      stocks.push(attaque)
     }
     console.log('ID : ' + json.id)
     console.log('Nom : ' + json.name)
     console.log('Taille : ' + json.height)
     console.log('Poids : ' + json.weight)
     console.log('Attaque : ' + json.weight)
     console.log("Attaque : " + stocks.join(', '))
     

    })
} catchPokemon(1);
