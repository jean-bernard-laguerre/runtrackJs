function afficherJoursSemaines() {
    
    let joursSemaines = ["Lundi", "Mardi", "Mercredi",
    "Jeudi", "Vendredi", "Samedi", "Dimanche"]

    joursSemaines.forEach(jour => {
        console.log(jour)
    });
}

document.addEventListener("DOMContentLoaded", () => {
    afficherJoursSemaines()
})