//Problem Description: https://www.hackerrank.com/challenges/cats-and-a-mouse/problem

function catAndMouse(x, y, z) {
    let result = '';
    if (Math.abs(z-x) > Math.abs(z-y)) {
        result = 'Cat B';
    } else if (Math.abs(z-y) > Math.abs(z-x)) {
        result = 'Cat A';
    } else {
        result = 'Mouse C';
    }
    return result
}
