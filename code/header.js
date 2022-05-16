const header_nav = document.querySelector ("#header nav")
const header_btn = document.querySelector ("#header button")
const header_links = document.querySelectorAll ("#header a")

// Show and collapse menu
header_btn.addEventListener ("click", show_hide_menu)

// Hide header when click a header link
for (let header_link of header_links) {
    header_link.addEventListener ("click", show_hide_menu)
}

function show_hide_menu () {
    header_nav.classList.toggle ("active")
    header_btn.classList.toggle ("active")
}
