//Problem Description https://www.hackerrank.com/challenges/plus-minus/problem

function plusMinus(arr) {
    var total = arr.length;
    var positive = 0;
    var negative = 0;
    var zero = 0;
    for (let i=0; i<total; i++){
        if(arr[i] > 0){
            positive++;
        } else if(arr[i] < 0){
            negative++;
        } else {
            zero++;
        }
    }
    console.log( (positive / total).toFixed(6) )
    console.log( (negative / total).toFixed(6) )
    console.log( (zero / total).toFixed(6) )

}
