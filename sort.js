// var number=[5,4,3,2,1,6,9];
// // it's unsorted number i mean the 
// // serial will be 1,2,3,4,5,6,9;
// // so for sorting we use sort()function
// number.sort();
//  var friends=['sokib','akib','rrkib','akil'];
//  friends.sort(); console.log(friends);
// javascipt sort () deafult is mainly check 
// the characrter like a character and s i mean
// string character which checked in this 
// so it will easy to  do this but in this 
// if the value is too much same it will confuesd
// so that it will give the values wrong output:
// like 1,11,12,13,44,56; it cant't be changeable
// so that we have to be togehter
// 2nd thing which is confusion is 
// :so that we have to use 2nd way

// noramal sort:
var number=[5,6,4,3,2,1];
console.log(number);
number.sort();
// console.log(number);

var names=['Aakib','akil','Rokib','aaaaa'];
console.log(names);
names.sort();
// console.log(names);

const ages=[1,5,100,15,8,2,28];
console.log(ages);
ages.sort();
console.log(ages);
// it will give wrong answer and reason is
// it's been confused that what change he will
// do for the array to sort so that the sorting
// will not give correct ans:
// like expected is :[1,5,100,15,8,2,28]:
//               Ans:[1,2,5,8,15,28,100] this is expected
// but it gives [1,100,15,2,28,5,8] this will give wrong ansewer
// Javascript mainly do by deafult operation by using string type
// string type means it will use character wise 
// string akare compare kore tai ata wrong dei
// so atar solve hochee
// 1st solve and it's assending order follwed :
// 1,2,5,8,15,28,100 it's assending because:
// smaller to bigger
const sorted_ages=ages.sort(function(a,b){return(a-b)});
console.log(sorted_ages);

// Decending sort :Bigger to smaller:
const sorted_age=ages.sort(function(a,b){return(b-a)});
console.log(sorted_age);
