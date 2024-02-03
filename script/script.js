document.addEventListener("DOMContentLoaded", () => {
    async function getAllProducts() {
        const res = await fetch("https://fakestoreapi.com/products")
        // console.log("RESPONSE: ", res)
        const allProducts = res.json();
        return allProducts
    }

    // We have a container called "products"

    // We would like to display data from the API for each product and append it to the container
    function displayProducts(products) {
        const container = document.getElementById("products");

        products.forEach((product) => {
            const productDiv = document.createElement("div");
            productDiv.className = "row"
            productDiv.innerHTML = `<img class="try" src=${product.image} alt="" />
            <div class="pro">
            <h3>${product.category}</h3>
            <p>Price Rs. ${product.price}| undefined</p>
              
            </div>
            <div class="price">
              <h4>${product.title}</h4>
              
            </div>`
            container.appendChild(productDiv);
        })
        
        // console.log("CONTAINER", container);
    }

    
    const displayAllProducts = async () => {
        const getProducts = await getAllProducts()
        displayProducts(getProducts);
    }
    displayAllProducts();
})



/*category
: 
"men's clothing"
description
: 
"Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday"
id
: 
1
image
: 
"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
price
: 
109.95
rating
: 
{rate: 3.9, count: 120}
title
: 
"Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops"
*/