var arr=['sani','tani','khani'];
// console.log(arr);
// for(var i=0;i<10;i++)
// {
//     console.log(arr[i]);
// }
// in this loop it gives undifend value reason is the loop is doesn't know the length of the array so that when the array value range is passed it will give the value is undefined so that we use to solve this length like: first of all we take the varible where the array stored then we take the length like :arr.length in this thing we will find the correct length of the array
for(var i=0;i<arr.length;i++)
{
    console.log(i);
    console.log(arr[i]);

}
// 0 sani  1 tani 2khani
var k=0;
// while(k<arr.length)
// {
//     console.log(arr[k]);
//     k++;
// }

const prices=[15,75,20,25,35,12];
let n=0;
while(n<prices.length)
{
    console.log(prices[n]);
    n++;
}