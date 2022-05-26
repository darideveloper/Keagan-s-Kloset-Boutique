const data = [
    // Code, brand, name, price, image, sizes
    ["k001","Pete & Lucy","Short Sleeve Dress","28.00","k001.png", ["6-12 months"]],
    ["k002","Pete & Lucy","2 Piece Set","30.00","k002.png", ["3T"]],
    ["k003","Pete & Lucy","Short Sleeve Dress","28.00","k003.png", ["2T", "7-8"]],
    ["k004","Pete & Lucy","Short Sleeve Dress","28.00","k004.png", ["10-12"]],
    ["k005","Pete & Lucy","Dress","28.00","k005.png", ["3T"]],
    ["k006","Pete & Lucy","2 Piece Set","28.00","k006.png", ["12-18 months", "10-12"]],
    ["k007","Pete & Lucy","Short Sleeve Dress","28.00","k007.png", ["5"]],
    ["k008","Pete & Lucy","2 Piece Set","30.00","k008.png", ["7-8"]],
    ["k009","Pete & Lucy","Short Sleeve Dress","28.00","k009.png", ["0-6 months"]],
    ["k010","Pete & Lucy","2 Piece Shorts Set","28.00","k010.png", ["2T", "4T", "6-6X"]],
    ["k011","Pete & Lucy","Dress","28.00","k011.png", ["12-18 months", "4T", "6-6X"]],
    ["k012","Pete & Lucy","2 Piece Set","30.00","k012.png", ["6-12 months"]],
    ["k013","Pete & Lucy","Dress","28.00","k013.png", ["10-12"]],
    ["kal001","AnnLoren","Unicorn Jumpsuit Short Romper","26.00","kal001.jpeg", ["2-3T", "4-5T", "6-6X"]],
    ["kal002","AnnLoren","Flamingo Jumpsuit Short Romper","26.00","kal002.jpeg", ["gone"]],
    ["kal003","AnnLoren","Pink Daisy Flowy Jumpsuit","20.00","kal003.jpeg", ["gone"]],
    ["kal004","AnnLoren","Stars and Stripes Jumpsuit","28.00","kal004.jpeg", ["gone"]],
    ["kal005","AnnLoren","Flamingo Dress","28.00","kal005.jpeg", ["4-5T", "6-6X", "7-8"]],
    ["kal006","AnnLoren","Baby Girls Jumpsuit","28.00","kal006.jpeg", ["12-18 months", "18-24 months"]],
    ["kal007","AnnLoren","Baby Girls Jumpsuit","28.00","kal007.jpeg", ["gone"]],
    ["kal008","AnnLoren","Dress/Legging Set","38.00","kal008.jpeg", ["4-5T", "6-6X"]],
    ["as01", "Adorable Sweetness", "Summer Coral/grey polka dot set", "23.99", "as01.jpeg", ["5"]],
    ["as02", "Adorable Sweetness", "Mustard flower set", "30.99", "as02.jpeg", ["4","5","8","10","12"]],
    ["as03", "Adorable Sweetness", "Coral crab short set", "19.99", "as03.jpeg", ["7"]],
    ["as04", "Adorable Sweetness", "Blue 3tiered dress", "25.99", "as04.jpeg", ["3","4","5"]],
    ["as05", "Adorable Sweetness", "Barn flutter set", "30.99", "as05.jpeg", ["5"]]
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
        "details": "Adorable Sweetness created by a mom who won't settle for any less than an “Oh my” styles",
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

    let random_products = []
    let brand_products = []
    let current_brand
    let current_product
    
    // Get brand of the current product
    for (let product of data) {
        if (product[0] == code) {
            current_brand = product[1]
            current_product = product
            break
        }
    }

    // Get products from the same brand
    for (let product of data) {
        if (product[1] == current_brand) {
            brand_products.push (product)
        }
    }

    // Renove current product from brand
    brand_products = brand_products.filter(item => item !== current_product)

    // Select and show 4 random products
    for (let i = 0; i<4; i++) {

        // Get random product
        let random_index = Math.floor(Math.random() * brand_products.length)
        let random_product = brand_products[random_index]

        // Save
        random_products.push (random_product)

        // Remove element from list
        brand_products = brand_products.filter(item => item !== random_product)
    }

    return random_products
}