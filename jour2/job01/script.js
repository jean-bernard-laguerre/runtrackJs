const logCitation = () => {
    let citation = document.querySelector("#citation")
    console.log(citation.textContent)
}

document.addEventListener("DOMContentLoaded", () => {

    button = document.querySelector("#button")
    button.addEventListener("click", logCitation)
})