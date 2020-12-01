//Problem Description https://www.hackerrank.com/challenges/connecting-towns/problem

function connectingTowns(n, routes) {
    /*
     * Write your code here.
     */
    let routeCount = 1;
    for(let i=0; i<routes.length; i++){
        routeCount*=routes[i];
        routeCount%=1234567;
    }
    return routeCount;
}
