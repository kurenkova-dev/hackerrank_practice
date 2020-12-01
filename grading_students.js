//Problem Description https://www.hackerrank.com/challenges/grading/problem

function gradingStudents(grades) {
    let finalArray = [];  
    for (let i = 0; i < grades.length; i++) {
        if (grades[i] < 38) {
        finalArray.push(grades[i]);
        } 
        else {
            if((grades[i] + 1)%5==0) {
            finalArray.push(grades[i] +1);
            } 
            else if((grades[i] + 2)% 5 == 0) {
            finalArray.push(grades[i] + 2);
            } 
            else {
            finalArray.push(grades[i]);
            }
        }
    }
  return finalArray; 
}
