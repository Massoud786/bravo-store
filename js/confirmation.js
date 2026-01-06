const orderMetaEl = document.getElementById("orderMeta");
const orderItemEl = document.getElementById("orderItems");

const tSubtotal = document.getElementById("tSubtotal");
const tTax = document.getElementById("tTax");
const tShipping = document.getElementById("tShipping");
const tTotal = document.getElementById("tTotal");

function formatDate(iso) {
  try {
    const d = new Date(iso);
    return d.toLocaleString();

  }
  catch {
    return iso;
  }
}
function renderThankYou() {
  const order = JSON.parse(localStorage.getItem("lastOrder"));

  if (!order) {
    orderMetaEl.textContent = "No recent order found.";
    orderItemEl.innerHTML = `<p>Looks like you arrived here without placing an order.</p>`;
    tSubtotal.textContent = "0.00";
    tTax.textContent = "0.00";
    tShipping.textContent = "0.00";
    tTotal.textContent = "0.00";
    return;
  }
  orderMetaEl.textContent = `Order ID: ${order.orderId} • Placed: ${formatDate(order.createdAt)}`;

  // Items
  orderItemEl.innerHTML = "";
  (order.items || []).forEach(item => {
    const price = Number(item.price) || 0;
    const qty = Number(item.qty) || 1;
    const itemTotal = price * qty;

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
      </div>
    `;
    orderItemEl.appendChild(div);
  });

  tSubtotal.textContent = order.totals?.subtotal || "$0.00";
  tTax.textContent = order.totals?.tax || "$0.00";
  tShipping.textContent = order.totals?.shipping || "$0.00";
  tTotal.textContent = order.totals?.total || "$0.00";
}
renderThankYou();
