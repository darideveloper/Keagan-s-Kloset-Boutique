// Product form
const form_product = document.querySelector ("form.product-details") 
const input_size = document.querySelector ("#size") 
const input_quantity = document.querySelector ("#quantity") 
const input_submit = document.querySelector ("#submit") 

// Hidden inputs
const input_code = document.querySelector ("#code")

// Total tag
const total_elem = document.querySelector ("p.total > span")


// Update comments default text
var comments_updated = false
var comments_text = ""

// Update total
input_quantity.addEventListener ("change", function (e) {
    update_total_price ()
})

function update_total_price () {
    let total_num = parseFloat(product_price) * parseFloat(input_quantity.value)
    let total = total_num.toFixed(2) + " USD"
    total_elem.innerHTML = total
}