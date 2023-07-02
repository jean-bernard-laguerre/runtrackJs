$(document).ready(()=>{
    $("button").click(()=>{

        text = $("<p></p>").text("Les logiciels et les cathédrales, c'est un peu la même chose - d'abord, on les construit, ensuite, on prie.")

        if($("p").length) {
            $("p").toggle()
        }
        else {
            $("body").append(text)
        }
    })
})