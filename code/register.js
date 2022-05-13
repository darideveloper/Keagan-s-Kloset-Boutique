window.addEventListener('locationchange', show_alert)

function show_alert () {
    var url = window.location.href
    console.log (url)
    if (url.includes("thanks")) {
        
        // Create alert
        Swal.fire('Thank you for registering your email', 'You will receive promotions in your email soon')

        // Redirect
        window.location.href = "#header"
    }
}

show_alert ()