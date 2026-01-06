// Array of Product object
const products = [{
    id: "lap-1",
    name: "Ultrabook 14\"",
    category: "laptops",
    brand: "BravoTech",
    price: 999,
    rating: 4.7,
    image: "../assets/laptop.png",
    badge: "Best Seller"
},
{
    id: "desk-1",
    name: "Gaming Desktop RTX",
    category: "desktops",
    brand: "BravoGaming",
    price: 1499,
    rating: 4.8,
    image: "../assets/product-page/desktop.png",
    badge: "New"
},
{
    id: "tab-1",
    name: "10\" Tablet Plus",
    category: "tablets",
    brand: "TabPro",
    price: 399,
    rating: 4.4,
    image: "../assets/product-page/tablet-plus.png",
    badge: null
},
{
    id: "phone-1",
    name: "BravoPhone X",
    category: "phones",
    brand: "Bravo",
    price: 799,
    rating: 4.6,
    image: "../assets/product-page/phone.png",
    badge: "Hot"
},
{
    id: "acc-1",
    name: "Wireless Mouse",
    category: "accessories",
    brand: "BravoGear",
    price: 29,
    rating: 4.3,
    image: "../assets/wireless-mouse.png",
    badge: null
},
{
    id: "speaker-1",
    name: "Wireless Speaker",
    category: "accessories",
    brand: "BravoSpeaker",
    price: 20,
    rating: 4.8,
    image: "../assets/wireless-speaker.png",
    badge: null

},
{
    id: "lap-2",
    name: "MacBook Pro",
    category: "laptops",
    brand: "Apple",
    price: 999,
    rating: 4.9,
    image: "../assets/product-page/apple-macbook.png",
    badge: null
},
{
    id: "lap-3",
    name: "MacBook Air",
    category: "laptops",
    brand: "Apple",
    price: 1099,
    rating: 4.7,
    image: "../assets/product-page/macbook-air.png",
    badge: "New"

},
{
    id: "lap-4",
    name: "Lenovo",
    category: "laptops",
    brand: "Lenovo",
    price: 599,
    rating: 4.9,
    image: "../assets/product-page/lenovo-laptop.png",
    badge: "New"
},
{
    id: "lap-5",
    name: "HP",
    category: "laptops",
    brand: "HP",
    price: 499,
    rating: 4.9,
    image: "../assets/product-page/HP.png",
    badge: "New"
},
{
    id: "lap-6",
    name: "Sony",
    category: "laptops",
    brand: "Sony",
    price: 399,
    rating: 4.3,
    image: "../assets/product-page/Sony.png",
    badge: null
},
{
    id: "lap-7",
    name: "Samsung",
    category: "laptops",
    brand: "Samsung",
    price: 799,
    rating: 5,
    image: "../assets/product-page/Samsung.png",
    badge: null
},
{
    id: "desc-2",
    name: "Samsung",
    category: "desktops",
    brand: "Samsung",
    price: 599,
    rating: 4.3,
    image: "../assets/product-page/Samsung-desktop.png",
    badge: "New"
},
{
    id: "desc-3",
    name: "Imac",
    category: "desktops",
    brand: "Apple",
    price: 599,
    rating: 4.3,
    image: "../assets/product-page/Imac.png",
    badge: null
},
{
    id: "desc-4",
    name: "Dell",
    category: "desktops",
    brand: "Dell",
    price: 1399,
    rating: 4.9,
    image: "../assets/product-page/Dell.png",
    badge: "New"
},
{
    id: "desc-5",
    name: "Sony",
    category: "desktops",
    brand: "Sony",
    price: 1099,
    rating: 4.9,
    image: "../assets/product-page/HP-desktop.png",
    badge: null
},
{
    id: "tab-2",
    name: `Andriod Tablet - 10.4" Full HD Display`,
    category: "tablets",
    brand: "Samsung",
    price: 499,
    rating: 4.9,
    image: "../assets/product-page/tablet-andriod.png",
    badge: null
},
{
    id: "tab-3",
    name: "ipad (10th Generation) - Colorful Bezel Edition",
    category: "tablets",
    brand: "Apple",
    price: 799,
    rating: 4.9,
    image: "../assets/product-page/apple-ipad.png",
    badge: null
},
{
    id: "tab-4",
    name: "ipad Air - Lightweight, Modern, and Stunningly Sleek",
    category: "tablets",
    brand: "Apple",
    price: 399,
    rating: 4.7,
    image: "../assets/product-page/ipad-air.png",
    badge: null
},
{
    id: "tab-5",
    name: "Sony Tablet - Sleek, Modern, and Vibrantly Designed",
    category: "tablets",
    brand: "Sony",
    price: 299,
    rating: 4.5,
    image: "../assets/product-page/Sony-ipad.png",
    badge: null
},
{
    id: "phone-2",
    name: "iphone 17 Pro Max - Sleek, Modern, and Premium Design",
    category: "phones",
    brand: "Apple",
    price: 1299,
    rating: 5,
    image: "../assets/product-page/iphone-17ProMax.png",
    badge: "New"
},
{
    id: "phone-3",
    name: "iphone 17 Pro",
    category: "phones",
    brand: "Apple",
    price: 1099,
    rating: 5,
    image: "../assets/product-page/iphone-17-pro.png",
    badge: "New"
},
{
    id: "phone-4",
    name: "iphone X - Silver Edition",
    category: "phones",
    brand: "Apple",
    price: 799,
    rating: 4.8,
    image: "../assets/product-page/iphone-10.png",
    badge: null
},
{
    id: "phone-5",
    name: "Samsung Galaxy S24 (Matte Black Edition)",
    category: "phones",
    brand: "Samsung",
    price: 999,
    rating: 4.8,
    image: "../assets/product-page/Galaxy.png",
    badge: "New"
},
{
    id: "phone-6",
    name: "Apple Airpods Pro",
    category: "accessories",
    brand: "Apple",
    price: 299,
    rating: 4.6,
    image: "../assets/product-page/airpod-one.png",
    badge: null
},
{
    id: "acc-2",
    name: "Samsung Galaxy A14",
    category: "phones",
    brand: "Samsung",
    price: 599,
    rating: 4.8,
    image: "../assets/product-page/Galaxy-1.png",
    badge: null
},
{
    id: "acc-3",
    name: "iphone 17 Pro Max silicone case",
    category: "accessories",
    brand: "Apple",
    price: 50,
    rating: 4.8,
    image: "../assets/product-page/iphone-case.png",
    badge: null
},
{
    id: "acc-4",
    name: "iphone Tempered Glass Screen Protector",
    category: "accessories",
    brand: "Apple",
    price: 45,
    rating: 4.8,
    image: "../assets/product-page/screen-protector.png",
    badge: null
},
{
    id: "acc-5",
    name: "Apple USB Power Adapter - Compact & Fast Charging",
    category: "accessories",
    brand: "Apple",
    price: 25,
    rating: 4.5,
    image: "../assets/product-page/iphone-charger.png",
    badge: null
},
{
    id: "acc-6",
    name: "Apple USB-C cable",
    category: "accessories",
    brand: "Apple",
    price: 20,
    rating: 4.1,
    image: "../assets/product-page/USB-C.png",
    badge: null
},
{
    id: "acc-7",
    name: "Samsung USB-C cable",
    category: "accessories",
    brand: "Samsung",
    price: 30,
    rating: 4.1,
    image: "../assets/product-page/samsung-c.png",
    badge: null
},
{
    id: "acc-8",
    name: "Samsung Charger and Cable Combo",
    category: "accessories",
    brand: "Samsung",
    price: 50,
    rating: 4.3,
    image: "../assets/product-page/samsung-cable.png",
    badge: null
},
{
    id: "acc-9",
    name: "Samsung Charger and Cable Combo",
    category: "accessories",
    brand: "Apple",
    price: 120,
    rating: 4.6,
    image: "../assets/product-page/samsung-cable.png",
    badge: null
},
{
    id: "acc-10",
    name: "Full-Sized Wireless Keyboard - White $ Silver Edition",
    category: "accessories",
    brand: "Apple",
    price: 120,
    rating: 4.6,
    image: "../assets/product-page/keyboard.png",
    badge: null
}
];

