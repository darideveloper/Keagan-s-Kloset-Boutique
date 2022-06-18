let api_base = "https://darideveloper.pythonanywhere.com/store-api/keagan/"

var brands = {}
var all_products = []
var new_products_data = []
var best_products = []


window.onload = async function() {

    await set_main_data ()

    // Get page type from url
    const queryString = window.location.search
    const urlParams = new URLSearchParams(queryString)
    var product_code = urlParams.get('code')
    var product_new_code = urlParams.get('code-new')
    
    if (product_code || product_new_code) {
        // Product page

        show_product ()
        show_related_products()

    } else {
        // Home page

        // Buy section: Load default products
        create_products ()
        
        // Buy section: Create brand buttons from buy module
        create_buttons () 
    
        // Best section: Show best products
        show_best_products ()
    
        // New section: Show new products
        show_new_products ()
    }

}

// Get data from api
async function set_main_data () {
    // Update variables "all_products" and "brands" with api data

    // Add brand "ALL"
    brands["ALL"] =  { 
        "details": "You may complete your purchase by e-mailing us with the size you want. <br> We will send you a secure link to complete your purchase.",
        "img": ""
    }

    // Main api call
    let response = await fetch (`${api_base}`)
    let response_data = await response.json ()

    // Format regular products: code, brand, name, price, image, sizes
    let products_brands = response_data ["regular_products"]
    for (const products_brand of products_brands) {

        // Save brand data
        let brand_name = products_brand["name"]
        let brand_details = products_brand["details"]
        let brand_image = products_brand["image"]
        brands[brand_name] = {
            "details": brand_details,
            "img": brand_image
        }

        let products = products_brand["products"]
        for (const product of products) {
            // Get product data
            let product_code = product["code"]
            let product_name = product["name"]
            let product_price = product["price"]
            let product_image = product["image_url"]
            let product_sizes = product["sizes"]

            // Save product data
            all_products.push ([product_code, brand_name, product_name, product_price, product_image, product_sizes])
        }
    }

    // Format new products data: id, category, name, price, image
    let new_products_categories = response_data["new_products"]
    for (const new_products_category of new_products_categories) {
        
        // Get category data
        let category_title = new_products_category["category_name"]
        let category_details = new_products_category["category_details"]
        
        let products = new_products_category["new_products"]
        let new_products = []
        for (const product of products) {
            // Get product data
            let product_id = product["id"]
            let product_name = product["name"]
            let product_price = product["price"]
            let product_image = product["image_url"]

            // Save product data
            new_products.push ([product_id, category_title, product_name, product_price, product_image])
        }

        // Save new products full data
        new_products_data.push (
            {
                "title": category_title,
                "details": category_details,
                "products": new_products
            }

        )

    }

    // Format best products: code, brand, name, price, image, sizes
    let best_products_data = response_data["best_products"]
    for (const product of best_products_data) {
        // Get product data
        let product_code = product["code"]
        let product_name = product["name"]
        let product_price = product["price"]
        let product_image = product["image_url"]
        let product_sizes = product["sizes"]
        let brand_name = product["brand_name"]

        // Save product data
        best_products.push ([product_code, brand_name, product_name, product_price, product_image, product_sizes])
    }

}

async function get_products_all () {
    // return products data formate
    return all_products
}

async function get_products_brand (brand="") {

    // Get data
    let url = `${api_base}category-products/${encodeURIComponent(brand)}/`
    let response = await fetch (url)
    let response_data = await response.json ()

    // Format data
    let formated_data = []
    let products = response_data["products"]
    for (const product of products) {
        // Get product data
        product_code = product["code"]
        product_name = product["name"]
        product_price = product["price"]
        product_image = product["image_url"]
        product_sizes = product["sizes"]

        // Save product data
        formated_data.push ([product_code, brand, product_name, product_price, product_image, product_sizes])
    }

    return formated_data
}

async function get_brands () {
    // Return brands data formated
    return brands 
}

async function get_best_products () {
    return best_products
}

async function get_product (code) {
    for (let product of all_products) {
        let product_code = product[0]
        if (product_code == code) {
            await sleep (1)
            return product
        }
    }
}

async function get_related_products (code) {

    let random_products = []
    let brand_products = []
    let current_brand
    let current_product
    
    // Get brand of the current product
    for (let product of all_products) {
        if (product[0] == code) {
            current_brand = product[1]
            current_product = product
            break
        }
    }

    // Get products from the same brand
    for (let product of all_products) {
        if (product[1] == current_brand) {
            brand_products.push (product)
        }
    }

    // Renove current product from brand
    brand_products = brand_products.filter(item => item !== current_product)

    // Select and show 4 random products
    for (let i = 0; i<4; i++) {

        // Get random product
        let random_index = Math.floor(Math.random() * brand_products.length)
        let random_product = brand_products[random_index]

        // Save
        random_products.push (random_product)

        // Remove element from list
        brand_products = brand_products.filter(item => item !== random_product)
    }

    return random_products
}

async function get_new_products () {
    return new_products_data
}

async function get_new_product (code) {
    for (let section of new_products_data) {
        let products = section["products"]
        for (let product of products) {
            let product_code = product[0]
            if (product_code == code) {
                await sleep (1)
                return product
            }
        }
    }
}