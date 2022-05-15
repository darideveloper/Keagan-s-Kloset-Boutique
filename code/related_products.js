const related_products_elems = document.querySelectorAll (".products  .product")

async function show_related_products () {
    // Get related products from fake api
    let related_products = get_related_products ("k000")
}

show_related_products()