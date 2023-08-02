// function takaDa(opu, ridoy) {
//     console.log(opu, ridoy)
//     var total = opu + ridoy ;
//     console.log(total)
//     return 40;

// }

// var backTaka = takaDa(120, 80) ;
// console.log('Back naw',backTaka)



function bringSingara(money) {
    var singaraPrice = 5 ;
    var singaraQuantity = money / singaraPrice ;
    return singaraQuantity ;
}

var myTaka = 150 ;
var singaras = bringSingara(myTaka);
console.log('singara naw', singaras)