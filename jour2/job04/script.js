const keylogger = (event) => {

    const textArea = document.querySelector("#keylogger")
    if (event.key.match(/[a-z]/i)) {
        textArea.value += event.key
    }
}

document.addEventListener("DOMContentLoaded", () => {
    
    document.addEventListener("keypress", keylogger)
})