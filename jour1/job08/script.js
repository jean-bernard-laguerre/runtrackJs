function sommeNombresPremiers(num1, num2) {

    if (testPremier(num1) && testPremier(num2)) {
        return (num1 + num2)
    }
    return false
}

function testPremier(num) {

    for(let i = 2; i < num; i++) {
        if (num%i == 0) {
            return false
        }
    }
    return true
}

document.addEventListener("DOMContentLoaded", () => {
    console.log(sommeNombresPremiers(7, 19))
    console.log(sommeNombresPremiers(4, 19))
})