// ========= Rendering ========
const grid = document.getElementById("products-grid");
const searchInput = document.getElementById("searchInput");
const filterButtons = document.querySelectorAll(".filter-btn");

// Helper: create star string from rating 
function getStarString(rating) {
    const rounded = Math.round(rating);
    return "*".repeat(rounded) + "☆".repeat(5 - rounded);
}

// Render list of products into the grid
function renderProducts(list) {
    if (!grid) return;
    if (list.length === 0) {
        grid.innerHTML = `<p class="grid-product">No products found.<p/>`;
        return;
    }

    grid.innerHTML = "";

    list.forEach((product) => {
        const card = document.createElement("article");
        card.className = "product-card";

        card.innerHTML = `<div class=product-img-wrapper>
    <img src="${product.image}" alt="${product.name}">
    </div>
    <div class="product-text">
    <div class="product-name">${product.name}</div>
    <div class="product-meta">
    <span>${product.brand}</span> .
    <span>${getStarString(product.rating)}(${product.rating.toFixed(1)})</span>
    </div>
   
    <div class="product-price">$${product.price}</div>
    ${product.badge ? `<div class="product-badge">${product.badge}</div> ` : ""}
     <div>
     <button class="add-to-cart-btn" data-id="${product.id}">Add to Cart</button> 
     </div>
    `;

        grid.appendChild(card);
    });
}

