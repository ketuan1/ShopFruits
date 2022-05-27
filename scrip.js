//form search
let searchForm = document.querySelector('.search-form');
document.querySelector('#search-btn').onclick = () => {
  searchForm.classList.toggle('active');
  shoppingCart.classList.remove('active');
  loginForm.classList.remove('active');
  navbar.classList.remove('active');
}

//form cart 
let shoppingCart = document.querySelector('.shopping-cart');
document.querySelector('#cart-btn').onclick = () =>{
   shoppingCart.classList.toggle('active');
   searchForm.classList.remove('active');
   loginForm.classList.remove('active');
   navbar.classList.remove('active');
}


//form login 

let loginForm = document.querySelector('.login-form');
document.querySelector('#login-btn').onclick = () =>{
   loginForm.classList.toggle('active');
   searchForm.classList.remove('active');
   shoppingCart.classList.remove('active');
   navbar.classList.remove('active');
   
}

//navbar
let navbar = document.querySelector('.navbar');
document.querySelector('#menu-btn').onclick = () =>{
   navbar.classList.toggle('active');
   searchForm.classList.remove('active');
   shoppingCart.classList.remove('active');
   loginForm.classList.remove('active');
}

//js remove active click form
window.onscroll = () =>{
   searchForm.classList.remove('active');
   shoppingCart.classList.remove('active');
   loginForm.classList.remove('active');
   navbar.classList.remove('active');
}

//dung tool swiper -> section products
var swiper = new Swiper(".product-slider", {
   loop:true,
   spaceBetween: 20,
   autoplay: {
       delay: 7500,
       disableOnInteraction: false,
   },
   centeredSlides: true,
   breakpoints: {
     0: {
       slidesPerView: 1,
     },
     768: {
       slidesPerView: 2,
     },
     1020: {
       slidesPerView: 3,
     },
   },
});