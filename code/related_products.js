const related_products_wrapper = document.querySelector ("#buy .content")
const related_products_elems = document.querySelectorAll (".products  .product")

async function show_related_products () {
    // Get product code from url
    const queryString = window.location.search
    const urlParams = new URLSearchParams(queryString)
    let product_code = urlParams.get('code')
    var product_new_code = urlParams.get('code-new')
    console.log (product_new_code)
    console.log (related_products_wrapper)

    // Hide section when in page its a "new" product
    if (product_new_code) {
        related_products_wrapper.classList.add ("hide")
    } else {
        // Get related products from fake api
        let related_products = await get_related_products (product_code)
    
        // Render products in page
        row_counter = 0
        for (let related_product of related_products) {
            row_counter++
            let selector_product = `.products .product:nth-child(${row_counter})`
            let procuct_elem = document.querySelector (selector_product)
            procuct_elem.querySelector("p.code").innerHTML = related_product[0]
            procuct_elem.querySelector("p.name").innerHTML =  `${related_product[2]} (${related_product[1]})`
            procuct_elem.querySelector("p.price").innerHTML =  `${related_product[3]} USD`
            procuct_elem.querySelector("img").setAttribute ("src", `../imgs/products/${related_product[4]}`)
            procuct_elem.querySelector("a").setAttribute ("href", `../product/?code=${related_product[0]}`)
        }
    }

}

show_related_products()