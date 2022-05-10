const data = [
    // Code, brand, name, price, image, sizes
    ["k001","Pete & Lucy","short sleeve dress",28.00,"k001.png", ["S", "M", "L"]],
    ["k002","Pete & Lucy","2 piece set",30.00,"k002.png", []],
    ["k003","Pete & Lucy","short sleeve dress",28.00,"k003.png", []],
    ["k004","Pete & Lucy","short sleeve dress",28.00,"k004.png", []],
    ["k005","Pete & Lucy","dress",28.00,"k005.png", []],
    ["k006","Pete & Lucy","2 piece set",28.00,"k006.png", []],
    ["k007","Pete & Lucy","short sleeve dress",28.00,"k007.png", []],
    ["k008","Pete & Lucy","2 piece set",30.00,"k008.png", []],
    ["k009","Pete & Lucy","short sleeve dress",28.00,"k009.png", []],
    ["k010","Pete & Lucy","2 piece shorts set",28.00,"k010.png", []],
    ["k011","Pete & Lucy","dress",28.00,"k011.png", []],
    ["k012","Pete & Lucy","2 piece set",30.00,"k012.png", []],
    ["k013","Pete & Lucy","dress",28.00,"k013.png", []],
    ["kal001","AnnLoren","unicorn jumpsuit short romper",26.00,"kal001.jpeg", []],
    ["kal002","AnnLoren","flamingo jumpsuit short romper",26.00,"kal002.jpeg", []],
    ["kal003","AnnLoren","pink daisy flowy jumpsuit",20.00,"kal003.jpeg", []],
    ["kal004","AnnLoren","stars and Stripes jumpsuit",28.00,"kal004.jpeg", []],
    ["kal005","AnnLoren","flamingo dress",28.00,"kal005.jpeg", []],
    ["kal006","AnnLoren","baby girls jumpsuit",28.00,"kal006.jpeg", []],
    ["kal007","AnnLoren","baby girls jumpsuit",28.00,"kal007.jpeg", []],
    ["kal008","AnnLoren","dress/legging set",38.00,"kal008.jpeg", []]
]

function get_products_all () {
    return data
}

function get_products_brand (brand="") {
    let valid_products = [] 
    for (let product of data) {
        if (product[1] == brand) {
            valid_products.push (product)
        }
    }
    return valid_products
}

function get_brands () {
    // Get product brands
    let brands = [] 
    for (row of data) {
        let brand =  row[1]
        if (! brands.includes (brand)) {
            brands.push (brand)
        }
    }
    return brands 
}