var shopingShop = {
    book: 3,
    pen:12,
    biskut:3,
}

// methor 01
var penCount = shopingShop.pen ;

// methor 02
var penCount2 = shopingShop['pen'];

// methor 03
var propertys =Object.keys(shopingShop);
var propertysValue =Object.values(shopingShop);

console.log(propertys)
console.log(propertysValue)