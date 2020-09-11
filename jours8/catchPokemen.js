var request = require('request');

function catchPokemon(result) {
    


   

    request.get("https://pokeapi.co/api/v2/pokemon/1", function (err, res, body) {
        var json = JSON.parse(body)
        request.get("https://pokeapi.co/api/v2/pokedex/1", function (err, res, body) {
    
            var json2 = JSON.parse(body)
            // console.log(json2)


            if (result === json.id) {
                console.log('ID : ' + json.id)
                console.log('Nom : ' + json.name)
                console.log('Taille : ' + json.height)
                console.log('Poids : ' + json.weight)
                console.log('Attaques : ' + json2)

            }
        })
    })


} catchPokemon(1);