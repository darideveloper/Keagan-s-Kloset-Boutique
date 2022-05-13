const testimonials_next = document.querySelector ("#testimonials button.next")
const testimonials_back = document.querySelector ("#testimonials button.back")
const testimonials_cards = document.querySelectorAll ("#testimonials .content article")

var current_card = 0
var sliding = false

testimonials_next.addEventListener ("click", function () {

    if (!sliding) {
        sliding = true
        // Calculate next card
        current_card++
        if (current_card == testimonials_cards.length) {
            current_card = 0
        }
    
        move_slider ()
    }
    
})

testimonials_back.addEventListener ("click", function () {
    // Calculate next card
    if (!sliding) {
        sliding = true
        current_card--
        if (current_card < 0 ) {
            current_card = testimonials_cards.length - 1
        }

        move_slider ()
    }
})

async function move_slider () {
    // Disbale last activate card 
    let active_testimonial = document.querySelector("#testimonials .content article.active")
    active_testimonial.classList.add ("transparent")
    await sleep (0.5)
    active_testimonial.classList.remove ("active")
    active_testimonial.classList.add ("hide")

    // Active new card
    testimonials_cards[current_card].classList.add ("active")
    testimonials_cards[current_card].classList.add ("transparent")
    testimonials_cards[current_card].classList.remove ("hide")
    await sleep (0.5)
    testimonials_cards[current_card].classList.remove ("transparent")
    sliding = false

}