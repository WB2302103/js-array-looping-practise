// array 2d
var number=[1,2,3,4,5];
var pl=[[]];
var marks=[
    [98,97,99,45,1,2,3],
    [12,56,78,80,88,1,23],
    [15,76,88,90,98,18,29],
    [89,88,87,91,99,100,54],
    // [
    //  {name:'Rofik',Designation:"Front_End_Developer",Salary:3000},
    // ],
   
];
// console.log(marks[0]);
// 2d means array in array 
//o index=[98,97,99,45,1,2,3]
//so if we want to take the 
// 0 in 0 index the output is 98
// console.log(marks[0][0]);
// 2nd way
var new_marks=marks[0];
// console.log(new_marks[0]);
// var em=marks[4];
// console.log([em[0].name]+[":"]+[em[0].Designation]+[":"]+[em[0].Salary]);
// 1st index=[98,97,99,45,1,2,3] aikhane 2nd index=1=97 ke change korte chaile
// same as 1d array:
// variable assiging matod
const mm=marks[0];
mm[1]=97;
// console.log(mm);
//  normal short method:
marks[0][2]=45;
// console.log(marks[0]);
// push:last a in kore 
// pop :last value ke out kore
// shift first ta ke out kore
// unshift swipe kore  3,4,1 arokom ase
// unshift dile 4,3,1
const first=marks[0];
// console.log(first);
// console.log(first[0]);
// marks[0].pop();
// console.log(marks);
marks[1].push(41);
// console.log(marks);
marks[1].shift();
// console.log(marks);
// marks[2].unshift()
// console.log(marks);