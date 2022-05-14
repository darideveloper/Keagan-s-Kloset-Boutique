const form_product = document.querySelector ("form.product-details") 
const input_sizes = document.querySelector ("#sizes") 
const input_quantity = document.querySelector ("#quantity") 

const form_client = document.querySelector ("form.client-details") 
const input_name = document.querySelector ("#name")
const input_email = document.querySelector ("#email")
const input_pc = document.querySelector ("#pc")
const input_address = document.querySelector ("#address")
const input_comments = document.querySelector ("#comments")

const total_elem = document.querySelector ("p.total > span")

// Dont submit product form
form_product.addEventListener ("submit", function (e) {
    e.preventDefault()
})

// Update comments default text
var comments_updated = false
var comments_text = ""
input_comments.addEventListener ("focus", function () {
    if (! comments_updated) {
        comments_updated = true
        comments_text = input_comments.value
        input_comments.value = ""
    }
})

input_comments.addEventListener ("blur", function () {
    if (comments_updated && input_comments.value == "") {
        comments_updated = false
        input_comments.value = comments_text
    }
})

// Update total
input_quantity.addEventListener ("change", function (e) {
    update_total_price ()
})

function update_total_price () {
    let total = parseFloat(product_price) * parseFloat(input_quantity.value) + " USD"
    total_elem.innerHTML = total
}