// ======= Filtering Logic ======

// read default category from URL
const params = new URLSearchParams(window.location.search);
const defaultCategory = (params.get("category") || "all").toLowerCase();
const defaultSearch = (params.get("search") || "").toLowerCase();
let currentCategory = defaultCategory;
let currentSearch = defaultSearch;

// Apply both category + search filter 
function getFilteredProducts() {
    return products.filter((p) => {
        const matchesCategory =
            currentCategory === "all" ? true : p.category === currentCategory;
        const search = currentSearch.toLowerCase();
        const matchesSearch = p.name.toLowerCase().includes(search) ||
            p.brand.toLowerCase().includes(search);

        return matchesCategory && matchesSearch;
    });
}
function handleCategoryClick(button) {
    filterButtons.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");

    // update current category 
    currentCategory = button.dataset.category || "all";

    // re-render
    renderProducts(getFilteredProducts());
}

// ==== Get cart ====
function getCart() {
    return JSON.parse(localStorage.getItem("cart")) || [];
}
// ==== Save cart ====
function saveCart(cart) {
    localStorage.setItem("cart", JSON.stringify(cart));
}
// ===== Add to cart =====
function addToCart(productId) {
    const cart = getCart();
    const product = products.find(p => p.id === productId);
    if (!product) return;

    const existing = cart.find(item => item.id === productId);

    if (existing) {
        existing.qty += 1;
    }
    else {
        cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.image,
            qty: 1
        });
    }
    saveCart(cart);
}

// ==== Update cart count ====
function updateCartCount() {
    const cart = getCart();
    const countEl = document.getElementById("cart-count");
    if (!countEl) return;
    let count = 0;
    cart.forEach(item => count += item.qty);

    countEl.textContent = count;
}

// ==== Event Setup ====
document.addEventListener("DOMContentLoaded", () => {

    updateCartCount();
    // category filter buttons
    filterButtons.forEach((btn) => {
        // highlight the button that matches the current category 
        if ((btn.dataset.category || "all") === currentCategory) {
            btn.classList.add("active");
        }
        // add click event once
        btn.addEventListener("click", () => handleCategoryClick(btn));
    });

    // Client-side products search
    if (searchInput) {
        searchInput.addEventListener("input", (e) => {
            currentSearch = e.target.value.trim().toLowerCase();
            renderProducts(getFilteredProducts());
        });
    }
    grid.addEventListener("click", (e) => {
        const btn = e.target.closest(".add-to-cart-btn");
        if (!btn) return;
        const productId = btn.dataset.id;
        if (!productId) return;

        addToCart(productId);
        updateCartCount();

        btn.textContent = "Added ✓";
        setTimeout(() => (btn.textContent = "Add to Cart"), 2000);
    });

    // initial render using filters
    renderProducts(getFilteredProducts());
});


