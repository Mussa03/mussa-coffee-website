const navLinks = document.querySelectorAll(".nav-menu .nav-link");
const menuOpenButton = document.querySelector("#menu-open-button");
const menuCloseButton = document.querySelector("#menu-close-button");

menuOpenButton.addEventListener("click", () =>{
    //toggle menu visibility
    document.body.classList.toggle("show-mobile-menu");
});


//togle menu closed 
menuCloseButton.addEventListener("click", () => menuOpenButton.click());


//close button when navigation link clicked
navLinks.forEach(link => {
  link.addEventListener("click", () => menuOpenButton.click());
});


//initialize swiper
const swiper = new Swiper('.slider-wrapper', {
  loop: true,
  grubCursor:true,
  spaceBetween:25,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  //responsive breakpoint
  breakpoints: {
    0:{
        slidesPerView: 1
    },

     768:{
        slidesPerView: 2
    },

     1024:{
        slidesPerView: 3
    },
  }
});