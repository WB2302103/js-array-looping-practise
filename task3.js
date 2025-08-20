// Use a for...of loop to concatenate all the elements of an array into a single string.

// Input: var numbers = ['Tom', 'Tim', 'Tin', 'Tik']

// Output:

// 'TomTimTinTik'
 var numbers = ['Tom', 'Tim', 'Tin', 'Tik'];
 var con='';
 for(var i=0;i<numbers.length;i++)
 {
    con=con.concat(numbers[i]);
   
 }
 console.log(con);
//  array concat or joining 
