const addOne = (compte) => {

    const compteur = document.querySelector("#compteur")
    let res = compte + 1

    compteur.textContent = res
    return res
}


document.addEventListener("DOMContentLoaded", () => {
    
    let compte = 0

    const button = document.querySelector("#button")
    button.addEventListener("click", () => {
        compte = addOne(compte)
    })

})