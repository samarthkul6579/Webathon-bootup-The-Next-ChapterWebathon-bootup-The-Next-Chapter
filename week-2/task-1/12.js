// Write a function that prints the multiplication table of a number using a while loop.


let number = 7;

function table(number) {
    let i = 1;
    while (i <= 10) {
      console.log(number + " x " + i + " = " + (number * i));
      i++;
    }
  }
  
  table(number);
  
