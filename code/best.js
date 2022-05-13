const best_products_wrapper = document.querySelector('#best .products');

async function show_best_products () {

    let best_products_data = await get_best_products()

    // Remove last wrapper content
    best_products_wrapper.classList.remove ("flex")
    best_products_wrapper.innerHTML = ""

    // Generate best products tags
    for (best_product of best_products_data) {
        // Create tags
        let product_elem = document.createElement ("div")
        let wrapper_img_elem = document.createElement("div")
        let img_elem = document.createElement("img")
        let details_elem = document.createElement("div")
        let h2_elem = document.createElement("h2")
        let p_brand_element = document.createElement("p")
        let button_elem = document.createElement("button")
        let p_button_elem = document.createElement("p")
        let svg_elem = document.createElement("svg")
        let use_elem = document.createElement("use")
    
        // Update attribs
        product_elem.classList.add ("product")
        wrapper_img_elem.classList.add ("wrapper-img")
        img_elem.setAttribute ("src", "imgs/products/" + best_product[4])
        img_elem.setAttribute ("alt", "product photo " + best_product[2])
        details_elem.classList.add ("details")
        h2_elem.innerHTML = best_product[2]
        p_brand_element.classList.add ("brand")
        p_brand_element.innerHTML = best_product[1]
        button_elem.classList.add ("btn")
        button_elem.classList.add ("cta-link")
        p_button_elem.innerHTML = "SHOP NOW"
        use_elem.setAttribute ("xlink:href", "#svg-arrow")
    
        // Nest elements
        wrapper_img_elem.appendChild (img_elem)
        svg_elem.appendChild (use_elem)
        button_elem.appendChild (p_button_elem)
        button_elem.appendChild (svg_elem)
        details_elem.appendChild (h2_elem)
        details_elem.appendChild (p_brand_element)
        details_elem.appendChild (button_elem)
        product_elem.appendChild (wrapper_img_elem)
        product_elem.appendChild (details_elem)

        // Add products to wrapper 
        best_products_wrapper.appendChild (product_elem)
    
    
    }
}

show_best_products ()

