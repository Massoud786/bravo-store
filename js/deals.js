function getCart() {
  return JSON.parse(localStorage.getItem("cart")) || [];
}

function saveCart(cart) {
  localStorage.setItem("cart", JSON.stringify(cart));
}
function updateCartBadge() {
    const cart = getCart();
    const count = cart.reduce((sum,item) => sum + (Number(item.qty) || 1), 0);

    const badge = document.getElementById("cartCount");
    if(!badge) return;

    badge.textContent = count;
    badge.style.display = count > 0 ? "flex" : "none";
}

function addToCart(product) {
  const cart = getCart();
  const existing = cart.find(p => String(p.id) === String(product.id));

  if (existing) {
    existing.qty = (Number(existing.qty) || 1) + 1;
  } else {
    cart.push({ ...product, qty: 1 });
  }

  saveCart(cart);
  updateCartBadge();
}

function showInlineToast(button, message) {
  let toast = button.parentElement.querySelector(".inline-toast");

  if (!toast) {
    toast = document.createElement("div");
    toast.className = "inline-toast";
    button.after(toast);
  }

  toast.textContent = message;

  // Trigger animation
  requestAnimationFrame(() => {
    toast.classList.add("show");
  });

  // Auto-hide
  clearTimeout(toast._timer);
  toast._timer = setTimeout(() => {
    toast.classList.remove("show");
  }, 3000);
}

document.addEventListener("click", (e) => {
  const btn = e.target.closest(".add-to-cart-btn");
  if (!btn) return;

  addToCart({
    id: btn.dataset.id,
    name: btn.dataset.name,
    price: Number(btn.dataset.price),
    image: btn.dataset.image
  });

  showInlineToast(btn, "Added to cart 🛒");
});