// Modal pop 
document.addEventListener("DOMContentLoaded", () =>{
    const contactForm = document.querySelector(".contact-form");
    const modalOvelay = document.getElementById("contact-modal");
    const modalCloseBtn = document.querySelector(".modal-close");
    const modalOkBtn = document.querySelector(".modal-ok");
    const modalText = document.getElementById("modal-text");
    const name = document.getElementById("name");

    if (contactForm && modalOvelay) {
        contactForm.addEventListener("submit", (e) => {
            e.preventDefault();

            // show modal
            modalOvelay.classList.add("is-visible");
            modalText.textContent = `Thank you, ${name.value}.`;

            // clear form fields
            contactForm.reset();
        });
    }
    function closeModal(){
        modalOvelay.classList.remove("is-visible");
    }
    if(modalCloseBtn) {
        modalCloseBtn.addEventListener("click",closeModal);
    }
    if(modalOkBtn) {
        modalOkBtn.addEventListener("click", closeModal);
    }

    // close if user clicks outside the modal box
    if(modalOvelay) {
        modalOvelay.addEventListener("click", (e) =>{
            if(e.target === modalOvelay){
                closeModal();
            }
        });
    }
    // close on Escape key
    document.addEventListener("keydown", (e) =>{
        if(e.key === "Escape" && modalOvelay.classList.contains("is-visible")) {
            closeModal();
        }
    });
});


