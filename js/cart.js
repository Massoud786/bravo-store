const cartItemsEl = document.getElementById("cartItems");
const subtotalEl = document.getElementById("subtotal");
const taxEl = document.getElementById("tax");
const shippingEl = document.getElementById("shipping");
const totalEl = document.getElementById("total");

function getCart() {
    return JSON.parse(localStorage.getItem("cart")) || [];
}
function saveCart(cart) {
    localStorage.setItem("cart", JSON.stringify(cart));
}
function removeItem(id) {
    const cart = getCart();
    const item = cart.findIndex(p => p.id === id);
    if(item === -1) return;

    cart.splice(item, 1);
    saveCart(cart);
    renderCart();
}

 function updateQty(id, delta) {
    const cart = getCart();
    const item = cart.find(p => p.id === id);
    if(!item) return;

    item.qty += delta;

    if(item.qty <= 0) {
     const index = cart.findIndex(p => p.id === id);
        cart.splice(index, 1);
        }
        saveCart(cart);
        renderCart();
        
    }  
function renderCart() {
    const cart = getCart();
    cartItemsEl.innerHTML = "";

    if(cart.length === 0){
        cartItemsEl.innerHTML = "<p>Your cart is empty.</p>";
        subtotalEl.textContent = "$0.00";
        taxEl.textContent = "$0.00";
        shippingEl.textContent = "$0.00";
        totalEl.textContent = "$0.00";
        return;
    }

    let subtotal = 0;
    const TAX_RATE = 0.10;

    cart.forEach (item => {
        const price = Number(item.price) || 0;
        const qty = Number(item.qty) || 1;

        const itemTotal = price * qty;
        subtotal += itemTotal;

        const div = document.createElement("div");
        div.className = "cart-item";
        div.innerHTML = `
        <img src="${item.image}" width="80" alt="${item.name}">
        <div class="cart-info"> 
        <strong>${item.name}</strong>
        <p>Price: $${price.toFixed(2)}</p>

        <div class="qty-controls">
        <button class="qty-btn" data-action="decrease" data-id="${item.id}">-</button>
        <span class="qty-value">${qty}</span>
        <button class="qty-btn" data-action="increase" data-id="${item.id}">+</button>
        </div>
        </div>
        <div class="cart-actions">
        <p>Total $${itemTotal.toFixed(2)}</p>
        <button class="remove-btn" data-id="${item.id}">Remove</button>
        </div>
        `;
        
        cartItemsEl.appendChild(div)
    });
    const tax = +(subtotal * TAX_RATE).toFixed(2);
    const shipping = 6.99;
    const total = +(subtotal + tax + shipping).toFixed(2);

    subtotalEl.textContent = `$${subtotal.toFixed(2)}`;
    taxEl.textContent = `$${tax.toFixed(2)}`;
    shippingEl.textContent = `$${shipping.toFixed(2)}`;
    totalEl.textContent = `$${total.toFixed(2)}`;
}
cartItemsEl.addEventListener("click",(e) => {
    const removeBtn = e.target.closest(".remove-btn");
    if(removeBtn) {
        removeItem(removeBtn.dataset.id);
        return;
    }
    const qtyBtn = e.target.closest(".qty-btn");
    if(qtyBtn) {
    const id = qtyBtn.dataset.id;
    const action = qtyBtn.dataset.action;
    updateQty(id, action === "increase" ? 1 : -1)
}
});
renderCart();