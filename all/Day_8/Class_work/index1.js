let arr=[1,2,3,4,5,6,"silva","loki",true,undefined];
    //map
let out = arr.map((ele, index) => {
    return ele * 0.5;
});
console.log(out); // returns an array with each element multiplied by 0.5
//filter
let filterout =arr.filter((ele,index)=>{
    return typeof ele== `string`
})
console.log(filterout); // returns an array of strings
//reduce
let reduceout=arr.reduce((acc,current)=>{
    return acc+current;
});
console.log(reduceout); // returns the sum of all elements in the array
//forEach
let foreachout= arr.forEach((ele,index)=>{
    return ele*2;
})
console.log(foreachout); // returns undefined because forEach does not return anything
