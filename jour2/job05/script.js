const colorSwap = (position) => {

    let footer = document.querySelector("footer")
    footer.style.backgroundColor = `rgba(60, 139, 171, ${position})`
}


document.addEventListener("DOMContentLoaded", () => {

    window.addEventListener("scroll", () => {
        colorSwap((window.scrollY + window.innerHeight)/4096)
    })
})