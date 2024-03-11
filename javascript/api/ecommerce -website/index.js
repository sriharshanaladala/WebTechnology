// // Fetch products and generate product cards
// fetch("https://fakestoreapi.com/products")
//     .then(response => {
//         if (!response.ok) {
//             throw new Error('Network response was not ok');
//         }
//         return response.json();
//     })
//     .then(data => {
//         // Extract unique categories from the product data
//         const categories = [...new Set(data.map(product => product.category))];
        
//         // Call the function to generate category elements
//         generateCategoryElements(categories);
        
//         // Call the function to generate product cards with fetched data
//         generateProductCards(data);
//     })
//     .catch(error => {
//         console.error('There was a problem with the fetch operation:', error);
//         // Handle errors
//     });

// // Function to generate category elements dynamically
// function generateCategoryElements(categories) {
//     const categoriesContainer = document.getElementById("categories");

//     categories.forEach(category => {
//         const categoryElement = document.createElement("div");
//         categoryElement.classList.add("category");
//         categoryElement.textContent = category;

//         categoriesContainer.appendChild(categoryElement);
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
//             <button>Add to Cart</button>
//         `;

//         productsContainer.appendChild(productCard);
//     });
// }
// index.js

// this one works
// Function to fetch all products and generate product cards dynamically
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
    const categories = {};

    // Group products by categories
    data.forEach(product => {
        if (!categories[product.category]) {
            categories[product.category] = [];
        }
        categories[product.category].push(product);
    });

    // Display products by categories
    for (const category in categories) {
        const categoryContainer = document.createElement("div");
        categoryContainer.classList.add("category");

        const categoryHeading = document.createElement("h2");
        categoryHeading.textContent = category;

        const categoryProductsContainer = document.createElement("div"); // Rename to categoryProductsContainer
        categoryProductsContainer.classList.add("products-container");
        categories[category].forEach(product => {
            const productCard = document.createElement("div");
            productCard.classList.add("product-card");
            
            productCard.innerHTML = `
                <img src="${product.image}" alt="${product.title}" height=200px width=200px>
                <h3>${product.title}</h3>
                <h3>Price: $${product.price}</h3>
                <button class="add-to-cart-btn")">Add to Cart</button>
            `;

            categoryProductsContainer.appendChild(productCard);
        });

        categoryContainer.appendChild(categoryHeading);
        categoryContainer.appendChild(categoryProductsContainer);
        productsContainer.appendChild(categoryContainer); // Append the category container to products container
    }
}

window.onload = () => {
    fetchAllProducts()
        .then(data => {
            generateProductCards(data);
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });
};
// Function to fetch featured products from the API
// function fetchFeaturedProducts() {
//     return fetch("https://fakestoreapi.com/products?limit=6") // Fetching 6 featured products
//         .then(response => {
//             if (!response.ok) {
//                 throw new Error('Network response was not ok');
//             }
//             return response.json();
//         })
//         .catch(error => {
//             console.error('There was a problem with the fetch operation:', error);
//         });
// }

// // Function to generate product cards for featured products
// function generateFeaturedProductCards(featuredProducts) {
//     const featuredProductsContainer = document.getElementById("featured-products");

//     featuredProducts.forEach(product => {
//         const productCard = document.createElement("div");
//         productCard.classList.add("product-card");

//         productCard.innerHTML = `
//             <img src="${product.image}" alt="${product.title}">
//             <h3>${product.title}</h3>
//             <p>Category: ${product.category}</p>
//             <p>Description: ${product.description}</p>
//             <p>Price: $${product.price}</p>
//             <button class="add-to-cart-btn" data-product-id="${product.id}">Add to Cart</button>
//         `;

//         featuredProductsContainer.appendChild(productCard);
//     });
// }

// // Fetch featured products and generate product cards dynamically
// fetchFeaturedProducts()
//     .then(featuredProducts => {
//         generateFeaturedProductCards(featuredProducts);
//     })
//     .catch(error => {
//         console.error('There was a problem with the fetch operation:', error);
//     });

// Event listener for "Add to Cart" buttons
// document.addEventListener('click', function(event) {
//     if (event.target.classList.contains('add-to-cart-btn')) {
//         const productId = event.target.getAttribute('data-product-id');
//         // You can fetch product details based on the productId and add it to the cart
//         addToCart(productId);
//     }
// });
// let cart = []
