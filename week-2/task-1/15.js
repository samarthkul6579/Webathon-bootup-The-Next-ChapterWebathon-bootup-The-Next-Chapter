// Write a function that checks if a given number is a perfect square.


let num = 16;

function isPerfectSquare(num) {
    let sqrt = Math.sqrt(num);
    return sqrt % 1 === 0; // Check if the square root is an integer
  }
  
  console.log(num + " is a perfect square: " + isPerfectSquare(num));
  
