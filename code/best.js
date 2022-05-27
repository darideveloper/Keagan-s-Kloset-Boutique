const best_products_wrapper = document.querySelector('#best .products-best')
const cta_link_arrow = document.querySelector('.cta-link-arrow')

async function show_best_products () {

    let best_products_data = await get_best_products()

    // Remove last wrapper content
    best_products_wrapper.classList.remove ("flex")
    best_products_wrapper.innerHTML = ""

    
    // Generate best products tags
    for (best_product of best_products_data) {
        // Copy link svg 
        let cta_link_arrow_copy = cta_link_arrow.cloneNode(deep=true)
        cta_link_arrow_copy.classList.remove ("hide")
        
        // Create tags
        let product_elem = document.createElement ("div")
        let wrapper_img_elem = document.createElement("div")
        let img_elem = document.createElement("img")
        let details_elem = document.createElement("div")
        let h2_elem = document.createElement("h2")
        let p_brand_element = document.createElement("p")
        let link_elem = document.createElement("a")
        let p_link_elem = document.createElement("p")
        let svg_elem = document.createElement("svg")
    
        // Update attribs
        product_elem.classList.add ("product-best")
        wrapper_img_elem.classList.add ("wrapper-img")
        img_elem.setAttribute ("src", "imgs/products/" + best_product[4])
        img_elem.setAttribute ("alt", "product photo " + best_product[2])
        details_elem.classList.add ("details")
        h2_elem.innerHTML = best_product[2]
        p_brand_element.classList.add ("brand")
        p_brand_element.innerHTML = best_product[1]
        link_elem.classList.add ("btn")
        link_elem.classList.add ("cta-link")
        p_link_elem.innerHTML = "SHOP NOW"

        // Ganarate best product link
        let link = product_link = "./product/?code=" + best_product[0]
        link_elem.setAttribute ("href", link)
        link_elem.setAttribute ("target", "_blank")

        // Nest elements
        wrapper_img_elem.appendChild (img_elem)
        link_elem.appendChild (p_link_elem)
        link_elem.appendChild (cta_link_arrow_copy)
        details_elem.appendChild (h2_elem)
        details_elem.appendChild (p_brand_element)
        details_elem.appendChild (link_elem)
        product_elem.appendChild (wrapper_img_elem)
        product_elem.appendChild (details_elem)

        // Add products to wrapper 
        best_products_wrapper.appendChild (product_elem)
    
    
    }
}

show_best_products ()

