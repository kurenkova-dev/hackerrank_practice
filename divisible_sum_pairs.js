//Problem description https://www.hackerrank.com/challenges/divisible-sum-pairs/problem

function divisibleSumPairs(n, k, ar) {
    let result = 0;
    for (let i= 0; i < ar.length; i++){
        for (let j = 0; j<ar.length; j++){
            if (i<j) {
                if ((ar[i]+ar[j])%k == 0){
                    result +=1;
                }
            }
        }
    }
    return result;
}
