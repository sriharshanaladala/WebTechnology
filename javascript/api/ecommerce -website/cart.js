fetch("https://fakestoreapi.com/products?limit=6")
.then(response => response.json())
.then(products => {
    const productsContainer = document.getElementsByClassName('products-container');
    console.log(productsContainer);
    products.forEach(product => {
        const productElement = document.createElement('div');
        productElement.innerHTML = `
        <img src="${product.image}" alt="${product.title}">
        <h3>${product.title}</h3>
        <p>Category: ${product.category}</p>
        <p>Description: ${product.description}</p>
        <p>Price: $${product.price}</p>
         <button class="add-to-cart-btn" data-product-id="${product.id}">Add to Cart</button>
        `;
        productsContainer.appendChild(productElement);
    });
})
.catch(error => console.error('Error fetching products:', error));

// Cart functionality
const cart = [];

function addToCart(productId) {
// Find product by ID
const product = getProductById(productId);
if (product) {
    cart.push(product);
    updateCart();
} else {
    console.error('Product not found');
}
}

function getProductById(productId) {
// Simulated function to find product by ID from fetched products
// You may need to modify this depending on your API structure
return products.find(product => product.id === productId);
}

function updateCart() {
const cartElement = document.getElementById('cart');
cartElement.innerHTML = '';
if (cart.length === 0) {
    cartElement.textContent = 'Cart is empty';
} else {
    cart.forEach(product => {
        const cartItem = document.createElement('div');
        cartItem.textContent = product.name;
        cartElement.appendChild(cartItem);
    });
}
}