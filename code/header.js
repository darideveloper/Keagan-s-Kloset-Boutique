const header_nav = document.querySelector ("#header nav")
const header_btn = document.querySelector ("#header button")

// Show and collapse menu
header_btn.addEventListener ("click", function (e) {
    header_nav.classList.toggle ("active")
    header_btn.classList.toggle ("active")
})