// data structure
//array
//object
// let arr = [1, 2, 3, 4, 5,"pankaj", true, false , null, undefined];
// console.log(arr[arr.length - 1]);
// arr.push("manish");
// console.log(arr);
// console.log(arr[arr.length - 1]);
// arr.pop("manish")
// console.log(arr);
// arr[6]="manish";
// console.log(arr);
//object
// console.log(this);  
// let obj={
//     name:"Versha",
//     batch:"FS",
//     age:19,
//     subject:{
//         1:["HTML","CSS","JS","REACT"],
//         2:["ED","DBMS","DSA","OOPs"],
//         3:["PYTHON","JAVA","C++","C#"],
//         specialization:{
//             1:"PPS",
//             2:"FS",
//             3:["SE","Flat"],
//         }
//     },
//     college:"RB",
//     myFunction: function(){
//         console.log(this);
//         let a= 10;
//         let b= 20;
//         return a + b; 
//     }
// }
// console.log(obj.subject);
// console.log(obj.name);
// console.log(obj.age) ;
// console.log(obj.subject.specialization[3][0]);
// let out= obj.myFunction();
// console.log(out);
// //conditions
// let a=40
// let b=31
// if(a < b){
//     console.log("a is less than b");
// }else if(a = b){
//     console.log("a is equal to b");

// }
// else{
//     console.log("a is not less than b");
// }
// //loops
// // for ,while, forof, forin
// let str ="John"
// for(let i=0;i< str.length;i++){
//     console.log(str[i]);
// }
// let i=1;
// while(i<10){
//     console.log(i);
//     i=i+1;
// }
let str="kamal";
let n=str.length;
// for(let i =n-1;i>=0;i--){
//     console.log(str[i]);
// }
// let n=10;
for(let i=0;i<n;i++){
    console.log(str[i]);
}
// for(let num of str){
//     console.log(num);
// }
// let obj={
//     name:"Versha",
    // batch:"FS",
    // age:19,
// }
// for (let key in obj) {
//     if (typeof(obj[key]) == 'string') {
//         console.log(obj[key]);
//     }
// }
// // }
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// for(i=0;i<arr.length;i++){
//     if(arr[i]%2 === 0){
//         console.log(`Element ${arr[i]} is even`);
//     }
//     else{
//         console.log(`Element ${arr[i]} is odd`);
//     }
// }
