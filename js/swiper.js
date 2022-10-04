const swiper = new Swiper('.swiper', {
    // Optional parameters
    slidesPerView: 'auto',
    autoHeight:true,
    spaceBetween: 50,
    direction: 'horizontal',
    loop: true,
    grabCursor:true,
    pagination: {
      el: '.swiper-pagination',
    },
    autoplay: {
      delay:3000,
    },
    breakpoints: {
      // mobile + tablet - 320-990
      0: {
        slidesPerView: 1
      },
      704:{
        slidesPerView: 2
      },
      // desktop >= 991
      991: {
        slidesPerView: 3
      }
    }
  }); 