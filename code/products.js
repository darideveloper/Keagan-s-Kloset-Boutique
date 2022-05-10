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

    // Create element
    let brand_button = document.createElement("button")

    // Set content and attributes
    brand_button.innerHTML = brand
    brand_button.classList.add ("btn")
    brand_button.classList.add ("category")
    brand_button.classList.add (String(brand).toLowerCase().replaceAll (" ", "-"))

    // Add to wrapper 
    brand_buttons_wrapper.appendChild (brand_button)
}

// Create all products
let products_wrapper = document.querySelector (".buy .products")
for (row of data) {

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
    product_article.classList.add (String(row_brand).toLowerCase().replaceAll (" ", "-"))
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