const products = [
    { id: 1, name: 'Linen Dress', price: 180.00, img: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=800&q=80' },
    { id: 2, name: 'Sculptural Vase', price: 95.00, img: 'https://images.unsplash.com/photo-1578500484692-998829808608?w=800&q=80' },
    { id: 3, name: 'Silk Scarf', price: 65.00, img: 'https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?w=800&q=80' },
    { id: 4, name: 'Minimalist Chair', price: 420.00, img: 'https://images.unsplash.com/photo-1581539250439-c96689b516dd?w=800&q=80' }
];

const grid = document.getElementById('product-grid');
let cartCount = 0;

function renderProducts() {
    grid.innerHTML = products.map(product => `
        <div class="product-card">
            <div class="image-container">
                <img src="${product.img}" alt="${product.name}">
                <button class="add-btn" onclick="addToCart()">Add to Bag</button>
            </div>
            <div class="product-info">
                <h3>${product.name}</h3>
                <p>$${product.price.toFixed(2)}</p>
            </div>
        </div>
    `).join('');
}

function addToCart() {
    cartCount++;
    document.getElementById('cart-count').innerText = cartCount;
    // Simple feedback
    const btn = event.target;
    btn.innerText = "Added";
    setTimeout(() => btn.innerText = "Add to Bag", 1000);
}

// Initial Render
document.addEventListener('DOMContentLoaded', renderProducts);
