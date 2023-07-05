$(document).ready(()=>{

    $("#button").click(()=>{

        fetch("expression.txt")
        .then(data => data.text())
        .then((result) => {
            
            let paragraph = $("<p></p>").text(result)
            $("body").append(paragraph)
        })
    })
})