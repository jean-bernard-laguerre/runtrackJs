function bissextile(annee) {
    if (annee%4 === 0) {
        return true
    }
    return false
}

document.addEventListener("DOMContentLoaded", () => {
    console.log(bissextile(2024))
})