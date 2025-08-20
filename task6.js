// Given an array of student objects, print each student’s name and marks.

// [
//   { name: "John", marks: 85 },
//   { name: "Alice", marks: 90 }
// ]

// Expected ooutput:
// John scored 85
// Alice scored 90

const student= [
   { name: "John", marks: 85 },
  { name: "Alice", marks: 90 }
]

// console.log(student[0].name,"scored",student[0].marks);
// console.log(student[1].name,"scored",student[1].marks);
for(const students of student)
{
    
     console.log([students.name]+["  "]+["scored"]+["  "]+[students.marks]);
}


