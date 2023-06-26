function tri(table, order) {
    let echange

    while (true) {

        echange = 0

        for (let i = 0; i < table.length; i++) {

            if (order == "asc") {
                condition = (table[i] < table[i-1] && i > 0)
            } else {
                condition = (table[i] > table[i-1] && i > 0)
            }

            if (condition) {

                x = table[i]
                table[i] = table[i-1]
                table[i-1] = x

                echange++
            }
        }

        if (echange == 0){
            break
        }
    }
    return table
}

document.addEventListener("DOMContentLoaded", () => {
    console.log(tri([1, 49, 23, 8, 79, 88, 56], "asc"))
    console.log(tri([1, 49, 23, 8, 79, 88, 56], "desc"))
})