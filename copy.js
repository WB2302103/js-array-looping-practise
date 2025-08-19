// const price=25;
// const comp_price=price;
// console.log(price);
// console.log(comp_price);
// it copies the first value in second
// let price=25;
// const comp_price=price;
// price=20;
// console.log(price);
// console.log(comp_price);


// const price=25;
// let comp_price=price;
// comp_price=15
// console.log(price);
// console.log(comp_price);


// let price=25;
// let comp_price=price;
// price=20;
// comp_price=15;
// console.log(price);
// console.log(comp_price);


// const products=[25,15,30];
// const compare_products=products;
// compare_products[0]=10;
// compare_products[1]=30;
// // in this array will voilate the 
// // number role because it mainly change
// // the main value 
// console.log(products);
// console.log(compare_products)


// const products=[25,25,25];
// const compare_products=[];
// for(const product of products)
// {
//   compare_products.push(product);
// }
// compare_products[0]=15;
//  products[1]=55;
// in this array will voilate the 
// number role because it mainly change
// the main value 
// console.log(products);
// console.log(compare_products)

// const numb=[1,2,3,4,5];
// // const new_num=Array.from(numb);
// console.log(numb);
// new_num.push(45);
// console.log(new_num);
// Array.from() it means
// it creats a deafult Array
// [ 1, 2, 3, 4, 5 ] =[ 1, 2, 3, 4, 5, 45 ] new num array


// const numb=[1,2,3,4,5];
// // const new_num=Array.from(numb);
// const new_num=[].concat(numb);
// console.log(numb);
// new_num.push(12);
// console.log(new_num);
// // [ 1, 2, 3, 4, 5 ]= concat mathod[ 1, 2, 3, 4, 5, 12 ]

const number=[1,2,3,4];
// const new_num=Array.from(numb);
const new_num=[...number];
new_num.push(12);
console.log(new_num);
console.log(number);

