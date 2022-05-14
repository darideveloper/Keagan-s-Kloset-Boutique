const product_wrapper_elem = document.querySelector ('section.product-main > .content');
const product_name_elem = document.querySelector (".product-main h1")
const product_details_elem = document.querySelector (".product-main h2")
const product_price_elem = document.querySelector (".product-main h3")
const product_img_elem = document.querySelector (".product-main > .content img")
const product_loading_elem = document.querySelector (".product-main img.loading")


var product_code
var product_brand
var product_name
var product_price
var product_image
var product_sizes
var product_details

async function show_product () {

    // Get product code from url
    const queryString = window.location.search
    const urlParams = new URLSearchParams(queryString)
    var product_code = urlParams.get('code')

    // redirect to home with incorrect url
    if (!product_code) {
        window.location.href = ".."
    }

    // Get current product from fake api
    product = await get_product (product_code)

    // redirect to home with incorrect product code
    if (!product) {
        window.location.href = ".."
    }

    // get product data
    product_code = product_code.toUpperCase()
    product_brand = product[1]
    product_name = product[2]
    product_price = product[3] + " USD"
    product_image = product[4]
    product_sizes = product[5]
    product_details = product_brand + " (" + product_code + ")"

    // Update general data in page
    product_name_elem.innerHTML = product_name
    product_details_elem.innerHTML = product_details
    product_price_elem.innerHTML = product_price

    // Generate sizes
    if (product_sizes.length > 0) {
        for (let product_size of product_sizes) {

            // Generate option element
            let size_elem = document.createElement ("option")
            size_elem.setAttribute ("value", product_size)
            size_elem.innerHTML = product_size

            // Add to select
            input_sizes.appendChild (size_elem)
        }
    } else {
        // Remove sizes select
        input_sizes.parentNode.parentNode.removeChild (input_sizes.parentNode)

        // Update comments text
        input_comments.innerHTML = "Type your comments and product size here..."
    }

    // Update image
    let image_url = "../imgs/products/full-size/" + product_image
    product_img_elem.setAttribute ("src", image_url)

    // Update total
    update_total_price ()

    // Show product data
    product_loading_elem.classList.add ("hide")
    product_wrapper_elem.classList.remove('hide')

}

show_product ()
