// hamburger button
const productItem = document.querySelector('.menu-item.products');
const productsBtn = document.querySelector('.products-btn');

productsBtn.addEventListener('click', () => {
    productItem.classList.toggle('open');
});

// product carousel auto-slide
const tarck = document.querySelector(".carousel-track");
const slides = document.querySelectorAll(".carousel-item");

let currentSlide = 0;

function goToSlide(index) {
    const slideWidth = slides[0].clientWidth;
    tarck.style.transform = `translatex(-${index * slideWidth}px)`;

}
//if(tarck && slides.length > 0){
  //  setInterval(()=>{
      //  currentSlide = (currentSlide + 1) % slides.length;
       // goToSlide(currentSlide);
   // },3000);
//}