const cartItemsEl = document.getElementById("cartItems");
const subtotalEl = document.getElementById("subtotal");
const taxEl = document.getElementById("tax");
const shippingEl = document.getElementById("shipping");
const totalEl = document.getElementById("total");

const checkoutForm = document.getElementById("checkoutForm");

function getCart() {
  return JSON.parse(localStorage.getItem("cart")) || [];
}
function saveCart(cart) {
  localStorage.setItem("cart", JSON.stringify(cart));
}

function removeItem(id) {
  const cart = getCart();
  const index = cart.findIndex(p => p.id === id);
  if (index === -1) return;
  cart.splice(index, 1);
  saveCart(cart);
  renderSummary();
}

function renderSummary() {
  const cart = getCart();
  cartItemsEl.innerHTML = "";

  if (cart.length === 0) {
    cartItemsEl.innerHTML = "<p>Your cart is empty.</p>";
    subtotalEl.textContent = "$0.00";
    taxEl.textContent = "$0.00";
    shippingEl.textContent = "$0.00";
    totalEl.textContent = "$0.00";
    return;
  }

  let subtotal = 0;
  const TAX_RATE = 0.10;
  const SHIPPING = 6.99;

  cart.forEach(item => {
    const price = Number(item.price) || 0;
    const qty = Number(item.qty) || 1;

    const itemTotal = price * qty;
    subtotal += itemTotal;

    const div = document.createElement("div");
    div.className = "checkout-item";
    div.innerHTML = `
     <img class="checkout-item-img" src="${item.image}" alt="${item.name}">
    <div class="checkout-item-mid">
    <div class="checkout-item-name">${item.name}</div>
    <div class="checkout-item-meta">$${price.toFixed(2)} × ${qty}</div>
    </div>
    <div class="checkout-item-right">
    <div class="checkout-item-total">$${itemTotal.toFixed(2)}</div>
    <button class="checkout-remove" data-id="${item.id}" type="button">Remove</button>
   </div>
`;
    cartItemsEl.appendChild(div);
  });

  const tax = +(subtotal * TAX_RATE).toFixed(2);
  const shipping = SHIPPING;
  const total = +(subtotal + tax + shipping).toFixed(2);

  subtotalEl.textContent = `$${subtotal.toFixed(2)}`;
  taxEl.textContent = `$${tax.toFixed(2)}`;
  shippingEl.textContent = `$${shipping.toFixed(2)}`;
  totalEl.textContent = `$${total.toFixed(2)}`;
}

cartItemsEl.addEventListener("click", (e) => {
  const removeBtn = e.target.closest(".checkout-remove");
  if (removeBtn) removeItem(removeBtn.dataset.id);
});

function onlyDigits(str) {
  return (str || "").replace(/\D/g, "");
}
function getOrders() {
  return JSON.parse(localStorage.getItem("orders")) || [];
}
function saveOrders(orders) {
  localStorage.setItem("orders", JSON.stringify(orders));
}

checkoutForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const cart = getCart();
  if (cart.length === 0) {
    alert("Your cart is empty.");
    return;
  }

  // HTML required validation (shows built-in browser messages)
  if(!checkoutForm.checkValidity()) {
    checkoutForm.reportValidity();
    return;
  }

  // Grab form values 
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const firstName = document.getElementById("firstName").value.trim();
  const lastName = document.getElementById("lastName").value.trim();
  const address = document.getElementById("address").value.trim();
  const apt = document.getElementById("apt").value.trim();
  const city = document.getElementById("city").value.trim();
  const state = document.getElementById("state").value.trim();
  const zip = document.getElementById("zip").value.trim();

  // payment
  const cardNumber = onlyDigits(document.getElementById("cardNumber").value);
  const exp = document.getElementById("exp").value.trim();
  const cvv = onlyDigits(document.getElementById("cvv").value);
  const cardName = document.getElementById("cardName").value.trim();
  
  if(cardNumber.length < 13 || cardNumber.length > 19) {
    alert("Please enter a valid card number.");
    return;
  }
  if(!/^\d{2}\/\d{2}$/.test(exp)) {
    alert("Expiration must be MM/YY (example: 07/28).");
  }
  if(cvv.length < 3 || cvv.length > 4) {
    alert("Please enter a valid CVV.");
    return;
  }
  if(!cardName) {
    alert("Please enter the name on card.");
    return;
  }
  const orderTotals = {
    subtotal: subtotalEl.textContent,
    tax: taxEl.textContent,
    shipping: shippingEl.textContent,
    total: totalEl.textContent
  };

  // Build order
  const orderId = "BRV-" + Math.floor(Math.random() * 1_000_000);
  const order = {
    orderId,
    createdAt: new Date().toISOString(),
    customer: {
      email, phone, firstName, lastName, address, apt, city, state, zip
    },
    items: cart,
    totals: orderTotals,
    payemnt: {
      last4: cardNumber.slice(-4)
    }
  };
  // Save order history
  const orders = getOrders();
  orders.unshift(order);
  saveOrders(orders);

  // Save last order for thank-you page
  localStorage.setItem("lastOrder", JSON.stringify(order));

  // Clear cart + reset UI
  localStorage.removeItem("cart");
  renderSummary();
  checkoutForm.reset();

  //alert(`Order placed successfyllu! Order ID: ${orderId}`);

  // Redirect to thank you page
   window.location.href="/bravostore/confirmation.html";
});

renderSummary();