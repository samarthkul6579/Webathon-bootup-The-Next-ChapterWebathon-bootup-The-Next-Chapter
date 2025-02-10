// Find the Largest Number in an Array.

let numbers = [12, 3, 9, 1, 14];


function LargestNumber(numbers) {
    let largest = numbers[0];
    
    for (let i = 0; i < numbers.length; i++) {
      if (numbers[i] > largest) {
        largest = numbers[i];
      }
    }
    
    return largest;
}

let largestNumber = LargestNumber(numbers);
console.log("The largest number in the array is " + largestNumber);
  
