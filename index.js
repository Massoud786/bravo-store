// hamburger button
const productItem = document.querySelector('.menu-item.products');
const productsBtn = document.querySelector('.products-btn');

productsBtn.addEventListener('click', () => {
    productItem.classList.toggle('open');
});