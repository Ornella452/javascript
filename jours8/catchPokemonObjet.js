var request = require('request');
function catchPokemon(result) {

    request.get("https://pokeapi.co/api/v2/pokemon/" + result, function (err, res, body) {
        var json = JSON.parse(body);
        var attack = json.moves;
        var tip = json.types;
        var stocksType = []
        var stocks = []
        var pkmn = {}


        for (var i = 0; i <= attack.length - 1; i++) {
            var attaque = attack[i].move.name;
            stocks.push(attaque)
            //console.log(stocks)
        } // end de i

        for (var j = 0; j <= tip.length - 1; j++) {
            var t = tip[j].type.name;
            stocksType.push(t)
            // console.log(stocksType)
        }// end de j 

        pkmn["name"] = json.name;
        pkmn["types"] = stocksType;
        pkmn["id"] = json.id;
        pkmn["height"] = json.height;
        pkmn["weight"] = json.weight;
        pkmn["attacks"] = stocks;


        console.log(pkmn.name); // bulbasaur
        console.log(pkmn.types); // ['poison', 'grass']
        console.log(pkmn.id); // 1
        console.log(pkmn.height); // 7
        console.log(pkmn.weight); // 69
        console.log(pkmn.attacks); // ['razor-wind', 'swords-dance', 'cut', 'bind', ...]

    })// fin de request 

} catchPokemon(1);

