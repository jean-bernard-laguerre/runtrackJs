const showHide = () => {

    let article = document.getElementsByTagName("article")

    if (article.length == 0) {

        article = document.createElement("article")
        article.textContent = "L'important n'est pas la chute, mais l'atterissage."

        document.body.appendChild(article)
        
    } else {
        document.body.removeChild(article[0])
    }
}

document.addEventListener("DOMContentLoaded", () => {
    
    let button = document.querySelector("#button")
    button.addEventListener("click", showHide)
})