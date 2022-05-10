const brand_buttons_wrapper = document.querySelector (".buy .buttons.categories")
const products_wrapper = document.querySelector (".buy .products")
const show_all_button = document.querySelector(".buy .btn.show-products")

var brand_buttons = []

// Save all button
all_button = document.querySelector (".buy .buttons.categories .btn")
brand_buttons.push (all_button)

// Get brand from fake api 
let brands = get_brands()

// Create brand buttons
for (let brand of brands) {

    // Create element
    let brand_button = document.createElement("button")

    // Set content and attributes
    brand_button.innerHTML = brand
    brand_button.classList.add ("btn")
    brand_button.classList.add ("category")

    // Add to wrapper 
    brand_buttons_wrapper.appendChild (brand_button)

    // Save to list
    brand_buttons.push (brand_button)
}

function create_products (brand="") {

    // Create all products
    let products_counter = 0
    
    // get products from fake api
    console.log (brand)
    if (brand == "") {
        var products = get_products_all ()
    } else {
        var products = get_products_brand(brand)
    }

    console.log (brand)

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
        let product_cta = document.createElement("p")
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
        product_price.innerHTML = row_price
        product_price.classList.add ("details")
        product_price.classList.add ("price")
    
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
create_products (brand="")


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

for (let brand_button of brand_buttons) {
    brand_button.addEventListener("click", function (e) {

        // Get brand name
        let brand = e.target.innerHTML

        // Remove all current products
        products_wrapper.innerHTML = ""

        // Show new products
        if (brand == "ALL") {
            brand = ""
        }
        brand = brand.replace("&amp;", "&")
        create_products (brand)

        // Deactivate other button
        active_button = document.querySelector (".buy .buttons.categories .active")
        active_button.classList.remove ("active")

        // Active current button
        e.target.classList.add ("active")

        // Set product grid status to colapsed
        products_wrapper.classList.add ("collapsed")
        show_all_button.innerHTML = "Show All"



    })
}