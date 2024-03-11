

// product.js
// function groupProductsByCategory(products) {
//     const groupedProducts = {};
//     products.forEach(product => {
//         if (!groupedProducts[product.category]) {
//             groupedProducts[product.category] = [];
//         }
//         groupedProducts[product.category].push(product);
//     });
//     return groupedProducts;
// }
// function generateCategory(category, products) {
//     const productsContainer = document.getElementById("products");
    
//     // Create category heading
//     const categoryHeading = document.createElement("h2");
//     categoryHeading.textContent = category;
//     productsContainer.appendChild(categoryHeading);
//     productsContainer.style.cssText="display:flex"
//     // Generate product cards for the category
//     products.forEach(product => {
//         const productCard = document.createElement("div");
//         productCard.classList.add("product-card");

//         productCard.innerHTML = `
//             <img src="${product.image}" alt="${product.title}">
//             <h3>${product.title}</h3>
//             <p>Category: ${product.category}</p>
//             <p>Description: ${product.description}</p>
//             <p>Price: $${product.price}</p>
//             <button class="add-to-cart-btn" data-product-id="1">Add to Cart</button>

//         `;

//         productsContainer.appendChild(productCard);
//     });
// }
// product.js

// Function to fetch all products from the API

// Function to generate product cards dynamically
// function generateProductCards(data) {
//     const productsContainer = document.getElementById("products");

//     data.forEach(product => {
//         const productCard = document.createElement("div");
//         productCard.classList.add("product-card");

//         productCard.innerHTML = `
//             <img src="${product.image}" alt="${product.title}">
//             <h3>${product.title}</h3>
//             <p>Category: ${product.category}</p>
//             <p>Description: ${product.description}</p>
//             <p>Price: $${product.price}</p>
//             <button class="add-to-cart-btn" data-product-id="1">Add to Cart</button>
//         `;

//         productsContainer.appendChild(productCard);
//     });
// }

// // Function to generate product cards dynamically
// function generateProductCards(data) {
//     const productsContainer = document.getElementById("products");

//     data.forEach(product => {
//         const productCard = document.createElement("div");
//         productCard.classList.add("product-card");

//         productCard.innerHTML = `
//             <img src="${product.image}" alt="${product.title}">
//             <h3>${product.title}</h3>
//             <p>Category: ${product.category}</p>
//             <p>Description: ${product.description}</p>
//             <p>Price: $${product.price}</p>
            


//         `;

//         productsContainer.appendChild(productCard);
//     });

// }
    
// Call the function to generate product cards when the page loads

// Function to fetch all products from the API
function fetchAllProducts() {
    return fetch("https://fakestoreapi.com/products")
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });
}

// Function to generate product cards dynamically
function generateProductCards(data) {
    const productsContainer = document.getElementById("products");

    data.forEach(product => {
        const productCard = document.createElement("div");
        productCard.classList.add("product-card");

        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.title}" height=200px width=200px>
            <h3>${product.title}</h3>
            <p>Category: ${product.category}</p>
            <p>Description: ${product.description}</p>
            <h3>Price: $${product.price}</h3>
            <button class="add-to-cart-btn" onclick="addToCart(${JSON.stringify(product)})">Add to Cart</button>
        `;

        productsContainer.appendChild(productCard);
    });
}
// Fetch all products and generate product cards dynamically
window.onload = () => {
    fetchAllProducts()
        .then(data => {
            generateProductCards(data);
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });
};
