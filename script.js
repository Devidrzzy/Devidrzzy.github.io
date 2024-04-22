document.addEventListener("DOMContentLoaded", function () {
  // Select elements

  const scrollUpBtn = document.querySelector(".scroll__up");
  
const Show = document.querySelector('.phone-mode-image');
const cancel = document.querySelector('.cancel');



Show.addEventListener('click',() => {
    document.querySelector('.cancel').style.display ='flex';
    document.querySelector('.phone-mode-image').style.display ='none';
    document.querySelector('.ul-wrapper').style.display ='flex';
});

cancel.addEventListener('click',() => {
    document.querySelector('.cancel').style.display ='none';
    document.querySelector('.phone-mode-image').style.display ='flex';
    document.querySelector('.ul-wrapper').style.display ='none';
});

  // Scroll-to-top button functionality
  window.addEventListener("scroll", function () {
    if (window.scrollY > 300) {
      scrollUpBtn.classList.add("show");
    } else {
      scrollUpBtn.classList.remove("show");
    }
  });

  scrollUpBtn.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
  
})