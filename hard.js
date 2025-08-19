// // Task 4 (Hard)
// // Reverse the words of a sentence. Only the position of the word will be reversed. check out the output

// // Input: const statement = 'I am a hard working person'

// // Output:

// // 'person working hard a am I'

 const statement = 'I am a hard working person';
 var s=''
//  s=statement.split(' ').reverse(' ').join(" ");
 s=statement.split(' ').reverse(' ').join(' ');
 console.log(s);
//  console.log(s);



// const sentence='I am a hard working person';
// let reverse=''
// // for(const letter of sentence)
// // {
// //     reverse=letter+reverse;
// // }
// // console.log(reverse);

// // letter of sentece is used to reverse the sentce in loop we use reverse to change the thing  dev:in reverse it will give ved

// // 2nd way  reverse
// // let rev='';
// // for(let i=0;i<sentence.length;i++)
// // {
// //     const letter=sentence[i];
// //     rev=letter+rev;
   
// // }
// //  console.log(rev);
// //  shohoj solution for reverse

// // shortcut:for reverse split is for to take space and is also used to see the whole value if it is empty string it will take the whole value serially to reverse this thin we also use reverse variable where reverse is connected to the sentece and also we use join and it is also empty do this
// const reversed=sentence.split('').reverse().join("");
// console.log(reversed);