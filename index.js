// hamburger button
const productItem = document.querySelector('.menu-item.products');
const productsBtn = document.querySelector('.products-btn');

productsBtn.addEventListener('click', () => {
    productItem.classList.toggle('open');
});

// Toggle Dark or Light mode
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

// Load Saved mode 
if (localStorage.getItem("dark-mode") === "enabled"){
    body.classList.add("dark-mode");
    themeToggle.checked = true;
}
themeToggle.addEventListener("change", () => {
    if(themeToggle.checked){
        body.classList.add("dark-mode");
        localStorage.setItem("dark-mode", "enabled");
    }
    else {
        body.classList.remove("dark-mode");
        localStorage.setItem("dark-mode", "disabled");
    }
});

// Product Carousel

const carousel = document.querySelector(".carousel");
const track = document.querySelector(".carousel-track");
const slides = Array.from(document.querySelectorAll(".carousel-item"));
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");

let currentIndex = 0;
const SLIDE_INTERVAL = 2000;
let autoSLideId = null;

// Go to a specific slide (handles looping)
function goToSLide(index){
    const slideWidth = slides[0].clientWidth;

    // keep index in range using module 
    currentIndex = (index + slides.length) % slides.length;

    track.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
}

// Strat auto slide
function startAutoSLide(){
    stopAutoSlide();
    autoSLideId = setInterval(() =>{
        goToSLide(currentIndex + 1);
    }, SLIDE_INTERVAL);
}

// Stop auto slide
function stopAutoSlide(){
    if(autoSLideId !== null){
        clearInterval(autoSLideId);
        autoSLideId = null;
    }
}

// Previous Button
prevBtn.addEventListener("click",() => {
    goToSLide(currentIndex -1);
});

// Next Button 
nextBtn.addEventListener("click", () => {
    goToSLide(currentIndex + 1);
});

// Pause auto-slide when user hovers over carousel 
carousel.addEventListener("mouseenter",stopAutoSlide);
carousel.addEventListener("mouseleave",startAutoSLide);

// Reculculate position on window resize (keeps slide aligned)
window.addEventListener("resize", () => {
    goToSLide(currentIndex);
});

// kick things off
goToSLide(0);
startAutoSLide();