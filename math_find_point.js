//Problem Description https://www.hackerrank.com/challenges/find-point/problem 

function findPoint(px, py, qx, qy) {
    let rx = 0;
    let ry = 0;
    if(px == qx){
        ry = (qy - py) + qy;
        rx = px;
    } else if (py == qy) {
        ry = py;
        rx = (qx - px) + qx;
    } else {
        rx = (qx - px) + qx;
        ry = (qy - py) + qy;
    }
    return [rx, ry]

}
