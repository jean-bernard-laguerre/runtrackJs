const jsonValueKey = (chain, key) => {

    let parsedChain = JSON.parse(chain)
    return parsedChain[key]
}

const chainjson = '{\
    "name": "La Plateforme_",\
    "address": "8 rue d hozier",\
    "city": "Marseille",\
    "nb_staff": "11",\
    "creation":"2019"\
}'

$(document).ready(()=>{
    console.log(jsonValueKey(chainjson, "city"))
})