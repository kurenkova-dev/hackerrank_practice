//Problem Description https://www.hackerrank.com/challenges/bus-station/problem

function solve(a) {
    var temp = input.split('\n'),
        n = temp[0], a = temp[1].split(' ').map(Number),
        sum = 0, divs = [], result = [];
    
    for(i in a){sum += a[i]};
    
    for(i = 1; i <= sum >> 1; i++){
        if(!(sum % i)) divs.push(i);
    };
    
    for(i in divs){
        var acc = 0, j = 0;
        while(acc <= divs[i]){
            if (acc != divs[i]) acc += a[j++]
            else acc = 0;
        };
        if(!(acc)) result.push(divs[i]);
    };
    result.push(sum);
    
    console.log(...result);
}
