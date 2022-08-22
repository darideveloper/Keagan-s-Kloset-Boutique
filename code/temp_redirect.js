function temp_hide_form () {
    // Hide last buy form inputs
    input_size.parentNode.classList.add ("hide")
    input_quantity.parentNode.classList.add ("hide")
    input_submit.classList.add ("hide")
    total_elem.parentNode.classList.add ("hide")

    // Replace form content
    form_product.innerHTML += "<a class='btn cta' href='https://www.facebook.com/KeagansKloset' target='_blank'>Buy on facebook</a>"
}
