const jourFerie2020 = [ "1/10/2020", "13/04/2020",
                    "1/5/2020", "8/5/2020",
                    "21/5/2020", "1/6/2020",
                    "14/7/2020", "15/8/2020",
                    "1/11/2020", "11/11/2020",
                    "25/12/2020",]

function jourTravaille(date) {

    jourSemaine = date.getDay()

    if (jourSemaine == 5 || jourSemaine == 6) {
        console.log(`Non ${date.toLocaleDateString()} est un weekend.`)
    }
    else if (jourFerie2020.includes(date.toLocaleDateString())){
        console.log(`${date.toLocaleDateString()} est un jour férié.`)
    }
    else {
        console.log(`${date.toLocaleDateString()} est un jour travaillé.`)
    }
}

document.addEventListener("DOMContentLoaded", () => {

    jourTravaille(new Date('1995, 11, 17'))
    jourTravaille(new Date('2020, 11, 11'))
    jourTravaille(new Date('2020, 1, 11'))
    jourTravaille(new Date('2020, 12, 9'))
})