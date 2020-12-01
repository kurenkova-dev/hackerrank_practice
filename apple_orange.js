//Problem Description https://www.hackerrank.com/challenges/apple-and-orange/problem

function countApplesAndOranges(s, t, a, b, apples, oranges) {
    let applesNumber = 0;
    let orangesNumber = 0;
    for (let i=0; i <= apples.length; i++) {
        if (apples[i] + a >= s && apples[i] +a <=t) {
        applesNumber++;
        }
  }
    for (let j=0; j <= oranges.length; j++) {
      if(oranges[j] + b >= s && oranges[j] + b <= t ){
      orangesNumber++;
    }
  }
  console.log(applesNumber);
  console.log(orangesNumber);
  
}
