function getAverege(assigmnent1, assigmnent2, assigmnent3) {
    var total = assigmnent1 + assigmnent2 + assigmnent3 ;
    var average = total / 3 ;
    return average ;
}


var assigmnent1 = 60;
var assigmnent2 = 58;
var assigmnent3 = 58;

var totalAverage = getAverege(assigmnent1, assigmnent2, assigmnent3)
console.log(totalAverage)