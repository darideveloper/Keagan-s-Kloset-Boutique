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
var product_size
var product_details

async function show_product () {

    let new_product = false

    // Get product code from url
    const queryString = window.location.search
    const urlParams = new URLSearchParams(queryString)
    var product_code = urlParams.get('code')
    var thanks_name = urlParams.get('thanks')
    var product_new_code = urlParams.get('code-new')

    // Create alert and redirect to home
    if (thanks_name) {
        await Swal.fire('Thanks for your purchase '+ thanks_name +'. We will check the last details by email')
        window.location.href = ".."
    }

    if (product_code) {
        product = await get_product (product_code)
    } else if (product_new_code) {
        product = await get_new_product (product_new_code)
        product.push ([])
        new_product = true
    } else {
        // redirect to home with incorrect url
        window.location.href = ".."

    }


    // redirect to home with incorrect product code
    if (!product) {
        window.location.href = ".."
    }

    // get product data
    product_code = product[0]
    product_brand = product[1]
    product_name = product[2]
    product_price = product[3] + " USD"
    product_image = product[4]
    product_sizes = product[5]
    product_details = product_brand

    // Update hidden inputs values
    input_name_hide.value = product_name
    input_details_hide.value = product_details
    input_price_hide.value = product_price

    // Update general data in page
    product_name_elem.innerHTML = product_name
    product_details_elem.innerHTML = product_details
    product_price_elem.innerHTML = product_price

    // Generate size
    if (product_sizes.length > 0) {

        // Set value to size hidden input
        input_size_hide.value = product_sizes[0]

        for (let product_size of product_sizes) {

            // Generate option element
            let size_elem = document.createElement ("option")
            size_elem.setAttribute ("value", product_size)
            size_elem.innerHTML = product_size

            // Add to select
            input_size.appendChild (size_elem)
        }
    } else {
        // Remove size select
        input_size.parentNode.parentNode.removeChild (input_size.parentNode)

        // Update comments text
        input_comments.innerHTML = "Type your comments and product size here..."
    }

    // Update image
    let image_url = product_image
    product_img_elem.setAttribute ("src", image_url)

    // Update total
    update_total_price ()

    // Show product data
    product_loading_elem.classList.add ("hide")
    product_wrapper_elem.classList.remove('hide')

    // // Update paypal form
    // input_paypal_name.value = product_name
    // input_paypal_code.value = product_code

}

