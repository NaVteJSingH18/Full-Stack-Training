let arr = [1, 2, 3, 4, 5, 6, 7, 8,"rahul",true,undefined];
//  const myFun = () => {}

// for(let i=0;i<arr.length;i++){
//     console.log(ele*2);
//     let out = arr.map((ele, index) => {
//     console.log(ele, index);
//     return ele * 2;
// });
// //map returns an array
// console.log(out);
// let forEachOut = arr.forEach((ele, index) => {
    
//     return ele ;
// });
// console.log(forEachOut); // returns undefined because forEach does not return anything
// let filterout=((ele,index) => {
//     return ele%2==0;
// });
// console.log(arr.filter(filterout)); // returns an array of even numbers
// let filterout=((ele,index) => {
//     return typeof ele === 'string';
// });
// let filterout=arr.filter((ele,index) => {
//     return index%2==1;
// });
// console.log(filterout);
// let reduceout=arr.reduce((acc, current) => {

//     return acc + current;
// })
// let reduceout=arr.reduce((acc, current) => {

//     return acc + current;
// },10)
// console.log(reduceout); 
let out= arr.map((ele,index)=> {
   return ele * 2;
}
).filter((ele,index) => {
    return ele % 2 == 0;
})
console.log(out); // returns an array of even numbers multiplied by 2
