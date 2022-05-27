const new_section_wrapper = document.querySelector('#new')

async function show_best_products () {
    
    // List to save section nodes
    let section_nodes = []

    // Loop for each section
    let new_products_data = await get_new_products()
    console.log (new_products_data)
    for (let new_products_section of new_products_data) {

        // header nodes

        // Create header nodes
        let section = document.createElement ('div')
        let section_title = document.createElement ('h2')
        let section_details = document.createElement ('p')

        // Add classes to header nodes
        section.classList.add ("content")
        section.classList.add ("section")
        section.classList.add ("regular-width")
        
        // Add content to header nodes
        section_title.innerHTML = new_products_section["title"]
        section_details.innerHTML = new_products_section["details"]
        
        // Add child nodes to section wrapper
        section.appendChild (section_title)
        section.appendChild (section_details)

        // Products nodes
        let products_wrapper = document.createElement ("div")
        products_wrapper.classList.add ("products")

        let products = new_products_section["products"]
        for (let product of products) {
    
            // Get data from row
            let row_code = product[0]
            let row_brand = product[1]
            let row_name = product[2]
            let row_price = product[3]
            let row_image = product[4]
        
            // Create elements
            let product_article = document.createElement("article")
            let product_wrapper_img = document.createElement("div")
            let product_img = document.createElement("img")
            let product_cta = document.createElement("a")
            let product_name = document.createElement("p")
            let product_price = document.createElement("p")
        
            // Set content and attributes
            product_article.classList.add ("product")
            product_wrapper_img.classList.add ("wrapper-img")
            product_img.setAttribute ("src", "imgs/products/" + row_image)
            product_img.setAttribute ("alt", "product image:" + row_code + " " + row_brand + " " + row_name)
            product_cta.innerHTML = "Buy Now"
            product_cta.classList.add ("buy-now")
            product_cta.classList.add ("btn")
            product_cta.classList.add ("cta")
            product_name.innerHTML = row_name + " (" + row_brand + ")"
            product_name.classList.add ("details")
            product_name.classList.add ("name")
            product_price.innerHTML = row_price + " USD"
            product_price.classList.add ("details")
            product_price.classList.add ("price")
    
            // Generate and set product link
            product_link = "./product/?code-new=" + row_code
            product_cta.setAttribute ("href", product_link)
            product_cta.setAttribute ("target", "_blank")
        
            // Nest elements
            product_wrapper_img.appendChild (product_img)
            product_wrapper_img.appendChild (product_cta)
            product_article.appendChild (product_wrapper_img)
            product_article.appendChild (product_name)
            product_article.appendChild (product_price)
        
            // Add to wrapper
            products_wrapper.appendChild (product_article)
        }

        // Add products to section
        section.appendChild (products_wrapper)
        
        // Save saection node
        section_nodes.push (section)
        
        
    }
    
    // Add to nodes to main wrapper
    new_section_wrapper.innerHTML = ""
    for (let section of section_nodes) {
        new_section_wrapper.appendChild (section)
    }
}

show_best_products ()
