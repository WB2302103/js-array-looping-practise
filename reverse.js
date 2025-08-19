// array has push pop shift and unshift
// push takes last value  insert
// pop out also last value  delete
// shift also takes out first value delete
// unshift mainly do the a thing that
// it will out the first value and add the thing
// and also if that find other new value it take the
// new thing in the first 

// var arr=[1,2,3,4,5,7];
// var newarr=[];
// var nws;
// for(var i=0;i<arr.length;i++)
// {
// //     console.log(arr[i]);
// //    newarr.push(arr[i]);
// }
// push operation:
// console.log(newarr);
// it will take the last value and then it operate like 123457 and it will truncket the last value 7
// arr.pop();
// console.log(arr);

// oush operaiton:
// var arr=[1,2,3,4,5,7];
// var newarr=[];
//  for(var i=0;i<arr.length;i++)
//  {
//     // console.log(arr[i]);
// //    newarr.push(arr[i]);
//  }
// // console.log(newarr);
// // it will trunket the first value of the array
// // like 123457 it will trunket the first value 1
// arr.shift()
// console.log(arr);

// unshift:array reverse method 1 using for loop:
// var arr=[1,2,3];
// var newarr=[];
// var nws;
//  for(var i=0;i<arr.length;i++)
//  {
//      console.log(arr[i]);
//     newarr.unshift(arr[i]);
//  }
//  console.log(newarr);
//  unshift moloto prothom value ke normal store dei
// kinto jokhon 2nd value prothom value last a diye
// 2nd value ke first position a ane dei
//1,2 using unshift it will done this :[ 2, 1 ]
// 1,2,3 using unshift firstly it will take:
//[1]in array then when it receive 2 it will 
// change the position for the 2nd value:
// in this time first value position in been changed in 2nd value and 2nd value is in first value position:[1,2]:using unshift:[2,1] then
// if 3rd it will like this:[ 3, 2, 1 ] 

// 2nd short method for reversing:
let number=[1,2,3,5];
// let reversed=[];
// for(const num of number)
// {
//     // console.log(num);
//     reversed.unshift(num);
// }
// // num of number means the num is empty using of number array it will have the number array value then we will shift with new value reversed array and also using unshift 
// console.log(number);
// console.log(reversed);

// Last simple reverse:
// we just use the reverse function which is auto emmet
// it's reverse the array which we are running so it will rverse
// the array :i mean it will reverse the preset array:
// 1 2 3 4 5: then it will revere: 5 4 3 2 1
// reverse() it's a built in method
console.log(number);
number.reverse()
console.log(number);
nm=[14,57,63,89,20];
let nu=nm.reverse();
console.log(nu);
// reverse method :1.Unshift using for and while loop 
// and also using for(var nam and the array name)
// and also built in function only normal reverse()