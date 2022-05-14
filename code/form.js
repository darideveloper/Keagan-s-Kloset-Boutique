const form_product = document.querySelector ("form.product-details") 
const input_sizes = document.querySelector ("#sizes") 
const input_quantity = document.querySelector ("#quantity") 

const form_client = document.querySelector ("form.client-details") 
const input_name = document.querySelector ("#name")
const input_email = document.querySelector ("#email")
const input_pc = document.querySelector ("#pc")
const input_address = document.querySelector ("#address")
const input_comments = document.querySelector ("#comments")
const input_submit = document.querySelector ("input.btn")

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

function activate_submit () {
    // Activate submit button

    // Check input values 
    let inputs = [input_name, input_email, input_pc, input_address]
    let valid_inputs = true
    for (let input of inputs) {
        value = input.value
        if (!value) {
            valid_inputs = false
        }
    }

    // Activate submit button
    if (valid_inputs) {
        input_submit.classList.remove ("disabled")
        input_submit.removeAttribute ("disabled")
    } else {
        input_submit.classList.add ("disabled")
        input_submit.setAttribute ("disabled", "")
    }
}

function validate_input (input_elem, min_lenght) {

    // Validate input lenght
    let input_text = input_elem.value
    let input_error = input_elem.parentNode.querySelector ("span.error")
    let message = "The " + input_elem.getAttribute ("name")+ " must have at least " + min_lenght + " characters"
    if (input_text.length < min_lenght) {
        input_error.classList.remove ("hide")
        input_error.innerHTML = message
    } else {
        input_error.classList.add ("hide")
    }

}

input_name.addEventListener ("change", function (e) {
    activate_submit ()
    validate_input (input_name, 3)
})

input_email.addEventListener ("change", function (e) {
    activate_submit ()
    validate_input (input_email, 8)
})

input_pc.addEventListener ("change", function (e) {
    activate_submit ()
    validate_input (input_pc, 5)
})

input_address.addEventListener ("change", function (e) {
    activate_submit ()
    validate_input (input_address, 10)
})