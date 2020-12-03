//Problem description https://www.hackerrank.com/challenges/drawing-book/problem

//I know it`s really massive and can be refactored. Will study refactoring more. 

function pageCount(n, p) {
    /*
     * Write your code here.
     */
    let leftSide = 0;
    let rightSide = 0;
    let result = 0;
    
    if(p%2 == 0) {
        if (n%2 ==0) {
         leftSide = p/2;
         rightSide = (n-p)/2;   
        } else{
            leftSide = p/2;
            rightSide = (n-p-1)/2;
        }
    } else {
        if(n%2==0) {
          leftSide = (p-1)/2;
          rightSide = (n-p+1)/2;
        } else {
            leftSide = (p-1)/2;
            rightSide = (n-p)/2;
        }
    }
    if(leftSide <= rightSide){
        result = leftSide;
    } else {
        result = rightSide;
    }
    
    return result

}
