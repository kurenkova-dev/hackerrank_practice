//Problem Description https://www.hackerrank.com/challenges/breaking-best-and-worst-records/problem

function breakingRecords(scores) {
    let best = scores[0];
    let worst = scores[0];
    let numberOfBest = 0;
    let numberofWorst = 0;
    for (let n =0; n <= scores.length; n++) {
        if (scores[n] < worst) {
            worst =  scores[n];
            numberofWorst++;
        } else if (scores[n] > best){
            best = scores[n];
            numberOfBest++;
        } 
    }
    return[numberOfBest, numberofWorst]

}
