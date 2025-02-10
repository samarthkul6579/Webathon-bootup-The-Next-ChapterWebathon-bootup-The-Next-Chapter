// Write a function that assigns grades based on marks using nested if-else.
		
// Marks >= 90 → Grade A  
// Marks >= 80 → Grade B  
// Marks >= 70 → Grade C  
// Marks >= 60 → Grade D  
// Else → Fail


 let marks = 85;
function assignGrade(marks) {
    let grade;
    
    if (marks >= 90) {
      grade = 'A';
    } else if (marks >= 80) {
      grade = 'B';
    } else if (marks >= 70) {
      grade = 'C';
    } else if (marks >= 60) {
      grade = 'D';
    } else {
      grade = 'Fail';
    }
    
    return grade;
  }
  
 
  console.log("Marks: " + marks + " -> Grade: " + assignGrade(marks));
  
