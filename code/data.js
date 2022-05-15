const data = [
    // Code, brand, name, price, image, sizes
    ["k000","Pete & Lucy","Short Sleeve Dress","28.00","k001.png", ["S", "M", "L", "XL"]],
    ["k001","Pete & Lucy","Short Sleeve Dress","28.00","k001.png", []],
    ["k002","Pete & Lucy","2 Piece Set","30.00","k002.png", []],
    ["k003","Pete & Lucy","Short Sleeve Dress","28.00","k003.png", []],
    ["k004","Pete & Lucy","Short Sleeve Dress","28.00","k004.png", []],
    ["k005","Pete & Lucy","Dress","28.00","k005.png", []],
    ["k006","Pete & Lucy","2 Piece Set","28.00","k006.png", []],
    ["k007","Pete & Lucy","Short Sleeve Dress","28.00","k007.png", []],
    ["k008","Pete & Lucy","2 Piece Set","30.00","k008.png", []],
    ["k009","Pete & Lucy","Short Sleeve Dress","28.00","k009.png", []],
    ["k010","Pete & Lucy","2 Piece Shorts Set","28.00","k010.png", []],
    ["k011","Pete & Lucy","Dress","28.00","k011.png", []],
    ["k012","Pete & Lucy","2 Piece Set","30.00","k012.png", []],
    ["k013","Pete & Lucy","Dress","28.00","k013.png", []],
    ["kal001","AnnLoren","Unicorn Jumpsuit Short Romper","26.00","kal001.jpeg", []],
    ["kal002","AnnLoren","Flamingo Jumpsuit Short Romper","26.00","kal002.jpeg", []],
    ["kal003","AnnLoren","Pink Daisy Flowy Jumpsuit","20.00","kal003.jpeg", []],
    ["kal004","AnnLoren","Stars and Stripes Jumpsuit","28.00","kal004.jpeg", []],
    ["kal005","AnnLoren","Flamingo Dress","28.00","kal005.jpeg", []],
    ["kal006","AnnLoren","Baby Girls Jumpsuit","28.00","kal006.jpeg", []],
    ["kal007","AnnLoren","Baby Girls Jumpsuit","28.00","kal007.jpeg", []],
    ["kal008","AnnLoren","Dress/Legging Set","38.00","kal008.jpeg", []]
]

const brands = {
    "ALL": {
        "details": "You may complete your purchase by e-mailing us with the size you want. <br> We will send a link via papal with your invoice.",
        "img": ""
    },
    "Pete & Lucy": {
        "details": "Pete + Lucy is not your traditional clothing line. The styles produced are only printed in limited runs.Less than 1,000 of each outfit will ever be made! This makes each and every item a hot commodity! They're high quality, super soft, and super adorable. Every week new patterns are released. Be sure to visit us on FB every weekend to take a look at new releases and place your orders!",
        "img": "pete_lucy.png"
    },
    "AnnLoren": {
        "details": "AnnLoren designs consist of unique, yet modern-trendy styles for girls as young as 6 months & all the way up to 14 years old! If you seek high-end styles at great prices, look no farther! Designer Girls and Dolls clothing that is affordable and stylish. Designed by twin sisters who are also moms!",
        "img": "annloren.png"
    },
    "Adorable Sweetness": {
        "details": "Adorable Sweetness created by a mom who won't settle for any less than an “ Oh my” styles",
        "img": "adorable_sweetness.png"
    }
}

const best_products = ["k009", "kal005"]

async function get_products_all () {
    await sleep (1)
    return data
}

async function get_products_brand (brand="") {
    let valid_products = [] 
    for (let product of data) {
        if (product[1] == brand) {
            valid_products.push (product)
        }
    }
    await sleep (1)
    return valid_products
}

async function get_brands () {
    // Get product brands
    let brands = [] 
    for (row of data) {
        let brand =  row[1]
        if (! brands.includes (brand)) {
            brands.push (brand)
        }
    }
    await sleep (1)
    return brands 
}

async function get_best_products () {
    let best_products_data = []
    for (let product_id of best_products) {
        // Get best products data
        for (product of data) {
            if (product[0] == product_id) {

                // Save product data
                best_products_data.push (product)
            }
        }
    }
    await sleep (1)
    return best_products_data
}

async function get_product (code) {
    for (let product of data) {
        let product_code = product[0]
        if (product_code == code) {
            await sleep (1)
            return product
        }
    }
}

async function get_related_products (code) {

    console.log (code)

    let brand_products = []
    let current_brand

    // Get brand of the current product
    for (let product of data) {
        if (product[0] == code) {
            current_brand = product[1]
            break
        }
    }

    // Get products from the same brand
    for (let product of data) {
        if (product[1] == current_brand) {
            brand_products.push (product)
        }
    }

    // Select and show 4 random products
    for (let i = 0; i<4; i++) {

        // Get random product
        let random_index = Math.floor(Math.random() * brand_products.length)
        let random_product = brand_products[random_index]

        // Remove element from list
        brand_products = brand_products.filter(item => item !== random_product)
 
        // Render products in page
        let selector_product = `.products .product:nth-child(${i + 1})`
        console.log (selector_product)
        let procuct_elem = document.querySelector (selector_product)
        procuct_elem.querySelector("p.code").innerHTML = random_product[0]
        procuct_elem.querySelector("p.name").innerHTML =  `${random_product[2]} (${random_product[1]})`
        procuct_elem.querySelector("p.price").innerHTML =  `${random_product[3]} USD`
        procuct_elem.querySelector("img").setAttribute ("src", `../imgs/products/${random_product[4]}`)
        procuct_elem.querySelector("a").setAttribute ("href", `../product/?code=${random_product[0]}`)
    
        
    }
}