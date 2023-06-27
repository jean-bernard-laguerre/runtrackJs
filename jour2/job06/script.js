const header = document.createElement("header")
const main = document.createElement("main")
const footer = document.createElement("footer")

const konamiCode = ["ArrowUp","ArrowUp","ArrowDown","ArrowDown",
                    "ArrowLeft","ArrowRight","ArrowLeft","ArrowRight"]
let inputs = []

const laPlateforme = (event) => {

    inputs.push(event.key)
    let inputCode = inputs.slice(-8)

    if (JSON.stringify(inputCode) == JSON.stringify(konamiCode)) {

        document.body.appendChild(header)
        document.body.appendChild(main)
        document.body.appendChild(footer)

    }
}


document.addEventListener("DOMContentLoaded", () => {

    document.addEventListener("keyup", laPlateforme)    
})