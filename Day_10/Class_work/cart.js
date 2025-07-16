let CartData = JSON.parse(localStorage.getItem("CartData"));


console.log(CartData)

function showData(data) {
    let productsContainer = document.getElementById("products");
    productsContainer.innerHTML = "";

    if (data.length === 0) {
        productsContainer.innerHTML = "<h2>Cart is empty</h2>";
        return;
    }
    data.forEach((el, index) => {
        let productBox = document.createElement("div");
        productBox.className = "product-box";

        let heading = document.createElement("h3");
        heading.innerText = el.category;

        let img = document.createElement("img");
        img.src = el.image;

        let name = document.createElement("p");
        name.innerText = el.name;

        let price = document.createElement("p");
<<<<<<< HEAD
        price.innerText = `Price: ${el.price}`;

        let rating = document.createElement("p");
        rating.innerText = `Rating: ${el.rating}`;

        let buy =document.createElement("button");
        buy.innerText = "Buy Now";
        buy.style.backgroundColor = "green";
        buy.addEventListener("click", () => {
            alert("Thank you for your purchase!");
            buyFun(el, index);

        });
        let button = document.createElement("button");
        button.innerText = "Delete";
        button.style.backgroundColor = "red";
        button.addEventListener("click", () => {
            deleteFun(el, index);
        })
        productBox.append(heading, img, name, price, rating, button, buy);
=======
        price.innerText = el.price;

        let rating = document.createElement("p");
        rating.innerText = el.rating;

        let button = document.createElement("button");
        button.innerText = "Delete";
        button.addEventListener("click", () => {
            deleteFun(el, index);
        })
        productBox.append(heading, img, name, price, rating, button);
>>>>>>> 12fb206f3842bb7aab24f530a34a3fc59b4fd856
        document.getElementById("products").append(productBox);
    });
}
showData(CartData)
function deleteFun(el, index) {
    deletedCartData=CartData.splice(index, 1);
    console.log(deletedCartData)
    localStorage.setItem("CartData", JSON.stringify(CartData));
    showData(CartData);
<<<<<<< HEAD
}

function buyFun(el, index) {
    buyedCartData=CartData.splice(index, 1);
    console.log(buyedCartData)
    localStorage.setItem("CartData", JSON.stringify(CartData));
    showData(CartData);
}
// function PurchasePage() {
//     window.location.href = "Purchase.html";
// } 
=======
}
>>>>>>> 12fb206f3842bb7aab24f530a34a3fc59b4fd856
