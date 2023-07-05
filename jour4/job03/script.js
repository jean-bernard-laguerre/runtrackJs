$(document).ready(()=>{

    $("#button").click(()=>{

        let id = $("#pokemon-id").val()
        let name = $("#pokemon-name").val()
        let type = $("#type-select").val()

        $("#results").empty()

        fetch("pokemon.json")
        .then(data => data.json())
        .then(pokemons => {
            
            let filteredPokemons = pokemons.filter((pokemon)=>{

                match_type = pokemon.type.includes(String(type))
                match_id = (pokemon.id === Number(id))
                match_name =  ([pokemon.name["chinese"],
                    pokemon.name["japanese"],
                    pokemon.name["french"],
                    pokemon.name["english"]].includes(String(name)))


                return (match_id || match_name || match_type)
            })

            filteredPokemons.forEach(pokemon => {
                let pokedex = $("<p></p>").text(pokemon.name["english"])
                $("#results").append(pokedex)
            });
        })
    })
})