const data = [
    // Code, brand, name, price, image, sizes
    ["k001","Pete & Lucy","short sleeve dress","28.00","k001.png", ["S", "M", "L"]],
    ["k002","Pete & Lucy","2 piece set","30.00","k002.png", []],
    ["k003","Pete & Lucy","short sleeve dress","28.00","k003.png", []],
    ["k004","Pete & Lucy","short sleeve dress","28.00","k004.png", []],
    ["k005","Pete & Lucy","dress","28.00","k005.png", []],
    ["k006","Pete & Lucy","2 piece set","28.00","k006.png", []],
    ["k007","Pete & Lucy","short sleeve dress","28.00","k007.png", []],
    ["k008","Pete & Lucy","2 piece set","30.00","k008.png", []],
    ["k009","Pete & Lucy","short sleeve dress","28.00","k009.png", []],
    ["k010","Pete & Lucy","2 piece shorts set","28.00","k010.png", []],
    ["k011","Pete & Lucy","dress","28.00","k011.png", []],
    ["k012","Pete & Lucy","2 piece set","30.00","k012.png", []],
    ["k013","Pete & Lucy","dress","28.00","k013.png", []],
    ["kal001","AnnLoren","unicorn jumpsuit short romper","26.00","kal001.jpeg", []],
    ["kal002","AnnLoren","flamingo jumpsuit short romper","26.00","kal002.jpeg", []],
    ["kal003","AnnLoren","pink daisy flowy jumpsuit","20.00","kal003.jpeg", []],
    ["kal004","AnnLoren","stars and Stripes jumpsuit","28.00","kal004.jpeg", []],
    ["kal005","AnnLoren","flamingo dress","28.00","kal005.jpeg", []],
    ["kal006","AnnLoren","baby girls jumpsuit","28.00","kal006.jpeg", []],
    ["kal007","AnnLoren","baby girls jumpsuit","28.00","kal007.jpeg", []],
    ["kal008","AnnLoren","dress/legging set","38.00","kal008.jpeg", []]
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