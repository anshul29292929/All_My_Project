let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>
{
    searchForm.classList.toggle('active');
}

let basketCart = document.querySelector('.shopping-cart');

document.querySelector('#cart-btn').onclick = () =>
{
    basketCart.classList.toggle('active');
}

let loginForm = document.querySelector('.login-form');

document.querySelector('#login-btn').onclick = () => 
{
    loginForm.classList.toggle('active');
}



import { Swiper, SwiperSlide } from 'swiper/bundle';


var swiper1 = new Swiper("#product-slider-1", {
    loop:true,
    spaceBetween: 20,
    autoplay: {
        delay: 7500,
        disabledOnInteraction: false,
    },

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

  var swiper2 = new Swiper("#product-slider-2", {
    loop:true,
    spaceBetween: 20,
    autoplay: {
        delay: 7500,
        disabledOnInteraction: false,
    },

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