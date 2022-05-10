// Get product brands
let brands = [] 
for (row of data) {
    let brand =  row[1]
    if (! brands.includes (brand)) {
        brands.push (brand)
    }
}

// Create brand buttons
let brand_buttons_wrapper = document.querySelector (".buy .buttons.categories")
for (let brand of brands) {
    console.log (brand)
    let brand_button = document.createElement("button")
    brand_button.innerHTML = brand
    brand_button.classList.add ("btn")
    brand_button.classList.add ("category")
    brand_button.classList.add (String(brand).toLowerCase().replaceAll (" ", "-"))
    brand_buttons_wrapper.appendChild (brand_button)
}