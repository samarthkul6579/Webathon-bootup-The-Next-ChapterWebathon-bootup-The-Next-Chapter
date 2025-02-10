// Write a JavaScript function to check if a number is a palindrome.


let num = 12321;

function isPalindrome(num) {
    let originalNum = num;
    let reversedNum = 0;
  
    // Reverse the number
    while (num > 0) {
      let digit = num % 10;
      reversedNum = (reversedNum * 10) + digit;
      num = Math.floor(num / 10);
    }
  
    // Check if the original number is equal to the reversed number
    return originalNum === reversedNum;
  }
  
  console.log(num + " is a palindrome: " + isPalindrome(num));
  
