// Write a JavaScript function that checks whether a number is prime.

let num = 61;

function isPrimeSimple(num) {
    if (num <= 1) return false; // Numbers less than or equal to 1 are not prime
  
    for (let i = 2; i < num; i++) {
      if (num % i === 0) return false; // If divisible by any number other than 1 and itself, it's not prime
    }
  
    return true; // The number is prime
  }
  
 
  console.log(num + " is prime: " + isPrimeSimple(num));
