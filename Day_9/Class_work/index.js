// Promise

<<<<<<< HEAD
const os = require("os");

=======
>>>>>>> 12fb206f3842bb7aab24f530a34a3fc59b4fd856
// const myPromise = () =>{
//     // const response = fetch("api")
//     const response = fetch("https://fakestoreapi.in/api/products")

//     console.log(response)
    
// }

// myPromise()

// Async Await

// const myPromise = async() =>{
//     const response = fetch("https://fakestoreapi.in/api/products")

//     console.log(response)
    
// }

// async function myFunction() {    //way for traditional functionss
    
// }



// myPromise()







// let a = "anmol";

// console.log(a);

// setTimeout(() => {
//     console.log("Delay of 2ms");
    
// },2000);

// console.log("console between 1ms and 2ms");  

// setTimeout(() => {
//     console.log("Delay of 1ms");
    
// },1000);



//ASYNC - 1.micro task(promise) 2.macro task(set timeout)

//EVENT LOOP - is a manager that continously check for .....




// let a = "anmol";

// console.log(a);

// setTimeout(() => {
//     console.log("Delay of 2ms");
    
// },2000);

// console.log("console between 1ms and 2ms");  

// setTimeout(() => {
//     console.log("Delay of 1ms");
    
// },1000);

// setTimeout(() => {
//     // for(let i=1;i<=5;i++){
//     //     console.log(i);
        
//     // }

//     for(var i=1;i<=5;i++){
//         console.log(i);
        
//     }
// },1000);

// setTimeout(() => {
//     for(var i=1;i<=5;i++){
//         console.log(i);
//     }
// },0);


// const myPromise = async() =>{
//     const response = fetch("https://fakestoreapi.in/api/products")

//     console.log(response)
    
// }

// myPromise()
const myPromise = async() =>{
    const response = await fetch("https://fakestoreapi.in/api/products")
    const res = await response.json()
    const data = res.products;
    showData(data);

    // console.log(res)
    // console.log(res.products)
}

myPromise()

async function showData(data){
    // console.log(data);

   data.forEach((element,index) => {
        // console.log(element);
        const parent = document.getElementById("parent");
        
        const h2 = document.createElement("h2")
<<<<<<< HEAD
        h2.innerText =` Brand: ${element.brand}`;
=======
        h2.innerText = element.brand;
>>>>>>> 12fb206f3842bb7aab24f530a34a3fc59b4fd856
        
        const img = document.createElement("img")
        img.src = element.image;

        img.style.width = "200px"
        img.style.height = "200px"

        const p1 = document.createElement("p")
        p1.innerText = element.title;

        const p2 = document.createElement("p")
        p2.innerText = element.price;

        const p3 = document.createElement("p")
        p3.innerText = element.category;

        const p4 = document.createElement("p")
        p4.innerText = element.discount;
        p4.style.color = "red"                                                                                                                      
        const productDiv = document.createElement("div");
        productDiv.append(h2,img,p1,p2,p3,p4)

        productDiv.style.border = "1px solid gray"

        parent.append(productDiv)
        
    })    
<<<<<<< HEAD
}console.log(os.hostname());

=======
}
>>>>>>> 12fb206f3842bb7aab24f530a34a3fc59b4fd856
