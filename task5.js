// Task 5
// Copy the given array into another array so that changing the copy does not affect the original.Change the first element of the copied array to 99.

// Input: [1, 2, 3]

// Expected Output:

// Original: [1, 2, 3] Copy: [99, 2, 3]
// var arr=[1, 2, 3];
// const new_arr=[...arr];
// new_arr[0]=99;
// console.log(arr);
// console.log(new_arr);

// concat method
// var number=[1, 2, 3];
// const new_arr=[].concat(arr);
// new_arr[0]=99;
// console.log(arr);
// console.log(new_arr);
// looping normal
var number=[1, 2, 3];
var nm=[];
for(num of number)
{
  nm.push(num);
}
console.log(number);
nm[0]=99;
console.log(nm);