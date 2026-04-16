let students = [
  { name: "Sujan", marks: [85, 90, 78] },
  { name: "Anita", marks: [92, 88, 95] },
  { name: "Rohit", marks: [70, 75, 80] }
];

// Function to calculate average
function calculateAverage(marks) {
  let total = 0;
  for (let mark of marks) {
    total += mark;
  }
  return total / marks.length;
}

// Display student averages
for (let student of students) {
  console.log(student.name + "'s average:", calculateAverage(student.marks));
}


