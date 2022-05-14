const brand_buttons_wrapper = document.querySelector (".buy .buttons.categories")
const products_wrapper = document.querySelector (".buy .products")
const show_all_button = document.querySelector(".buy .btn.show-products")
const loading_buttons = document.querySelector(".buy .buttons img.loading")
const loading_products = document.querySelector(".buy .products img.loading")
const brand_wrapper = document.querySelector(".buy .brand-wrapper")

var brand_buttons = []

// Save all button
all_button = document.querySelector (".buy .buttons.categories .btn")
brand_buttons.push (all_button)

async function create_buttons () {

    // Get brand from fake api 
    let brands = await get_brands()
    brands.unshift ("ALL")

    // Hide loading icon
    loading_buttons.classList.add ("hide")
    
    // Create brand buttons
    let all_active = false
    for (let brand of brands) {
    
        // Create element
        let brand_button = document.createElement("button")
    
        // Set content and attributes
        brand_button.innerHTML = brand
        brand_button.classList.add ("btn")
        brand_button.classList.add ("category")

        // Set to active the first category button (all)
        if (! all_active) {
            brand_button.classList.add ("active")
            all_active = true
        }
    
        // Add to wrapper 
        brand_buttons_wrapper.appendChild (brand_button)
    
        // Add events listener for each button
                            .addEventListener("click", async function (e) {

            // Get brand name
            let brand = e.target.innerHTML
            
            // Remove all current products
            products_wrapper.innerHTML = ""

            // Create and add loading products icon
            let loading_products_elem = document.createElement("img")
            loading_products_elem.setAttribute ("src", "imgs/loading.gif")
            loading_products_elem.setAttribute ("alt", "loading icon")
            loading_products_elem.classList.add ("loading")
            products_wrapper.appendChild (loading_products_elem)

            // Deactivate other button
            active_button = document.querySelector (".buy .buttons.categories .active")
            active_button.classList.remove ("active")
    
            // Active current button
            e.target.classList.add ("active")
    
            // Set product grid status to colapsed
            products_wrapper.classList.add ("collapsed")
            show_all_button.innerHTML = "Show All"

            // Show new products
            brand = brand.replace("&amp;", "&")
            await create_products (brand)

            // Hide loading icon (for products)
            loading_products_elem.classList.add ("hide")
        })
    }
}

create_buttons () 

async function create_products (brand="ALL") {

    // Create all products
    let products_counter = 0

    // Delete last brand data
    brand_wrapper.innerHTML = ""
    
    // get products from fake api
    if (brand == "ALL") {
        var products = await get_products_all ()
    } else {
        var products = await get_products_brand(brand)
    }

    // Get brand data 
    let brand_details = brands[brand]["details"]
    let brand_img = brands[brand]["img"]

    // Create brand tags    
    if (brand_img) {
        var brand_img_elem = document.createElement("img")
        brand_img_elem.setAttribute ("src", "imgs/brands/" + brand_img)
        brand_img_elem.setAttribute ("alt", brand + " logo")
    }

    let brand_details_elem = document.createElement("p")
    brand_details_elem.innerHTML = brand_details
    
    // Add elements in brand tag
    let brand_elem = document.createElement("div")
    brand_elem.classList.add ("brand")
    if (brand_img) {
        brand_elem.appendChild (brand_img_elem)
    }
    brand_elem.appendChild (brand_details_elem)

    // Add brand tags to grid 
    brand_wrapper.appendChild(brand_elem)

    // Hide loading icon
    loading_products.classList.add ("hide")

    // Generate products
    for (row of products) {
    
        products_counter++
    
        // Get data from row
        let row_code = row[0]
        let row_brand = row[1]
        let row_name = row[2]
        let row_price = row[3]
        let row_image = row[4]
        let row_sizes = row[5]
    
        // Create elements
        let product_article = document.createElement("article")
        let product_wrapper_img = document.createElement("div")
        let product_img = document.createElement("img")
        let product_cta = document.createElement("a")
        let product_code = document.createElement("p")
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
        product_code.innerHTML = row_code
        product_code.classList.add ("details")
        product_code.classList.add ("code")
        product_name.innerHTML = row_name + " (" + row_brand + ")"
        product_name.classList.add ("details")
        product_name.classList.add ("name")
        product_price.innerHTML = row_price + " USD"
        product_price.classList.add ("details")
        product_price.classList.add ("price")

        // Generate and set product link
        product_link = "./product/?code=" + row_code
        product_cta.setAttribute ("href", product_link)
        product_cta.setAttribute ("target", "_blank")
    
        // Show only first four products
        if (products_counter > 4) {
            product_article.classList.add ("hide")
        }
    
        // Nest elements
        product_wrapper_img.appendChild (product_img)
        product_wrapper_img.appendChild (product_cta)
        product_article.appendChild (product_wrapper_img)
        product_article.appendChild (product_code)
        product_article.appendChild (product_name)
        product_article.appendChild (product_price)
    
        // Add to wrapper
        products_wrapper.appendChild (product_article)
    }
}

// Load default products
create_products ()


show_all_button.addEventListener ("click", async function (e) {
    // Show products
    if (products_wrapper.classList.contains ("collapsed")) {
        show_hide_products (show=true)
    // Hide products
    } else {
        show_hide_products (show=false)        
    }

    window.location.href = '#buy';
})

function show_hide_products (show=true) {
    // Show products
    if (show) {
        // Remove collapse class from product wrapper
        products_wrapper.classList.remove ("collapsed")

        // Update show button text
        show_all_button.innerHTML = "Hide"

        // Make products visible
        const products = document.querySelectorAll (".buy .products .product")
        const products_show = Array.from(products).slice (4, products.length)
        for (product of products_show) {
            product.classList.remove ("hide")
        }

    // Hide products
    } else {
        // Add collapse class from product wrapper
        products_wrapper.classList.add ("collapsed")

        // Update show button text
        show_all_button.innerHTML = "Show All"

        // Hide products 
        const products = document.querySelectorAll (".buy .products .product")
        const products_hide = Array.from(products).slice (4, products.length)
        for (product of products_hide) {
            product.classList.add ("hide")
        }
    }

}
