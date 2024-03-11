// // Function to fetch all products from the API
// function fetchAllProducts() {
//     return fetch("https://fakestoreapi.com/products")
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

// // Function to generate product cards dynamically
// function generateProductCards(allproducts, container) {
//     allproducts.forEach(product => {
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

//         container.appendChild(productCard);
//         console.log(container);
//     });
// }

// // Fetch all products and generate product cards dynamically
// fetchAllProducts()
//     .then(products => {
//         const allProductsContainer = document.getElementById("all-products");
//         generateProductCards(products, allProductsContainer);
//     });
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
function generateProductCards(allproducts, container) {
    // Shuffle the array of products
    const shuffledProducts = shuffle(allproducts);

    shuffledProducts.forEach(product => {
        const productCard = document.createElement("div");
        productCard.classList.add("product-card");

        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.title}">
            <h3>${product.title}</h3>
            <p>Category: ${product.category}</p>
            <p>Description: ${product.description}</p>
            <h3>Price: $${product.price}</h3>
            <button class="add-to-cart-btn" data-product-id="${product.id}">Add to Cart</button>
        `;

        container.appendChild(productCard);
    });
}
// Function to shuffle an array
function shuffle(array) {
    let currentIndex = array.length, randomIndex;

    // While there remain elements to shuffle
    while (currentIndex !== 0) {
        // Pick a remaining element
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // Swap it with the current element
        [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }

    return array;
}

// Fetch all products and generate product cards dynamically
fetchAllProducts()
    .then(products => {
        const allProductsContainer = document.getElementById("all-products");
        generateProductCards(products, allProductsContainer);
    })
    .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
    });
   