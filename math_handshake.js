//Problem Description https://www.hackerrank.com/challenges/handshake/problem

function handshake(n) {
    /*
     * Write your code here.
     */
    let sum = 0;
    for (let i = 1; i <=n; i++) {
        sum += n-i;
    }
    return sum

}
